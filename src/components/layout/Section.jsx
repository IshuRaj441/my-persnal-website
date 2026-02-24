export default function Section({ children, className = "" }) {
  return (
    <section className={`py-28 ${className}`}>
      {children}
    </section>
  );
}
