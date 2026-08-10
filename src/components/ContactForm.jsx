import { useState } from "react";

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = (values) => {
    const nextErrors = {};
    if (!values.name.trim()) nextErrors.name = "Name is required.";
    if (!values.email.trim()) nextErrors.email = "Email is required.";
    else if (!/^\S+@\S+\.\S+$/.test(values.email)) nextErrors.email = "Enter a valid email.";
    if (!values.message.trim()) nextErrors.message = "Message is required.";
    return nextErrors;
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    const nextForm = { ...form, [name]: value };
    setForm(nextForm);
    setErrors(validate(nextForm));
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const nextErrors = validate(form);
    setErrors(nextErrors);

    if (Object.keys(nextErrors).length === 0) {
      setSubmitted(true);
      setForm({ name: "", email: "", message: "" });
    }
  };

  const hasErrors = Object.keys(errors).length > 0;
  const isEmpty = !form.name.trim() || !form.email.trim() || !form.message.trim();

  return (
    <form onSubmit={handleSubmit} noValidate>
      <label htmlFor="name">Name</label>
      <input
        type="text"
        id="name"
        name="name"
        value={form.name}
        onChange={handleChange}
        aria-invalid={Boolean(errors.name)}
        aria-describedby={errors.name ? "name-error" : undefined}
        required
      />
      {errors.name && <small id="name-error" className="error">{errors.name}</small>}

      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        name="email"
        value={form.email}
        onChange={handleChange}
        aria-invalid={Boolean(errors.email)}
        aria-describedby={errors.email ? "email-error" : undefined}
        required
      />
      {errors.email && <small id="email-error" className="error">{errors.email}</small>}

      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        name="message"
        rows="5"
        value={form.message}
        onChange={handleChange}
        aria-invalid={Boolean(errors.message)}
        aria-describedby={errors.message ? "message-error" : undefined}
        required
      />
      {errors.message && <small id="message-error" className="error">{errors.message}</small>}

      <button type="submit" disabled={isEmpty || hasErrors}>
        Send Message
      </button>

      {submitted && <p className="success" role="status">Message validated successfully.</p>}
    </form>
  );
}

export default ContactForm;