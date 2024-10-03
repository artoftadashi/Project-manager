export default function Button({ children, ...props }) {
  return (
    <button
      {...props}
      className="px-4 py-2 text-xs md:text-base rounded-xl border-2 border-myorange-200 text-white hover:bg-myorange-100"
    >
      {children}
    </button>
  );
}
