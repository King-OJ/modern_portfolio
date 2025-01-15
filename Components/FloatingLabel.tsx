function FloatingLabel({
  name,
  label,
  type,
}: {
  name: string;
  label: string;
  type: string;
}) {
  if (label) {
    label = label.charAt(0).toLocaleUpperCase() + label.slice(1);
  }

  return (
    <div className="relative z-0">
      <input
        type={type}
        id={name}
        className="block py-2.5 px-0 w-full text-sm text-foreground bg-transparent border-0 border-b-2 appearance-none dark:text-white border-accent-foreground focus:outline-none focus:ring-0 focus:border-primary peer"
        placeholder=" "
      />
      <label
        htmlFor={name}
        className="absolute text-sm text-accent-foreground  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
      >
        {label}
      </label>
    </div>
  );
}

export default FloatingLabel;
