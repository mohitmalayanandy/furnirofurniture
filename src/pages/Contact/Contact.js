import React from 'react';
import './Contact.css';
import PagrBanner from '../../components/PageBanner/PageBanner';

const Contact = () => {
  return (
    <>
    <PagrBanner />
    <div className="contact">
      <h2>Contact Us</h2>
      <form className="contact-form">
        <label>
          Name:
          <input type="text" name="name" required />
        </label>
        <label>
          Email:
          <input type="email" name="email" required />
        </label>
        <label>
          Message:
          <textarea name="message" required></textarea>
        </label>
        <button type="submit">Send Message</button>
      </form>
    </div>
    </>
  );
}

export default Contact;
