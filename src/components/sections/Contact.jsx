import { useState } from "react";
import Select from "react-select";

import {
  FiArrowUpRight,
  FiMail,
  FiPhone,
  FiInstagram,
  FiFacebook,
  FiLinkedin,
} from "react-icons/fi";

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbwnGLiHs3jF3xnJR17gearZGtF1Utsc4e2oN4lIJS7qUM_tz9kFa7EchG6ButQ4x_eo/exec";

  export default function Contact() {

  const serviceOptions = [
  { value: "Brand Identity", label: "Brand Identity" },
  { value: "Website Design", label: "Website Design" },
  { value: "UI / UX Design", label: "UI / UX Design" },
  { value: "Content Strategy", label: "Content Strategy" },
  { value: "SEO", label: "SEO" },
  { value: "Social Media", label: "Social Media" },
];

const customSelectStyles = {

  control: (base, state) => ({
    ...base,
    minHeight: 50,
    background: "transparent",
    border: "none",
    borderBottom: state.isFocused
      ? "1px solid #111"
      : "1px solid #d4d4d4",
    borderRadius: 0,
    boxShadow: "none",
    cursor: "pointer",

    "&:hover": {
      borderBottom: "1px solid #111",
    },
  }),

  valueContainer: (base) => ({
    ...base,
    padding: "0",
  }),

  placeholder: (base) => ({
    ...base,
    color: "#999",
    fontSize: 16,
  }),

  indicatorSeparator: () => ({
    display: "none",
  }),

  dropdownIndicator: (base) => ({
    ...base,
    color: "#777",

    "&:hover": {
      color: "#111",
    },
  }),

  menu: (base) => ({
    ...base,
    marginTop: 12,
    borderRadius: 20,
    overflow: "hidden",
    border: "1px solid #eee",
    boxShadow:
      "0 25px 60px rgba(0,0,0,.08)",
  }),

  menuList: (base) => ({
    ...base,
    padding: 10,
  }),

  option: (base, state) => ({
    ...base,

    padding: "14px 18px",

    borderRadius: 14,

    background:
      state.isFocused
        ? "#f5f5f5"
        : "#fff",

    color: "#111",

    cursor: "pointer",

    marginBottom: 4,
  }),

  multiValue: (base) => ({
  ...base,
  background: "#f5f5f5",
  border: "1px solid #e5e5e5",
  borderRadius: "999px",
  padding: "2px 6px",
}),

multiValueLabel: (base) => ({
  ...base,
  color: "#111",
  fontWeight: 500,
  fontSize: "13px",
}),

multiValueRemove: (base) => ({
  ...base,
  color: "#666",
  borderRadius: "50%",
  ":hover": {
    background: "#111",
    color: "#fff",
  },
}),

};

const [loading, setLoading] = useState(false);

const [selectedServices, setSelectedServices] = useState([]);

const [form, setForm] = useState({

  name: "",

  email: "",

  phone: "",

  company: "",

   service:"",

  message: "",

});

const handleChange = (e) => {

  setForm({

    ...form,

    [e.target.name]: e.target.value,

  });

};

const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);

  try {

    const data = {
      name: form.name,
      email: form.email,
      phone: form.phone,
      company: form.company,
      service: selectedServices
        .map((item) => item.value)
        .join(", "),
      message: form.message,
      source: "Website",
    };

    await fetch(SCRIPT_URL, {
  method: "POST",
  mode: "no-cors",
  headers: {
    "Content-Type": "text/plain;charset=utf-8",
  },
  body: JSON.stringify(data),
});


setForm({
  name: "",
  email: "",
  phone: "",
  company: "",
  service: "",
  message: "",
});

setSelectedServices([]);

setShowSuccess(true);

setTimeout(() => {
  setShowSuccess(false);
}, 3500);

  } catch (err) {
    console.error(err);
  }

  setLoading(false);
};

const [showSuccess, setShowSuccess] = useState(false);

return (
    <>
  {showSuccess && (
    <div className="fixed top-8 right-8 z-[9999] animate-[fadeIn_.35s_ease]">

      <div className="rounded-2xl bg-white border border-neutral-200 shadow-[0_20px_50px_rgba(0,0,0,.12)] px-6 py-5 w-[360px]">

        <div className="flex items-start gap-4">

          <div className="h-10 w-10 rounded-full bg-black text-white flex items-center justify-center font-semibold">
            <svg
  xmlns="http://www.w3.org/2000/svg"
  className="h-5 w-5"
  fill="none"
  viewBox="0 0 24 24"
  stroke="currentColor"
  strokeWidth={2.5}
>
  <path
    strokeLinecap="round"
    strokeLinejoin="round"
    d="M5 13l4 4L19 7"
  />
</svg>
          </div>

          <div>

            <h4 className="text-lg font-semibold text-black">
              Message Sent
            </h4>

            <p className="mt-1 text-sm text-neutral-500 leading-6">
              Thank you for reaching out.
              We'll get back to you shortly.
            </p>

          </div>

        </div>

      </div>

    </div>
  )}

  <section
    id="contact"
    className="bg-black text-white py-28 lg:py-36"
  >
    <div className="max-w-[1440px] mx-auto px-8 lg:px-16">

      <div className="grid lg:grid-cols-[1fr_500px] gap-24 items-start">

        {/* LEFT */}

        <div>

          <span className="uppercase tracking-[0.35em] text-neutral-500 text-xs">
            Let's Talk
          </span>

          <h2 className="mt-6 text-[60px] leading-[1.05] font-light tracking-[-2px]">

            Ready to build
            <br />

            something
            <br />

            <span
                className="italic"
                style={{ fontFamily: "Georgia, serif" }}
              >
                {" "}
                Exceptional?
              </span>

          </h2>

          <p className="mt-10 max-w-[520px] text-lg leading-9 text-neutral-400">

            Whether you're launching a new business,
            refreshing an existing brand or creating a
            digital experience, we'd love to hear your ideas.

          </p>

          <div className="mt-14 space-y-6">

            <div className="flex items-center gap-4">

              <FiMail size={20} />

              <a
                href="mailto:thebrandkitsstudio@gmail.com"
                className="hover:text-white transition"
              >
               thebrandkitsstudio@gmail.com
              </a>

            </div>

            <div className="flex items-center gap-4">

              <FiPhone size={20} />

              <a
                href="tel:+918108111545"
                className="hover:text-white transition"
              >
                +91 91671 92173
              </a>

            </div>

            <div className="flex gap-4 pt-6">

              <a
                href="https://www.instagram.com/the.brand.kits.studio?igsh=cXB1cm5tY25yaWps&utm_source=qr"
                target="_blank"
                rel="noreferrer"
                className="h-12 w-12 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                <FiInstagram size={20} />
              </a>

              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="h-12 w-12 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                <FiFacebook size={20} />
              </a>

              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="h-12 w-12 rounded-full border border-neutral-700 flex items-center justify-center hover:bg-white hover:text-black transition"
              >
                <FiLinkedin size={20} />
              </a>

            </div>

          </div>

        </div>

        {/* RIGHT */}

        <div className="rounded-[28px] bg-white p-8 text-black shadow-[0_20px_60px_rgba(0,0,0,0.08)]">

          <h3 className="text-3xl font-medium">
            Tell us about your project.
          </h3>

          <p className="mt-2 text-neutral-500">
            Fill in the details below and we'll connect with you.
          </p>

          <form
            onSubmit={handleSubmit}
            className="mt-8 space-y-5"
          >

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full border-b border-neutral-300 py-3 outline-none focus:border-black transition"
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full border-b border-neutral-300 py-3 outline-none focus:border-black transition"
            />

            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={form.phone}
              onChange={handleChange}
              required
              className="w-full border-b border-neutral-300 py-3 outline-none focus:border-black transition"
            />

            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={form.company}
              onChange={handleChange}
              className="w-full border-b border-neutral-300 py-3 outline-none focus:border-black transition"
            />

            {/* SERVICES */}

            <Select
              options={serviceOptions}
              isMulti
              closeMenuOnSelect={false}
              hideSelectedOptions={false}
              placeholder="Services Required"
              value={selectedServices}
              onChange={setSelectedServices}
              styles={customSelectStyles}
            />

            <textarea
              rows={4}
              name="message"
              placeholder="Tell us about your project..."
              value={form.message}
              onChange={handleChange}
              required
              className="w-full resize-none border-b border-neutral-300 py-3 outline-none focus:border-black transition"
            />

            <button
              type="submit"
              disabled={loading}
              className="mt-2 inline-flex h-14 items-center gap-2 rounded-full bg-black px-8 text-white transition duration-300 hover:scale-[1.02] hover:bg-neutral-900 disabled:opacity-60"
            >
              {loading ? "Sending..." : "Send Message"}

              <FiArrowUpRight />

            </button>

          </form>

        </div>

      </div>

    </div>

  </section>
  </>
);
}