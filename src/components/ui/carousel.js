export function Carousel({ children }) {
  return <div className="overflow-x-auto whitespace-nowrap flex gap-4">{children}</div>;
}

export function CarouselContent({ children }) {
  return <div className="flex">{children}</div>;
}

export function CarouselItem({ children, className }) {
  return <div className={`flex-shrink-0 ${className}`}>{children}</div>;
}
