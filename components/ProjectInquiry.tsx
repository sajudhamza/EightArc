"use client";
import { useEffect, useState } from "react";
const options = [
  "Software development",
  "AI & LLM solutions",
  "Machine learning & RL",
  "Data analytics & engineering",
  "Technology consulting",
  "Database & data administration",
  "IT support & managed services",
  "Not sure yet",
];
export default function ProjectInquiry() {
  const [service, setService] = useState(options[0]);
  const [prepared, setPrepared] = useState(false);
  useEffect(() => {
    const requested = new URLSearchParams(window.location.search).get(
      "service",
    );
    if (requested) {
      const match =
        options.find((o) => o === requested) ||
        (requested.includes("LLM")
          ? options[1]
          : requested.includes("learning")
            ? options[2]
            : requested.includes("analytics")
              ? options[3]
              : options[0]);
      setService(match);
    }
  }, []);
  return (
    <form
      className="contact-form"
      onSubmit={(e) => {
        e.preventDefault();
        const data = new FormData(e.currentTarget);
        const body = `Name: ${data.get("name")}\nEmail: ${data.get("email")}\nService: ${service}\n\n${data.get("message")}`;
        window.location.href = `mailto:hello@eightarc.com?subject=${encodeURIComponent(`Project inquiry: ${service}`)}&body=${encodeURIComponent(body)}`;
        setPrepared(true);
      }}
    >
      <label htmlFor="name">Your name</label>
      <input
        id="name"
        name="name"
        autoComplete="name"
        placeholder="Alex Morgan"
        required
        maxLength={100}
      />
      <label htmlFor="email">Email address</label>
      <input
        id="email"
        name="email"
        type="email"
        autoComplete="email"
        placeholder="alex@company.com"
        required
        maxLength={150}
      />
      <label htmlFor="service">What can we help you with?</label>
      <select
        id="service"
        value={service}
        onChange={(e) => setService(e.target.value)}
      >
        {options.map((o) => (
          <option key={o}>{o}</option>
        ))}
      </select>
      <label htmlFor="message">Tell us about your project</label>
      <textarea
        id="message"
        name="message"
        placeholder="The challenge, the people it affects, and what you’d like to achieve…"
        required
        maxLength={2000}
      />
      <button className="primary-button" type="submit">
        Prepare project email ↗
      </button>
      <p>
        This opens your email app with a draft. Review and send it there. This
        form does not submit or store your details on this website.
      </p>
      {prepared && (
        <p role="status">
          Your email draft is ready to open. If your email app didn’t launch,
          contact{" "}
          <a className="text-link" href="mailto:hello@eightarc.com">
            hello@eightarc.com
          </a>{" "}
          directly.
        </p>
      )}
    </form>
  );
}
