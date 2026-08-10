import ContactForm from "../components/ContactForm";
import SectionHeading from "../components/SectionHeading";

function Contact() {
  return (
    <section>
      <SectionHeading
        title="Contact"
        subtitle="I'm always open to discussing internships, projects, collaborations and learning opportunities."
      />
      <div className="contact-layout">
        <div className="contact-card">
          <h3>Get in Touch</h3>
          <p>Feel free to reach out using the form or through the details below.</p>
          <div className="contact-item"><strong>Email</strong><p>amritasrikantam@gmail.com</p></div>
          <div className="contact-item"><strong>College Email</strong><p>sa24csb0a75@student.nitw.ac.in</p></div>
          <div className="contact-item"><strong>Phone</strong><p>+91 9391133245</p></div>
          <div className="contact-item"><strong>WhatsApp</strong><p>+91 7095502232</p></div>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}

export default Contact;