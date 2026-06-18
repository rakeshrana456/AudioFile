"use client";

import { useState } from "react";

export default function Page() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    numEmployees: "",
    jobTitle: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (
    e: React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      alert("Form submitted successfully!");

      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        numEmployees: "",
        jobTitle: "",
      });
    }
  };

  return (
    <section className="min-h-screen bg-gray-100 py-10 px-4 flex items-center justify-center">
      <div className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-xl">
        <h1 className="text-3xl font-bold text-center mb-2 text-black">
          Register For Webinar
        </h1>

        <p className="text-center text-gray-600 mb-8">
          Fill out the details below to register.
        </p>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >
          <div className="grid md:grid-cols-2 gap-5">
            <div>
              <label className="block mb-2 font-medium text-black">
                First Name
              </label>

              <input
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 text-black"
                placeholder="John"
                required
              />
            </div>

            <div>
              <label className="block mb-2 font-medium text-black">
                Last Name
              </label>

              <input
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full border rounded-lg px-4 py-3 text-black"
                placeholder="Doe"
                required
              />
            </div>
          </div>

          <div>
            <label className="block mb-2 font-medium text-black">
              Email Address
            </label>

            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 text-black"
              placeholder="john@example.com"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-black">
              Phone Number
            </label>

            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 text-black"
              placeholder="+91 9876543210"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-black">
              Company Name
            </label>

            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 text-black"
              placeholder="ABC Pvt Ltd"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-black">
              Number of Employees
            </label>

            <input
              type="number"
              name="numEmployees"
              value={formData.numEmployees}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 text-black"
              placeholder="50"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium text-black">
              Job Title
            </label>

            <input
              type="text"
              name="jobTitle"
              value={formData.jobTitle}
              onChange={handleChange}
              className="w-full border rounded-lg px-4 py-3 text-black"
              placeholder="Frontend Developer"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-black text-white py-3 rounded-lg font-semibold hover:opacity-90 transition"
          >
            Register Now
          </button>
        </form>
      </div>
    </section>
  );
}