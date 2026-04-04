import { useEffect, useRef, useState } from "react";

const FORMSPREE_ENDPOINT = import.meta.env.VITE_FORMSPREE_ENDPOINT?.trim() ?? "";
const TURNSTILE_SITE_KEY = import.meta.env.VITE_TURNSTILE_SITE_KEY?.trim() ?? "";
const TURNSTILE_SCRIPT_ID = "cf-turnstile-script";
const CLIENT_COOLDOWN_MS = 60_000;
const MIN_FILL_TIME_MS = 3_000;
const LAST_SUBMISSION_KEY = "portfolio-contact-last-submission";

const initialValues = {
  name: "",
  email: "",
  contact_number: "",
  message: "",
  website: "",
};

function validateForm(values) {
  const errors = {};

  if (values.name.trim().length < 2) {
    errors.name = "Please enter your full name.";
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = "Please enter a valid email address.";
  }

  if (!/^[+()\-\s\d]{7,20}$/.test(values.contact_number.trim())) {
    errors.contact_number = "Please enter a valid contact number.";
  }

  if (values.message.trim().length < 20) {
    errors.message = "Please share a little more detail in your message.";
  }

  if (values.message.trim().length > 2000) {
    errors.message = "Please keep the message under 2000 characters.";
  }

  return errors;
}

function extractErrorMessage(payload) {
  if (payload && Array.isArray(payload.errors) && payload.errors.length > 0) {
    return payload.errors.map((item) => item.message).join(", ");
  }

  return "There was a problem submitting the form. Please try again.";
}

export function ContactForm() {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [turnstileToken, setTurnstileToken] = useState("");
  const formRef = useRef(null);
  const turnstileRef = useRef(null);
  const widgetIdRef = useRef(null);
  const mountedAtRef = useRef(Date.now());

  useEffect(() => {
    if (!TURNSTILE_SITE_KEY || !turnstileRef.current) {
      return undefined;
    }

    let cancelled = false;

    const renderWidget = () => {
      if (
        cancelled ||
        !window.turnstile ||
        !turnstileRef.current ||
        widgetIdRef.current !== null
      ) {
        return;
      }

      widgetIdRef.current = window.turnstile.render(turnstileRef.current, {
        sitekey: TURNSTILE_SITE_KEY,
        theme: "dark",
        action: "contact",
        callback: (token) => setTurnstileToken(token),
        "expired-callback": () => setTurnstileToken(""),
        "error-callback": () => setTurnstileToken(""),
      });
    };

    const existingScript = document.getElementById(TURNSTILE_SCRIPT_ID);

    if (window.turnstile) {
      renderWidget();
    } else if (!existingScript) {
      const script = document.createElement("script");
      script.id = TURNSTILE_SCRIPT_ID;
      script.src =
        "https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit";
      script.async = true;
      script.defer = true;
      script.onload = renderWidget;
      document.head.appendChild(script);
    } else {
      existingScript.addEventListener("load", renderWidget);
    }

    return () => {
      cancelled = true;
      if (existingScript) {
        existingScript.removeEventListener("load", renderWidget);
      }
    };
  }, []);

  function handleChange(event) {
    const { name, value } = event.target;

    setValues((current) => ({
      ...current,
      [name]: value,
    }));

    setErrors((current) => {
      if (!current[name]) {
        return current;
      }

      const next = { ...current };
      delete next[name];
      return next;
    });
  }

  async function handleSubmit(event) {
    event.preventDefault();

    if (values.website.trim()) {
      setStatus({
        type: "success",
        message: "Thanks. Your message has been received.",
      });
      return;
    }

    if (!FORMSPREE_ENDPOINT) {
      setStatus({
        type: "error",
        message:
          "The contact form is not configured yet. Add VITE_FORMSPREE_ENDPOINT to enable submissions.",
      });
      return;
    }

    if (Date.now() - mountedAtRef.current < MIN_FILL_TIME_MS) {
      setStatus({
        type: "error",
        message: "Please take a moment before submitting the form.",
      });
      return;
    }

    const lastSubmittedAt = Number(
      window.localStorage.getItem(LAST_SUBMISSION_KEY) ?? 0,
    );

    if (lastSubmittedAt && Date.now() - lastSubmittedAt < CLIENT_COOLDOWN_MS) {
      const waitSeconds = Math.ceil(
        (CLIENT_COOLDOWN_MS - (Date.now() - lastSubmittedAt)) / 1000,
      );
      setStatus({
        type: "error",
        message: `Please wait ${waitSeconds}s before sending another message.`,
      });
      return;
    }

    const nextErrors = validateForm(values);
    if (Object.keys(nextErrors).length > 0) {
      setErrors(nextErrors);
      setStatus({
        type: "error",
        message: "Please fix the highlighted fields and try again.",
      });
      return;
    }

    if (TURNSTILE_SITE_KEY && !turnstileToken) {
      setStatus({
        type: "error",
        message: "Please complete the security check and submit again.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus({ type: "idle", message: "" });

    const formData = new FormData(formRef.current);
    formData.set("name", values.name.trim());
    formData.set("email", values.email.trim());
    formData.set("contact_number", values.contact_number.trim());
    formData.set("message", values.message.trim());
    formData.set("_subject", "Portfolio enquiry for Yash Uttamchandani");
    formData.set("submitted_at", new Date().toISOString());
    formData.set("page_url", window.location.href);

    if (TURNSTILE_SITE_KEY && turnstileToken) {
      formData.set("cf-turnstile-response", turnstileToken);
    }

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        window.localStorage.setItem(
          LAST_SUBMISSION_KEY,
          String(Date.now()),
        );
        setValues(initialValues);
        setErrors({});
        setStatus({
          type: "success",
          message: "Thanks for reaching out. Your message has been sent.",
        });
        formRef.current.reset();
        setTurnstileToken("");

        if (window.turnstile && widgetIdRef.current !== null) {
          window.turnstile.reset(widgetIdRef.current);
        }

        return;
      }

      const payload = await response.json().catch(() => null);

      if (response.status === 429) {
        setStatus({
          type: "error",
          message:
            "The form is receiving too many requests right now. Please wait a minute and try again.",
        });
      } else {
        setStatus({
          type: "error",
          message: extractErrorMessage(payload),
        });
      }
    } catch (error) {
      setStatus({
        type: "error",
        message:
          "Network error while submitting the form. Please try again in a moment.",
      });
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <form
      ref={formRef}
      onSubmit={handleSubmit}
      className="rounded-[1.5rem] border border-white/10 bg-white/[0.04] p-6"
      noValidate
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="mb-2 block text-sm text-mist/76">Name</span>
          <input
            type="text"
            name="name"
            value={values.name}
            onChange={handleChange}
            autoComplete="name"
            maxLength={80}
            className="w-full rounded-2xl border border-white/10 bg-ink/45 px-4 py-3 text-sm text-white outline-none transition focus:border-sand/70"
            placeholder="Your full name"
          />
          {errors.name ? (
            <span className="mt-2 block text-xs text-[#ffb7b7]">
              {errors.name}
            </span>
          ) : null}
        </label>

        <label className="block">
          <span className="mb-2 block text-sm text-mist/76">Email</span>
          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            autoComplete="email"
            maxLength={120}
            className="w-full rounded-2xl border border-white/10 bg-ink/45 px-4 py-3 text-sm text-white outline-none transition focus:border-sand/70"
            placeholder="name@example.com"
          />
          {errors.email ? (
            <span className="mt-2 block text-xs text-[#ffb7b7]">
              {errors.email}
            </span>
          ) : null}
        </label>
      </div>

      <div className="mt-4 grid gap-4">
        <label className="block">
          <span className="mb-2 block text-sm text-mist/76">
            Contact Number
          </span>
          <input
            type="tel"
            name="contact_number"
            value={values.contact_number}
            onChange={handleChange}
            autoComplete="tel"
            inputMode="tel"
            maxLength={20}
            className="w-full rounded-2xl border border-white/10 bg-ink/45 px-4 py-3 text-sm text-white outline-none transition focus:border-sand/70"
            placeholder="+91 98765 43210"
          />
          {errors.contact_number ? (
            <span className="mt-2 block text-xs text-[#ffb7b7]">
              {errors.contact_number}
            </span>
          ) : null}
        </label>

        <label className="block">
          <span className="mb-2 block text-sm text-mist/76">Message</span>
          <textarea
            name="message"
            value={values.message}
            onChange={handleChange}
            rows={6}
            maxLength={2000}
            className="w-full rounded-2xl border border-white/10 bg-ink/45 px-4 py-3 text-sm leading-7 text-white outline-none transition focus:border-sand/70"
            placeholder="Tell me a bit about your project, role, or requirement."
          />
          {errors.message ? (
            <span className="mt-2 block text-xs text-[#ffb7b7]">
              {errors.message}
            </span>
          ) : null}
        </label>
      </div>

      <label className="hidden" aria-hidden="true">
        Website
        <input
          type="text"
          name="website"
          tabIndex="-1"
          autoComplete="off"
          value={values.website}
          onChange={handleChange}
        />
      </label>

      <input type="hidden" name="_gotcha" value={values.website} readOnly />

      {TURNSTILE_SITE_KEY ? (
        <div className="mt-5">
          <div ref={turnstileRef} />
        </div>
      ) : (
        <p className="mt-5 text-xs leading-6 text-mist/60">
          Form abuse protection is prepared for Cloudflare Turnstile. Add
          `VITE_TURNSTILE_SITE_KEY` after creating your Turnstile widget.
        </p>
      )}

      {status.message ? (
        <p
          className={`mt-5 text-sm ${
            status.type === "success" ? "text-[#cce8c2]" : "text-[#ffb7b7]"
          }`}
        >
          {status.message}
        </p>
      ) : null}

      <div className="mt-6 flex items-center justify-between gap-4">
        <p className="max-w-sm text-xs leading-6 text-mist/58">
          Protected with Formspree server-side limits, AJAX error handling, a
          honeypot trap, and an optional Turnstile check.
        </p>
        <button
          type="submit"
          disabled={isSubmitting}
          className="inline-flex items-center justify-center rounded-full bg-sand px-5 py-3 text-sm font-semibold text-ink transition hover:bg-cloud disabled:cursor-not-allowed disabled:opacity-60"
        >
          {isSubmitting ? "Sending..." : "Send Message"}
        </button>
      </div>
    </form>
  );
}
