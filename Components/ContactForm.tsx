"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { contactFormSchema, ContactFormType } from "@/utils/types";
import ContactFormInputs from "./ContactFormInputs";

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactFormType>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: ContactFormType) {
    console.log(values);
    console.log("submittted");
  }

  return (
    <form
      action=""
      className="text-black h-full  rounded-xl py-4 flex items-center"
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className="space-y-8 w-full">
        <ContactFormInputs
          register={register}
          type="text"
          label="your name"
          name="name"
          errors={errors}
        />
        <ContactFormInputs
          register={register}
          type="email"
          label="your email"
          name="email"
          errors={errors}
        />
        <div className="relative">
          <label
            htmlFor="floating_outlined"
            className="text-sm pb-2.5 text-accent-foreground block"
          >
            Your message
          </label>
          <textarea
            {...register("message")}
            name="message"
            id="message"
            className="outline-none text-[16px] md:text-sm text-foreground border-2 p-2 h-24 md:h-32 border-accent-foreground rounded-xl bg-transparent w-full"
          ></textarea>
          {errors.message && (
            <p className="text-sm text-red-500 mt-1">
              {errors.message.message?.toString()}
            </p>
          )}
        </div>
        <button
          type="submit"
          className="w-full bg-primary text-white font-bold max-w-md mx-auto"
        >
          Send message
        </button>
      </div>
    </form>
  );
}

export default ContactForm;
