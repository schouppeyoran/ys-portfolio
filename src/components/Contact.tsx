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
      className="w-screen max-w-[1920px] flex flex-col items-center justify-center px-4 py-10 pt-16"
    >
      <div className="flex flex-row w-full items-center justify-between">
        <div className="flex flex-col">
          <h1 className="text-3xl">For inquiries,</h1>
          <h1 className="text-5xl text-pale-carmine">Contact me!</h1>
        </div>
        <IoChatboxEllipsesSharp size={42} className="text-ironstone" />
      </div>
      <div className="w-full flex flex-col items-center 2xl:flex-row 2xl:gap-4 2xl:items-stretch">
        <form
          ref={formRef}
          className="flex flex-col items-stretch justify-start gap-2 w-full 2xl:w-[60%]"
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
            <h1>Send</h1>
          </button>
          <p className="text-white/50 p-1 2xl:hidden">{result}</p>
        </form>
        <h1 className="text-3xl text-white/50 py-4 2xl:my-auto">Or</h1>
        <div className="w-full flex flex-row items-center justify-between gap-4  2xl:flex-col 2xl:items-stretch 2xl:flex-1">
          <a
            href="mailto:schouppey@gmail.com"
            className="flex-1 flex flex-col items-center gap-2 p-2 bg-white/10 rounded-lg hover:bg-lava-red transition 2xl:flex-row 2xl:gap-8 2xl:px-8 2xl:py-2"
          >
            <div className="flex flex-col items-center">
              <h1 className="2xl:text-lg">E-mail</h1>
              <img
                src="/assets/icons/gmail.svg"
                alt=""
                className="w-20 h-20 object-contain"
              />
            </div>
            <p className="text-xs 2xl:text-lg">schouppey@gmail.com</p>
          </a>
          <a
            href="https://t.me/MrBlonde245"
            className="flex-1 flex flex-col items-center gap-2 p-2 bg-white/10 rounded-lg hover:bg-lava-red transition 2xl:flex-row 2xl:gap-8 2xl:px-8 2xl:py-2"
          >
            <div className="flex flex-col items-center">
              <h1 className="2xl:text-lg">Telegram</h1>
              <img
                src="/assets/icons/telegram.svg"
                alt=""
                className="w-20 h-20 object-contain"
              />
            </div>
            <p className="text-xs 2xl:text-lg">@MrBlonde245</p>
          </a>
        </div>
      </div>
      <p className="hidden text-white/50 p-1 2xl:block">{result}</p>
    </div>
  )
}

export default Contact
