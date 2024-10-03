import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, isTextArea, ...props }, ref) {
  const classes =
    "w-full p-1 border-2 rounded-md borer-myorange-100 bg-stone-200 text-stone-600 focus:outline-none focus:border-myorange-200";
  return (
    <p className="flex flex-col gap-1 my-4">
      <label className="text-sm font-bold uppercase text-myorange-100">
        {label}
      </label>
      {isTextArea ? (
        <textarea ref={ref} className={classes} {...props} />
      ) : (
        <input ref={ref} className={classes} {...props} />
      )}
    </p>
  );
});

export default Input;
