"use client";
import { AddProjectType } from "@/utils/types";
import {
  UseFormRegister,
  FieldError,
  FieldValues,
  FieldErrors,
} from "react-hook-form";

function FloatingLabel({
  name,
  label,
  type,
  register,
  errors,
}: {
  name: string;
  label: string;
  type: string;
  register: UseFormRegister<FieldValues>;
  errors: FieldErrors<FieldValues>;
}) {
  if (label) {
    label = label.charAt(0).toLocaleUpperCase() + label.slice(1);
  }

  return (
    <div className="relative z-0">
      <input
        type={type}
        id={name}
        className={`border-accent-foreground block py-2.5 px-0 w-full text-[16px] md:text-sm text-foreground bg-transparent border-0 border-b-2 appearance-none  focus:outline-none focus:ring-0 peer`}
        placeholder=" "
        {...register(name as any)}
      />

      <label
        htmlFor={name}
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

export default FloatingLabel;
