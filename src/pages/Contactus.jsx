import React, { useRef } from "react";
import "./Contactus.css"; // Optional: your CSS for styling

const Contactus = () => {
  const form = useRef();

  const sendEmail = async (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const payload = {
      user_name: formData.get('user_name'),
      user_email: formData.get('user_email'),
      message: formData.get('message')
    };

    try {
      const res = await fetch("http://localhost:4000/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      const data = await res.json();
      if (data.success) {
        alert("✅ Message sent successfully!");
        form.current.reset();
      } else {
        alert(data.error || "❌ Failed to send message");
      }
    } catch (err) {
      console.error("Fetch error:", err);
      alert("❌ Server error while sending message");
    }
  };

  return (
    <div className="contact-container">
      <h2>Contact Us</h2>
      <form ref={form} onSubmit={sendEmail} className="contact-form">
        <input
          type="text"
          name="user_name"
          placeholder="Your Name"
          required
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your Email"
          required
        />
        <textarea
          name="message"
          placeholder="Your Message"
          rows="6"
          required
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contactus;
