"use client";

import { useState } from "react";
import Image from "next/image";

export default function Page() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [dataSuccess, setDataSuccess] = useState(false)
  const [isLoading, setIsLoading] = useState(false);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;

    if (
      (name === "firstName" || name === "lastName") &&
      !/^[A-Za-z\s]*$/.test(value)
    ) {
      return;
    }

    if (name === "phone" && !/^\d{0,11}$/.test(value)) {
      return;
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const response = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await response.json();

    if (data.success) {
      setDataSuccess(true)
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        message: "",
      });

    }
    setIsLoading(false)
    setTimeout(() => {
      setDataSuccess(false)
    }, 3000)
  };

  return (
    <>

      <section className="min-h-screen py-10 px-4 flex items-center justify-center">

        <div className="w-full max-w-6xl flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
          <div className="w-full lg:w-1/2 flex justify-center">
            <div className="w-full max-w-135">
              <Image
                src="/BestAudio/image-best-gear.png"
                alt="bestAudio"
                width={540}
                height={588}
                className="w-full h-auto rounded-lg object-cover"
                priority
              />
            </div>
          </div>
          <div className="w-full lg:w-1/2">

            <div className="w-full bg-white p-6 sm:p-8 rounded-2xl shadow-xl">
              <h1 className="text-3xl font-bold text-center mb-3 text-black">
                Contact Us
              </h1>


              {/* {dataSuccess && (
  <div className="fixed bottom-4 right-4 z-50 max-w-sm w-full bg-white shadow-2xl rounded-xl p-4 border border-gray-200 animate-slideUp">
    <div className="flex items-center gap-3">
      <div className="flex-shrink-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-6 h-6 text-green-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <div>
        <p className="font-medium text-gray-900">Success!</p>
        <p className="text-sm text-gray-600">Form submitted successfully</p>
      </div>
    </div>
  </div>
)}  */}


              <form onSubmit={handleSubmit} className="space-y-1">
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
                      className="w-full border rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
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
                      className="w-full border rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
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
                    className="w-full border rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
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
                    className="w-full border rounded-lg px-4 py-3 text-black focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    placeholder="+91 9876543210"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 font-medium text-black">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Write your message here..."
                    className="w-full border rounded-lg px-4 py-3 text-black resize-none focus:outline-none focus:ring-2 focus:ring-black focus:border-transparent"
                    required
                  />
                </div>

                {dataSuccess ? (
                  // Success message in place of the button
                  <div className="w-full py-4 rounded-lg bg-green-50 border border-green-200 text-center">
                    <div className="flex items-center justify-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-green-600"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-green-700 font-medium">Submitted Successfully!</span>
                    </div>
                    <p className="text-sm text-green-600 mt-1">
                      We'll get back to you shortly
                    </p>
                  </div>
                ) : (
                  // Submit button
                  <button
                    type="submit"
                    disabled={
                      !formData.firstName ||
                      !formData.lastName ||
                      !formData.email ||
                      !formData.message ||
                      !formData.phone ||
                      isLoading
                    }
                    className="w-full py-3 rounded-lg font-semibold text-white transition-all duration-300 bg-[#D87D4A] hover:scale-[1.02] disabled:bg-gray-400 disabled:cursor-not-allowed disabled:hover:scale-100"
                  >
                    {isLoading ? "Please Wait..." : "Submit"}
                  </button>
                )}
              </form>

            </div>
          </div>
        </div>

      </section>
    </>
  );
}