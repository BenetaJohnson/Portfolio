import React, { useState } from "react";

const ContactBox = () => {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setIsSubmitting(true);

    try {
      const response = await fetch("https://formspree.io/f/mrbazgwo", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("SUCCESS");
        setFormData({ name: "", contact: "", message: "" });
      } else {
        setStatus("ERROR");
      }
    } catch (error) {
      setStatus("ERROR");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="relative p-8 m-5 w-full max-w-xl rounded-3xl transition-all duration-300 shadow-xl hover:shadow-2xl">

      {/* Glass Background */}
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-[rgba(136,192,208,0.1)] to-[rgba(69,98,106,0.1)] backdrop-blur-md border border-white/20 shadow-lg hover:border-white/40 z-0" />

      {/* Foreground Content */}
      <div className="relative z-10 text-white">
        <h2 className="text-2xl font-bold mb-6">Get in touch ✨</h2>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5 font-lexend">
          <div>
            <label className="block mb-1 text-lg">Name</label>
            <input
              type="text"
              name="name"
              placeholder="What do I call you?"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 bg-white/10 text-white rounded-lg placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#88C0D0]"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-lg">Contact</label>
            <input
              type="text"
              name="contact"
              placeholder="Your email or contact"
              value={formData.contact}
              onChange={handleChange}
              className="w-full p-3 bg-white/10 text-white rounded-lg placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-[#88C0D0]"
              required
            />
          </div>

          <div>
            <label className="block mb-1 text-lg">Message</label>
            <textarea
              name="message"
              rows="5"
              placeholder="Your message..."
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 bg-white/10 text-white rounded-lg placeholder-white/50 resize-none focus:outline-none focus:ring-2 focus:ring-[#88C0D0]"
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={isSubmitting}
            className="bg-[rgba(159,100,255,0.68)] text-white font-bold py-2 px-6 rounded-lg shadow-md hover:brightness-110 transition-transform"
          >
            {isSubmitting ? (
              <svg
                className="animate-spin h-5 w-5 mr-2 text-white"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                  fill="none"
                />
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                />
              </svg>
            ) : (
              "Send"
            )}
          </button>

          {status === "SUCCESS" && (
            <p className="text-green-400 text-sm mt-2">
              ✅ Message sent successfully!
            </p>
          )}
          {status === "ERROR" && (
            <p className="text-red-400 text-sm mt-2">
              ❌ Something went wrong. Try again.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default ContactBox;
