'use client'

import React, { useState, useRef } from 'react'
import { IoChatboxEllipsesSharp } from 'react-icons/io5'
import emailjs from '@emailjs/browser'

const Contact = () => {
  const [result, setResult] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)
  const formRef = useRef()

  const sendEmail = (e: any) => {
    e.preventDefault()

    setIsSubmitting(true)

    emailjs
      .sendForm(
        'service_56ymsos',
        'template_eerus7b',
        e.target,
        'sJmUJsps10ZjKjSbY',
      )
      .then(
        result => {
          console.log(result.text)
          setResult(
            'Thank you for your message! I will get back to you as soon as possible.',
          )
          setIsSubmitting(false)
          formRef.current.reset()
        },
        error => {
          console.log(error.text)
          setResult(`An error occurred. Please use another form of contact.`)
          setIsSubmitting(false)
        },
      )
  }

  return (
    <div
      id="contact"
      className="w-screen flex flex-col items-center justify-center px-4 py-10 pt-16"
    >
      <div className="flex flex-row w-full items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-3xl">For inquiries,</h1>
          <h1 className="text-5xl text-pale-carmine">Contact me!</h1>
        </div>
        <IoChatboxEllipsesSharp size={42} className="text-ironstone" />
      </div>
      <form
        ref={formRef}
        className="flex flex-col items-stretch justify-start gap-2 w-full"
        onSubmit={sendEmail}
      >
        <input
          type="text"
          name="user_name"
          placeholder="Your name"
          className="p-2 rounded-lg bg-white/20"
          required
          minLength={2}
          maxLength={50}
          pattern="[a-zA-Z\s]*"
        />
        <input
          type="email"
          name="user_email"
          placeholder="Your email"
          className="p-2 rounded-lg bg-white/20"
          required
        />
        <textarea
          name="message"
          rows={5}
          placeholder="Your message"
          className="p-2 rounded-lg bg-white/20"
          required
          maxLength={200}
        />
        <button
          type="submit"
          className="p-2 rounded-lg bg-pale-carmine hover:bg-lava-red transition"
          disabled={isSubmitting}
        >
          Send
        </button>
      </form>
      <p className="text-white/50 p-1">{result}</p>
      <h1 className="text-3xl text-white/50 py-4">Or</h1>
      <div className="w-full flex flex-row items-center justify-between gap-4">
        <a
          href="mailto:schouppey@gmail.com"
          className="flex-1 flex flex-col items-center ga-2 p-2 bg-white/10 rounded-lg hover:bg-lava-red transition"
        >
          <h1>E-mail</h1>
          <img
            src="/assets/icons/gmail.svg"
            alt=""
            className="w-20 h-20 object-contain"
          />
          <p className="text-xs">schouppey@gmail.com</p>
        </a>
        <a
          href="https://t.me/MrBlonde245"
          className="flex-1 flex flex-col items-center ga-2 p-2 bg-white/10 rounded-lg hover:bg-lava-red transition"
        >
          <h1>Telegram</h1>
          <img
            src="/assets/icons/telegram.svg"
            alt=""
            className="w-20 h-20 object-contain"
          />
          <p className="text-xs">@MrBlonde245</p>
        </a>
      </div>
    </div>
  )
}

export default Contact
