"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { TitleSection } from "../ui/titles";
import Image from "next/image";

function ContactUsClient() {
  const [state, handleSubmit] = useForm("xnnqpgje");

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <TitleSection text="Get in Touch" className="py-8 px-4" />
        <div className="flex md:justify-between justify-center items-center gap-8">
          <div className="p-6 w-1/2 max-w-xl">
            <h3 className="text-xl font-semibold mb-4">Send us a message</h3>
            {state.succeeded ? (
              <p className="text-green-500">
                Thanks for reaching out! We will get back to you soon.
              </p>
            ) : (
              <Form>
                <form onSubmit={handleSubmit} className="space-y-4">
                  {/* Name Field */}
                  <FormField
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Name</FormLabel>
                        <FormControl>
                          <Input id="name" placeholder="Your name" {...field} />
                        </FormControl>
                        <ValidationError
                          prefix="Name"
                          field="name"
                          errors={state.errors}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Email Field */}
                  <FormField
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            id="email"
                            type="email"
                            placeholder="Your email"
                            {...field}
                          />
                        </FormControl>
                        <ValidationError
                          prefix="Email"
                          field="email"
                          errors={state.errors}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Phone Field */}
                  <FormField
                    name="phone"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Phone</FormLabel>
                        <FormControl>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="Your phone number"
                            {...field}
                          />
                        </FormControl>
                        <ValidationError
                          prefix="Phone"
                          field="phone"
                          errors={state.errors}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  {/* Message Field */}
                  <FormField
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            id="message"
                            placeholder="Your message"
                            {...field}
                          />
                        </FormControl>
                        <ValidationError
                          prefix="Message"
                          field="message"
                          errors={state.errors}
                        />
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <Button
                    type="submit"
                    className="w-full bg-blue-500 hover:bg-blue-600 text-white text-md"
                    disabled={state.submitting}
                  >
                    {state.submitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </Form>
            )}
          </div>
          <div className="p-6 rounded-lg justify-center items-center hidden md:flex">
            <Image
              src="/images/contact-us.svg"
              alt="Contact Us"
              width={500}
              height={500}
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUsClient;
