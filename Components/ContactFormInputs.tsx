"use client";
import React from "react";
import { ContactFormType } from "@/utils/types";
import { UseFormRegister, FieldErrors } from "react-hook-form";

function ContactFormInputs({
  name,
  label,
  type,
  register,
  errors,
}: {
  name: keyof ContactFormType;
  label: string;
  type: string;
  register: UseFormRegister<ContactFormType>;
  errors: FieldErrors<ContactFormType>;
}) {
  if (label) {
    label = label.charAt(0).toLocaleUpperCase() + label.slice(1);
  }

  type key = typeof name;
  type Age = ContactFormType[key];

  return (
    <div className="relative z-0">
      <input
        type={type}
        id={name.toString()}
        className={`border-accent-foreground block py-2.5 px-0 w-full text-[16px] md:text-sm text-foreground bg-transparent border-0 border-b-2 appearance-none  focus:outline-none focus:ring-0 peer`}
        placeholder=" "
        {...register(name as any)}
      />

      <label
        htmlFor={name.toString()}
        className={`text-accent-foreground
         absolute text-sm duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto`}
      >
        {label}
      </label>
      {errors[name] && (
        <p className="text-sm text-red-500 mt-1">
          {errors[name].message?.toString()}
        </p>
      )}
    </div>
  );
}

export default ContactFormInputs;
