"use client";

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_viydga7', 'template_qiyavds', form.current, 'qpkJPXbZrqDciEbKO')
      .then(
        (result) => {
          console.log('SUCCESS!', result.text);
          alert('Message sent successfully!');
          form.current.reset(); // Reset form after successful submission
        },
        (error) => {
          console.log('FAILED...', error.text);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  const info = [
    {
      icon: <FaPhoneAlt />,
      title: 'Phone',
      description: '(+63) 976 066 4196',
    },
    {
      icon: <FaEnvelope />,
      title: 'Email',
      description: 'leolouise26@gmail.com',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Address',
      description: 'Pulanglupa 1 Las Pinas City',
    },
  ];

  return (
    <section className="py-6">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          {/* Form Section */}
          <div className="xl:w-[65%] order-2 xl:order-none">
            <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
              <h3 className="text-4xl text-accent">{`Let's work together`}</h3>
              <p className="text-white/60">Fill out the form to get in touch!</p>

              {/* Input Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <input
                  type="text"
                  name="user_name"
                  placeholder="Firstname"
                  className="input-field bg-white/10 rounded-lg p-3"
                  required
                />
                <input
                  type="text"
                  name="user_lastname"
                  placeholder="Lastname"
                  className="input-field bg-white/10 rounded-lg p-3"
                  required
                />
                <input
                  type="email"
                  name="user_email"
                  placeholder="Email address"
                  className="input-field bg-white/10 rounded-lg p-3"
                  required
                />
                <input
                  type="tel"
                  name="user_phone"
                  placeholder="Phone number"
                  className="input-field bg-white/10 rounded-lg p-3"
                />
              </div>

              {/* Message Textarea */}
              <textarea
                name="message"
                placeholder="Type your message here."
                className="textarea h-[200px] bg-white/10 rounded-lg p-3"
                required
              ></textarea>

              {/* Submit Button */}
              <button type="submit" className="button max-w-[160px] py-3 bg-accent rounded-lg text-lg">
                Send Message
              </button>
            </form>
          </div>

          {/* Info Section */}
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="xl:h-0 sm:h-20"></div>
    </section>
  );
};

export default Contact;
