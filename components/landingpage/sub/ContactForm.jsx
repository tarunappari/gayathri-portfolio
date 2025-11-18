import { useState } from "react";
import styles from "@/styles/landingpage/sub/ContactForm.module.scss";

export default function ContactCard() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((s) => ({ ...s, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Replace this with your send logic (fetch/axios to your API)
    console.log("send message:", form);
    // Provide quick feedback
    alert("Message sent (demo) — check console for payload");
    setForm({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.card}>
        <h3 className={styles.title}>Send a message</h3>

        <form className={styles.form} onSubmit={handleSubmit}>
          <input
            className={styles.input}
            name="name"
            type="text"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            required
          />

          <input
            className={styles.input}
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />

          <input
            className={styles.input}
            name="subject"
            type="text"
            placeholder="Subject"
            value={form.subject}
            onChange={handleChange}
            required
          />

          <textarea
            className={styles.textarea}
            name="message"
            placeholder="Message"
            value={form.message}
            onChange={handleChange}
            rows={6}
            required
          />

          <button className={styles.button} type="submit">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
