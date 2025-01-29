"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import FloatingLabel from "./FloatingLabel";
import { z } from "zod";
import { FieldValues, useForm } from "react-hook-form";

const contactFieldSchema = z.object({
  name: z
    .string()
    .min(3, { message: "Name must be at least 3 characters long" }),
  email: z.string().email({ message: "Please enter a valid email" }),
  message: z
    .string()
    .min(10, { message: "Please enter a more detailed message!" }),
});

function ContactForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: zodResolver(contactFieldSchema),
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
  });

  function onSubmit(values: FieldValues) {
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
        <FloatingLabel
          register={register}
          type="text"
          label="your name"
          name="name"
          errors={errors}
        />
        <FloatingLabel
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
