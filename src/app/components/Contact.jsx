"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaCheck } from "react-icons/fa";

export const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    setLoading(true);
    e.preventDefault();
    if (name.length === 0 || name.length === 1 || name.length > 25) {
      setLoading(false);
      return;
    }
    if (!email.includes("@") && !email.includes(".") && email.length === 0) {
      setLoading(false);
      return;
    }
    if (message.length < 30 || message.length > 250) {
      setLoading(false);
      return;
    }
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID,
        process.env.NEXT_PUBLIC_TEMPLATE_ID,
        form.current,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      )
      .then(
        () => {
          setSent(true);
          setName("");
          setEmail("");
          setMessage("");
          setLoading(false);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      )
      .finally(() => setLoading(false));
  };

  return (
    <div
      id="contact"
      className="h-screen flex flex-col justify-center items-center"
    >
      <form
        className="flex w-full flex-col gap-4 text-gray-700 dark:text-white"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="flex flex-col">
          <label>Name *</label>
          <input
            className="bg-transparent border-2 border-purple-300 dark:border-purple-500 p-2 rounded-lg"
            type="text"
            name="from_name"
            onChange={(e) => setName(e.target.value)}
            value={name}
          />
        </div>
        {name.length === 1 && (
          <p className="text-xs text-red-500 dark:text-red-500">
            Name must be longer than 2 characters
          </p>
        )}{" "}
        {name.length > 25 && (
          <p className="text-xs text-red-500 dark:text-red-500">
            Name can not be longer than 25 characters
          </p>
        )}{" "}
        <div className="flex flex-col">
          <label>Email *</label>
          <input
            className="bg-transparent border-2 border-purple-300 dark:border-purple-500 p-2 rounded-lg"
            type="email"
            name="from_email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
          {!email.includes("@") && !email.includes(".") && email.length > 0 && (
            <p className="text-xs text-red-500 dark:text-red-500">
              Must be a valid e-mail address
            </p>
          )}
        </div>
        <div className="flex flex-col">
          <label>Message *</label>
          <textarea
            className="bg-transparent border-2 border-purple-300 dark:border-purple-500 p-2 rounded-lg"
            name="message"
            onChange={(e) => setMessage(e.target.value)}
            value={message}
          />
          {message.length > 0 && message.length < 30 && (
            <p className="text-xs text-red-500">
              Message must be longer than 30 characters
            </p>
          )}
        </div>
        <button>
          {loading ? (
            "Loading..."
          ) : sent ? (
            <>
              <span className="mr-2">Sent</span>
              <FaCheck />
            </>
          ) : (
            "Send"
          )}
        </button>
      </form>
    </div>
  );
};
