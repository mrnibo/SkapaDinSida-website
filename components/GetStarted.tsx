"use client";

import { useState } from "react";
import confetti from "canvas-confetti";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { TitleSection } from "./ui/titles";
import BlurFade from "./ui/blur-fade";
import SparklesText from "./ui/sparkles-text";
import { IconCircleCheckFilled } from "@tabler/icons-react";
import Head from "next/head";

interface FormData {
  businessName: string;
  industry: string;
  email: string;
  phone: string;
  contactMethod: string;
  serviceType: string;
  targetAudience: string;
  projectGoals: string;
  budgetRange: string;
  timeline: string;
  additionalInfo: string;
}

interface Errors {
  [key: string]: string;
}

export default function GetStarted() {
  const [step, setStep] = useState<number | "success">(1);
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    businessName: "",
    industry: "",
    email: "",
    phone: "",
    contactMethod: "",
    serviceType: "",
    targetAudience: "",
    projectGoals: "",
    budgetRange: "",
    timeline: "",
    additionalInfo: "",
  });
  const [errors, setErrors] = useState<Errors>({});
  const { toast } = useToast();

  // Handle input changes and update formData state
  const handleChange = (
    e:
      | React.ChangeEvent<
          HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
        >
      | { target: { name: string; value: string } }
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
    setErrors((prevErrors) => ({ ...prevErrors, [name]: "" })); // Clear error on input
  };

  // Validate required fields for the current step
  const validateStep = () => {
    const requiredFields: { [key: number]: (keyof FormData)[] } = {
      1: ["businessName", "industry", "email", "phone"],
      2: ["serviceType", "targetAudience", "projectGoals"],
      3: ["budgetRange", "timeline"],
    };

    const newErrors: Errors = {};
    const currentFields = requiredFields[step as number];
    currentFields.forEach((field) => {
      if (!formData[field]) newErrors[field] = "This field is required";
    });
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep()) setStep((prevStep) => (prevStep as number) + 1);
  };

  const handlePrevious = () => setStep((prevStep) => (prevStep as number) - 1);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateStep()) return;

    setIsSubmitting(true);
    try {
      const data = new FormData();
      for (const key in formData) {
        data.append(key, formData[key as keyof FormData]);
      }

      const response = await fetch(
        "https://formsubmit.co/41f43ec4fdb4e25e2f31cc75307e6282",
        {
          method: "POST",
          body: data,
        }
      );

      if (response.ok) {
        toast({
          title: "Form submitted successfully",
          description: "We'll get back to you soon!",
        });
        setStep("success");
        startConfetti();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "There was a problem submitting your form.",
        variant: "destructive",
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Confetti function
  const startConfetti = () => {
    const duration = 5 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = {
      startVelocity: 30,
      spread: 360,
      ticks: 60,
      zIndex: 0,
    };

    const randomInRange = (min: number, max: number) =>
      Math.random() * (max - min) + min;

    const interval = window.setInterval(() => {
      const timeLeft = animationEnd - Date.now();
      if (timeLeft <= 0) return clearInterval(interval);

      const particleCount = 50 * (timeLeft / duration);
      confetti({
        ...defaults,
        particleCount,
        origin: {
          x: randomInRange(0.1, 0.3),
          y: Math.random() - 0.2,
        },
      });
      confetti({
        ...defaults,
        particleCount,
        origin: {
          x: randomInRange(0.7, 0.9),
          y: Math.random() - 0.2,
        },
      });
    }, 250);
  };

  const priceRanges = [
    { id: 1, range: "0 - 500 SEK" },
    { id: 2, range: "500 - 1000 SEK" },
    { id: 3, range: "1000 - 2000 SEK" },
    { id: 4, range: "2000+ SEK" },
  ];

  return (
    <>
      <Head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
      gtag('event', 'conversion', {
        'send_to': 'AW-16767027238/GJ6ECNzEleYZEKaQkrs-',
        'value': 1.0,  // Replace with the actual value of the transaction
        'currency': 'SEK',  // Use the currency of your transaction
        'transaction_id': ''  // Optionally, pass a unique transaction ID here
      });
    `,
          }}
        />
      </Head>

      <div className="min-h-screen bg-gray-50 dark:bg-neutral-900 p-4 flex justify-center items-center">
        <BlurFade delay={0.2}>
          <Card className="w-full max-w-4xl border-none rounded-3xl bg-gray-100 dark:bg-neutral-900 p-12 shadow-2xl min-h-[82vh]">
            {step === "success" ? (
              <div className="flex flex-col justify-center items-center h-full text-center">
                <IconCircleCheckFilled
                  size={100}
                  className="text-green-500 mb-8"
                />
                <SparklesText text="Success!" className="mb-8" />
                <p className="text-2xl font-semibold">
                  Thank You! Your submission is received. <br />
                  <span className="font-normal">We will contact you soon!</span>
                </p>
              </div>
            ) : (
              <>
                <CardHeader className="text-center">
                  <CardTitle className="flex justify-center">
                    <TitleSection text="Get Started" />
                  </CardTitle>
                  <CardDescription>
                    Please provide us with some information about your project
                  </CardDescription>
                </CardHeader>
              </>
            )}

            {step === "success" ? null : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <CardContent>
                  <div className="mb-6 flex justify-center">
                    <div className="flex justify-between gap-3 w-1/2">
                      {[1, 2, 3].map((i) => (
                        <div
                          key={i}
                          className={`flex-grow h-2 rounded-full ${
                            i <= (step as number)
                              ? "bg-blue-500"
                              : "bg-gray-200"
                          }`}
                        />
                      ))}
                    </div>
                  </div>

                  {/* Step 1 Fields */}
                  {step === 1 && (
                    <div className="space-y-4">
                      {[
                        { id: "businessName", label: "Business Name" },
                        { id: "industry", label: "Industry" },
                        { id: "email", label: "Email" },
                        { id: "phone", label: "Phone Number" },
                      ].map(({ id, label }) => (
                        <div key={id}>
                          <div className="flex justify-between py-2">
                            <Label htmlFor={id}>{label}</Label>
                            <span className="text-gray-400 text-sm">
                              * Required
                            </span>
                          </div>
                          <Input
                            id={id}
                            name={id}
                            value={formData[id as keyof FormData]}
                            onChange={handleChange}
                            required
                            className={errors[id] ? "border-red-500" : ""}
                          />
                          {errors[id] && (
                            <p className="text-red-500 text-sm">{errors[id]}</p>
                          )}
                        </div>
                      ))}

                      <div>
                        <div className="flex justify-between py-2">
                          <Label>Preferred Contact Method</Label>
                          <span className="text-gray-400 text-sm">
                            * Required
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            id="email-contact"
                            name="contactMethod"
                            value="email"
                            checked={formData.contactMethod === "email"}
                            onChange={handleChange}
                          />
                          <Label htmlFor="email-contact">Email</Label>
                        </div>
                        <div className="flex items-center space-x-2">
                          <input
                            type="radio"
                            id="phone-contact"
                            name="contactMethod"
                            value="phone"
                            checked={formData.contactMethod === "phone"}
                            onChange={handleChange}
                          />
                          <Label htmlFor="phone-contact">Phone</Label>
                        </div>
                        {errors.contactMethod && (
                          <p className="text-red-500 text-sm">
                            {errors.contactMethod}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Step 2 Fields */}
                  {step === 2 && (
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between py-2">
                          <Label htmlFor="serviceType">
                            Type of Service Needed
                          </Label>
                          <span className="text-gray-400 text-sm">
                            * Required
                          </span>
                        </div>
                        <Select
                          value={formData.serviceType}
                          onValueChange={(value) =>
                            handleChange({
                              target: { name: "serviceType", value },
                            })
                          }
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a service" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="website-design">
                              Website Design
                            </SelectItem>
                            <SelectItem value="seo">SEO</SelectItem>
                            <SelectItem value="branding">Branding</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.serviceType && (
                          <p className="text-red-500 text-sm">
                            {errors.serviceType}
                          </p>
                        )}
                      </div>

                      <div>
                        <div className="flex justify-between py-2">
                          <Label htmlFor="targetAudience">
                            Target Audience
                          </Label>
                          <span className="text-gray-400 text-sm">
                            * Required
                          </span>
                        </div>
                        <Textarea
                          id="targetAudience"
                          name="targetAudience"
                          value={formData.targetAudience}
                          onChange={handleChange}
                          required
                          className={
                            errors.targetAudience ? "border-red-500" : ""
                          }
                        />
                        {errors.targetAudience && (
                          <p className="text-red-500 text-sm">
                            {errors.targetAudience}
                          </p>
                        )}
                      </div>
                      <div>
                        <div className="flex justify-between py-2">
                          <Label htmlFor="projectGoals">
                            Project Goals and Requirements
                          </Label>
                          <span className="text-gray-400 text-sm">
                            * Required
                          </span>
                        </div>
                        <Textarea
                          id="projectGoals"
                          name="projectGoals"
                          value={formData.projectGoals}
                          onChange={handleChange}
                          required
                          className={
                            errors.projectGoals ? "border-red-500" : ""
                          }
                        />
                        {errors.projectGoals && (
                          <p className="text-red-500 text-sm">
                            {errors.projectGoals}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {/* Step 3 Fields */}
                  {step === 3 && (
                    <div className="space-y-4">
                      <div>
                        <div className="flex justify-between py-2">
                          <Label htmlFor="budgetRange">Budget Range</Label>
                          <span className="text-gray-400 text-sm">
                            * Required
                          </span>
                        </div>
                        <Select
                          value={formData.budgetRange}
                          onValueChange={(value) =>
                            handleChange({
                              target: { name: "budgetRange", value },
                            })
                          }
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            {priceRanges.map((price) => (
                              <SelectItem key={price.id} value={price.range}>
                                {price.range}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        {errors.budgetRange && (
                          <p className="text-red-500 text-sm">
                            {errors.budgetRange}
                          </p>
                        )}
                      </div>

                      <div>
                        <div className="flex justify-between py-2">
                          <Label htmlFor="timeline">
                            Preferred Project Completion Timeline
                          </Label>
                          <span className="text-gray-400 text-sm">
                            * Required
                          </span>
                        </div>
                        <Select
                          value={formData.timeline}
                          onValueChange={(value) =>
                            handleChange({
                              target: { name: "timeline", value },
                            })
                          }
                          required
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select a timeline" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="1-3 months">
                              1-3 months
                            </SelectItem>
                            <SelectItem value="3-6 months">
                              3-6 months
                            </SelectItem>
                            <SelectItem value="6-12 months">
                              6-12 months
                            </SelectItem>
                            <SelectItem value="12+ months">
                              12+ months
                            </SelectItem>
                          </SelectContent>
                        </Select>
                        {errors.timeline && (
                          <p className="text-red-500 text-sm">
                            {errors.timeline}
                          </p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="additionalInfo">
                          Additional Information
                        </Label>
                        <Textarea
                          id="additionalInfo"
                          name="additionalInfo"
                          value={formData.additionalInfo}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  )}
                </CardContent>

                <CardFooter className="flex justify-between">
                  {step > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      onClick={handlePrevious}
                    >
                      Previous
                    </Button>
                  )}
                  {step < 3 ? (
                    <Button type="button" onClick={handleNext}>
                      Next
                    </Button>
                  ) : (
                    <Button type="submit" disabled={isSubmitting}>
                      {isSubmitting ? "Submitting..." : "Submit"}
                    </Button>
                  )}
                </CardFooter>
              </form>
            )}
          </Card>
        </BlurFade>
      </div>
    </>
  );
}
