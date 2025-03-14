export function Button({ children, className, ...props }) {
  return (
    <button
      className={`bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
