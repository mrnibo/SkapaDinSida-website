"use client";

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import SparklesText from "../ui/sparkles-text";
import BlurFade from "../ui/blur-fade";

export const OfferBanner = ({ onClick }: { onClick: () => void }) => {
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <BlurFade delay={3}>
        <Button
          onClick={onClick}
          className="bg-blue-600 hover:bg-blue-700 text-md text-white font-bold py-4 px-8 rounded-xl shadow-lg transition-all duration-300 ease-in-out transform hover:scale-105"
        >
          Free Website Design -{" "}
          <SparklesText text="Limited Time!" className="text-md" />
        </Button>
      </BlurFade>
    </div>
  );
};

const OfferModal = ({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);

    try {
      const response = await fetch("https://formspree.io/f/xnnqpgje", {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        console.log("Form submitted successfully!");
        setIsSubmitted(true);
      } else {
        console.error(
          "Form submission failed with status:",
          response.status,
          await response.text() // Log the response text for detailed error info
        );
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Free Website Design Offer</DialogTitle>
          <DialogDescription>
            Fill out this form to claim your free website design.
          </DialogDescription>
        </DialogHeader>
        {isSubmitted ? (
          <div className="text-center py-4">
            <h3 className="text-lg font-semibold text-green-600 mb-2">
              Thank you for your submission!
            </h3>
            <p>We'll be in touch with you shortly.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-gray-700"
              >
                Business Name
              </label>
              <Input
                type="text"
                id="name"
                name="name"
                required
                className="mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="current-website"
                className="block text-sm font-medium text-gray-700"
              >
                Current Website
              </label>
              <Input
                type="url"
                id="current-website"
                name="current-website"
                className="mt-1"
              />
            </div>

            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Phone Number
              </label>
              <Input
                type="tel"
                id="phone"
                name="phone"
                required
                className="mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-gray-700"
              >
                Email Address
              </label>
              <Input
                type="email"
                id="email"
                name="email"
                required
                className="mt-1"
              />
            </div>
            <div>
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700"
              >
                Message (Optional)
              </label>
              <Textarea id="message" name="message" rows={3} className="mt-1" />
            </div>
            <Button type="submit" disabled={isSubmitting} className="w-full">
              {isSubmitting ? "Submitting..." : "Submit"}
            </Button>
          </form>
        )}
      </DialogContent>
    </Dialog>
  );
};

export const OfferClient = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <OfferBanner onClick={() => setIsModalOpen(true)} />
      <OfferModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default OfferClient;
