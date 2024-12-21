"use client";

import { useState } from "react";
import Facebook from "../../../../public/images/facebook-blue.svg";
import Instagram from "../../../../public/images/instagram-blue.svg";
import Twitter from "../../../../public/images/twitter-blue.svg";
import Linkedin from "../../../../public/images/linkedin-blue.svg";
import Image from "next/image";
import { JobDetails } from "../../types/job";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

interface JobOverviewProps {
  job: JobDetails;
}

const formSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  email: z.string().email("Please enter a valid email address"),
  resume: z.string().url("Please enter a valid URL"),
  linkedin: z.string().url("Please enter a valid LinkedIn URL"),
  salary: z.string().min(1, "Please enter your salary expectation"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

export function JobApplication({ job }: JobOverviewProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      resume: "",
      linkedin: "",
      salary: "",
      message: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true);
    try {
      // Here you would typically send the form data to your backend
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log(values);
      form.reset();
    } catch (error) {
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  }

  return (
    <div className="max-w-[950px] flex flex-col md:flex-row justify-between">
      <div className="space-y-6 lg:ml-[100px]">
        <div className="space-y-4">
          <div className="inline-block bg-[#E5E0EF] text-[#050405] px-[20px] py-[6px] rounded-full text-[12px] font-ibmPlex border border-[#000080]">
            Jobs in Digivolve
          </div>
          <div>
            <h3 className="text-[12px] font-ibmPlex text-[#050405]">Type</h3>
            <p className="text-[#685D69] text-[16px] font-ibmPlex">
              {job.type}
            </p>
          </div>
          <div>
            <h3 className="text-[12px] font-ibmPlex text-[#050405]">
              Location
            </h3>
            <p className="text-[#685D69] text-[16px] font-ibmPlex">
              {job.location}
            </p>
          </div>
          <div>
            <h3 className="text-[12px] font-ibmPlex text-[#050405]">
              Department
            </h3>
            <p className="text-[#685D69] text-[16px] font-ibmPlex">
              {job.department}
            </p>
          </div>
          <div>
            <h3 className="text-[12px] font-ibmPlex text-[#050405]">
              Compensation
            </h3>
            <p className="text-[#685D69] text-[16px] font-ibmPlex">
              {job.compensation}
            </p>
          </div>
        </div>

        <div className="space-y-2">
          <p className="text-[16px] text-[#312231] font-ibmPlex">
            Share this opening with friends
          </p>
          <div className="flex pl-4 space-x-7">
            <a href="#" className="text-gray-400 hover:text-[#2E3192]">
              <Image src={Linkedin} alt="linkedin icon" className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#2E3192]">
              <Image src={Instagram} alt="instagram icon" className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#2E3192]">
              <Image src={Facebook} alt="facebook icon" className="w-5 h-5" />
            </a>
            <a href="#" className="text-gray-400 hover:text-[#2E3192]">
              <Image src={Twitter} alt="twitter icon" className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="max-w-2xl bg-[#FAFAFA] py-10 px-8 shadow-2xl">
        <h2 className="text-[24px] font-workSans text-[#050405] font-bold mb-6">
          Application Form
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="firstName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>First Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Last Name</FormLabel>
                    <FormControl>
                      <Input placeholder="Your last name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Phone Number</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="Your phone number"
                        type="tel"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input
                        placeholder="me@company.com"
                        type="email"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <FormField
              control={form.control}
              name="resume"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Resume</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Link to your resume"
                      type="url"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="linkedin"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>LinkedIn</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="Your LinkedIn profile URL"
                      type="url"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="salary"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Salary Expectation</FormLabel>
                  <FormControl>
                    <Input placeholder="Expected salary range" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="Your message..."
                      className="min-h-[120px]"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              type="submit"
              variant={"secondary"}
              className="w-full rounded-sm font-medium"
              disabled={isSubmitting}
            >
              {isSubmitting
                ? "Submitting application..."
                : "SUBMIT APPLICATION"}
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
}
