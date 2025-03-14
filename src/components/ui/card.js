export function Card({ children, className, onClick }) {
  return (
    <div
      className={`bg-gray-800 p-4 rounded-xl shadow-md ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export function CardContent({ children, className }) {
  return <div className={className}>{children}</div>;
}
