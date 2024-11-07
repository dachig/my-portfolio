"use client";
import React, { useEffect, useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FaCheck } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";
import clsx from "clsx";

export function ContactForm() {
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
      <p className="text-gray-400 text-sm">Let's make</p>
      <h2 className="text-2xl font-bold">Contact</h2>
      <form
        className="flex w-full flex-col gap-4 mt-4"
        ref={form}
        onSubmit={sendEmail}
      >
        <div className="flex flex-col">
          <label>Name *</label>
          <input
            className="bg-transparent border-2 p-2 rounded-xl"
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
            className="bg-transparent border-2 p-2 rounded-xl"
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
            className="bg-transparent border-2 p-2 rounded-xl"
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
        <button
          className={clsx(
            "bg-blue-500 w-max mx-auto px-3 py-1 rounded-xl",
            {
              "opacity-50 cursor-default": loading || sent,
              "hover:bg-blue-400": !loading && !sent,
              "bg-green-500 opacity-100": sent,
            }
          )}
        >
          {loading ? (
            <ClipLoader
              className="mt-1"
              color="white"
              loading={loading}
              size={15}
              aria-label="Loading Spinner"
              data-testid="loader"
            />
          ) : sent ? (
            <div className="flex items-center">
              <span className="mr-2">Sent</span>
              <FaCheck />
            </div>
          ) : (
            "Send"
          )}
        </button>
      </form>
    </div>
  );
}
