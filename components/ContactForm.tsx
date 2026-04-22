"use client";

import { useState } from "react";
import Button from "@/components/Button";

type FormState = {
  name: string;
  email: string;
  projectType: string;
  description: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    projectType: "",
    description: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  function handleChange(
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (error) setError("");
  }

  async function handleSubmit(e: React.MouseEvent<HTMLButtonElement>) {
    e.preventDefault();
    if (!form.name || !form.email || !form.description) {
      setError("Please fill in your name, email, and project description.");
      return;
    }
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!res.ok) {
        const data = await res.json();
        setError(data.error || "Something went wrong. Please try again.");
        return;
      }
      setSubmitted(true);
    } catch {
      setError("Network error. Please check your connection and try again.");
    } finally {
      setLoading(false);
    }
  }

  if (submitted) {
    return (
      <div
        className="flex flex-col gap-[16px] p-[48px] items-start"
        style={{ border: "1px solid var(--color-border)" }}
      >
        <span
          className="text-[40px]"
          style={{ fontFamily: "var(--font-display)" }}
        >
          ✓
        </span>
        <h2 className="h3">Message received.</h2>
        <p className="body-text">
          Thanks for reaching out. I'll read your message and get back to you
          within 24 hours.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", email: "", projectType: "", description: "" });
          }}
          className="text-[14px] text-[var(--color-accent)] hover-accent cursor-pointer"
          style={{ background: "none", border: "none" }}
        >
          Send another message →
        </button>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-[40px]">
      <div className="flex flex-col">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          className="form-input"
          autoComplete="name"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="you@company.com"
          value={form.email}
          onChange={handleChange}
          className="form-input"
          autoComplete="email"
        />
      </div>

      <div className="flex flex-col">
        <label htmlFor="projectType" className="form-label">
          Project Type
        </label>
        <select
          id="projectType"
          name="projectType"
          value={form.projectType}
          onChange={handleChange}
          className="form-input"
          style={{ cursor: "pointer" }}
        >
          <option value="" disabled>
            Select an option
          </option>
          <option value="web">Web App</option>
          <option value="mobile">Mobile App</option>
          <option value="both">Both</option>
          <option value="unsure">Not sure yet</option>
        </select>
      </div>

      <div className="flex flex-col">
        <label htmlFor="description" className="form-label">
          Brief Description
        </label>
        <textarea
          id="description"
          name="description"
          placeholder="Tell me what you're trying to build..."
          value={form.description}
          onChange={handleChange}
          rows={5}
          className="form-input"
          style={{ resize: "vertical" }}
        />
      </div>

      {error && (
        <p className="text-[14px]" style={{ color: "var(--color-accent)" }}>
          {error}
        </p>
      )}

      <div className="flex flex-col gap-[16px]">
        <Button
          type="submit"
          variant="filled"
          onClick={handleSubmit}
          className="w-full justify-center"
        >
          {loading ? "Sending..." : "Send Message"}
        </Button>
        <p className="text-[13px]" style={{ color: "var(--color-muted)" }}>
          Prefer a call?{" "}
          <a
            href="https://calendly.com/knightsaleem"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--color-accent)] hover-accent no-underline"
          >
            Book a free 30-min discovery call →
          </a>
        </p>
      </div>
    </div>
  );
}
