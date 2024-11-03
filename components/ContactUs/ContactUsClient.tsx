"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Image from "next/image";
import { Spacer } from "../ui/spacer";

function ContactUsClient() {
  const [state, handleSubmit] = useForm("xnnqpgje");

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="flex md:justify-between justify-center items-center gap-8 max-w-5xl mx-auto">
          <div className="p-6 self-center md:self-start md:w-1/2 md:max-w-xl">
            <h3 className="text-xl font-semibold mb-4">Send us a message: </h3>
            <p className="text-gray-700 dark:text-gray-200">
              We'd love to hear from you. Please fill out the form below and
              we'll get back to you as soon as possible.
            </p>
            <Spacer className="py-4" />
            {state.succeeded ? (
              <p className="text-green-500">
                Thanks for reaching out! We will get back to you soon.
              </p>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-8 text-gray-700 dark:text-gray-200"
              >
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium ">
                    Name
                  </label>
                  <Input
                    id="name"
                    type="text"
                    name="name"
                    aria-label="Your name"
                    placeholder="Your name"
                    required
                  />
                  <ValidationError
                    prefix="Name"
                    field="name"
                    errors={state.errors}
                  />
                </div>

                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="block text-sm font-medium">
                    Email
                  </label>
                  <Input
                    id="email"
                    type="email"
                    name="email"
                    aria-label="Your email"
                    placeholder="Your email"
                    required
                  />
                  <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                  />
                </div>

                {/* Phone Field */}
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium">
                    Phone
                  </label>
                  <Input
                    id="phone"
                    type="tel"
                    name="phone"
                    aria-label="Your phone number"
                    placeholder="Your phone number"
                    required
                  />
                  <ValidationError
                    prefix="Phone"
                    field="phone"
                    errors={state.errors}
                  />
                </div>

                {/* Message Field */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium"
                  >
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    aria-label="Your message"
                    placeholder="Your message"
                    rows={4}
                    maxLength={5000}
                    required
                  />
                  <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-blue-500 hover:bg-blue-600 text-white text-md"
                  disabled={state.submitting}
                >
                  {state.submitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>
          <div></div>
          <div className="p-6 rounded-lg justify-center items-center hidden md:flex">
            <Image
              src="/images/contact-us.svg"
              alt="Contact Us"
              width={550}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUsClient;
