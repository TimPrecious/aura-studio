"use client"; // needed because the form reacts to typing and clicking

import { useState } from "react";

// A simple pattern to check that an email looks right (like a@b.com)
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// The look of every input box (so we don't repeat it)
const inputStyle =
  "w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-accent focus:border-accent";

export default function Contact() {
  // What the person typed in each box
  const [values, setValues] = useState({ name: "", email: "", message: "" });
  // Error messages (empty at the start)
  const [errors, setErrors] = useState({});
  // The thank-you message
  const [status, setStatus] = useState("");

  // Runs every time someone types. It saves what they typed.
  function handleChange(event) {
    setValues({ ...values, [event.target.name]: event.target.value });
  }

  // Runs when the form is sent
  function handleSubmit(event) {
    event.preventDefault(); // stop the page from reloading
    setStatus("");

    const newErrors = {};

    if (values.name.trim() === "") {
      newErrors.name = "Please enter your name.";
    }

    if (values.email.trim() === "") {
      newErrors.email = "Please enter your email.";
    } else if (!emailPattern.test(values.email.trim())) {
      newErrors.email = "Please enter a valid email, like name@example.com.";
    }

    if (values.message.trim() === "") {
      newErrors.message = "Please write a message.";
    }

    setErrors(newErrors);

    // If there is any error, stop here
    if (Object.keys(newErrors).length > 0) return;

    setStatus(
      "Your message is valid, but message delivery is not configured yet."
    );
  }

  return (
    <section id="contact" className="scroll-mt-16 py-24 px-6 bg-white">
      <div className="max-w-xl mx-auto">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Contact Us
          </h2>
          <div className="w-12 h-1 bg-accent mx-auto mt-4 rounded-full"></div>
          <p className="mt-6 text-gray-600">
            Have a project in mind? Send us a message.
          </p>
        </div>

        {/* noValidate lets our own code do the checking */}
        <form onSubmit={handleSubmit} className="mt-10 space-y-6" noValidate>
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              autoComplete="name"
              value={values.name}
              onChange={handleChange}
              className={inputStyle}
              aria-invalid={errors.name ? "true" : undefined}
            />
            <p className="mt-1 text-sm text-red-600">{errors.name}</p>
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              autoComplete="email"
              value={values.email}
              onChange={handleChange}
              className={inputStyle}
              aria-invalid={errors.email ? "true" : undefined}
            />
            <p className="mt-1 text-sm text-red-600">{errors.email}</p>
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={5}
              value={values.message}
              onChange={handleChange}
              className={inputStyle}
              aria-invalid={errors.message ? "true" : undefined}
            />
            <p className="mt-1 text-sm text-red-600">{errors.message}</p>
          </div>

          <button
            type="submit"
            className="w-full px-8 py-3 rounded-full bg-accentdark text-white font-semibold
                       hover:bg-accent transition-colors"
          >
            Send Message
          </button>

          <p role="status" className="text-center font-medium text-accentdark">
            {status}
          </p>
        </form>
      </div>
    </section>
  );
}