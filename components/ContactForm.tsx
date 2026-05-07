"use client";

import { useState } from "react";
import Button from "@/components/Button";

type FormState = {
  name: string;
  email: string;
  phone: string;
  area: string;
  service: string;
};

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    phone: "",
    area: "",
    service: "",
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
    if (!form.name || !form.email || !form.area) {
      setError("Please add your name, phone, and area.");
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
        <h2 className="h3">Got it. I’ll take a look.</h2>
        <p className="body-text">
          I’ll check your details and reply within 24 hours. If this can work
          for you, I’ll tell you straight.
        </p>
        <button
          onClick={() => {
            setSubmitted(false);
            setForm({ name: "", email: "", area: "", phone: "", service: "" });
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
    <div className="flex flex-col gap-[30px]">
      <div className="flex flex-col">
        <p className="body-text" style={{ marginBottom: "18px" }}>
          Takes 30 seconds. I’ll reply within 24 hours.
        </p>
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="John"
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
        <label htmlFor="phone" className="form-label">
          Phone number
        </label>

        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="07XXXXXXXXX"
          value={form.phone}
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="area" className="form-label">
          Area you cover
        </label>
        <input
          id="area"
          name="area"
          type="text"
          placeholder="e.g. Manchester"
          value={form.area}
          onChange={handleChange}
          className="form-input"
        />
      </div>
      <div className="flex flex-col">
        <label htmlFor="service" className="form-label">
          Main service
        </label>
        <select
          id="service"
          name="service"
          value={form.service}
          onChange={handleChange}
          className="form-input"
        >
          <option value="">Select</option>
          <option value="boiler-repair">Boiler repair</option>
          <option value="boiler-install">Boiler installation</option>
          <option value="heat-pump">Heat pump installation</option>
          <option value="all">All services</option>
        </select>
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
          {loading ? "Sending..." : "Get More Enquiries"}
        </Button>

        <p className="text-[13px]" style={{ color: "var(--color-muted)" }}>
          No spam. No pressure. Straight answer.
        </p>
      </div>
    </div>
  );
}
