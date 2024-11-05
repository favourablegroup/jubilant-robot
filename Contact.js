import React from 'react';

function Contact() {
  return (
    <div>
      <h1>Contact Us</h1>
      <form>
        <input type="text" placeholder="Your name" required />
        <input type="email" placeholder="Your email" required />
        <textarea placeholder="Your message" required />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default Contact;
