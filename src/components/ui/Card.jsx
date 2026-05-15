export default function Card({ children, className = "" }) {
  return (
    <div
      className={`
        bg-[var(--surface)]
        rounded-2xl
        p-8
        shadow-lg
        border border-white/5
        transition-all duration-300
        hover:-translate-y-2
        hover:shadow-2xl
        ${className}
      `}
    >
      {children}
    </div>
  );
}
