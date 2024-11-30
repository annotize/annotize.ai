"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { Textarea } from "./ui/textarea";
import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";

const formSchema = z.object({
  email: z.string().email(),
  message: z.string().min(2, {
    message: "Message must be at least two characters.",
  }),
  name: z.string().min(2, { message: "Name must be at least two characters." }),
});

export function ContactForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      message: "",
      name: "",
    },
  });

  const [recaptchaResponse, setRecaptchaResponse] = useState<string | null>(
    null
  );

  return (
    <Form {...form}>
      <form
        accept-charset="UTF-8"
        action="https://submit-form.com/YSagckDdF"
        className="flex flex-col space-y-8 w-full"
        method="POST"
      >
        <input type="hidden" name="_append" value="false" />
        <input type="hidden" name="_redirect" value="https://annotize.ai" />
        {/* // The ReCAPTCHA code adds this field to the form already */}
        {/* {recaptchaResponse ? (
          <input
            type="hidden"
            name="g-recaptcha-response"
            value={recaptchaResponse}
          />
        ) : null} */}
        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Name</FormLabel>
              <FormControl>
                <Input autoFocus placeholder="Your name" {...field} />
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
                <Input placeholder="youremail@example.com" {...field} />
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
                  className="min-h-40"
                  placeholder="Message"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <ReCAPTCHA
          sitekey="6Lc48QQqAAAAAE8-ZWlx-VUn0n4nCa1VVjDC1XT7"
          onChange={setRecaptchaResponse}
        />
        <Button disabled={!recaptchaResponse} type="submit">
          Submit
        </Button>
      </form>
    </Form>
  );
}
