import { Link } from "react-router";

interface CardProps {
  header: string;
  subHeading: string;
  to?: string;
  label?: string;
  children: React.ReactNode;
}

export const Card = ({
  children,
  header,
  subHeading,
  label,
  to,
}: CardProps) => {
  return (
    <section
      aria-labelledby="form-title"
      className="bg-white p-4 rounded-lg w-[400px] shadow-md"
    >
      {/* HEADER */}
      <header className="w-full flex flex-col gap-y-3 items-center justify-center">
        <h1 id="form-title" className="text-3xl font-semibold">
          🔐 {header}
        </h1>
        <p className="text-gray-600 text-sm">{subHeading}</p>
      </header>

      {/* CONTENT */}
      <div className="mt-5">{children}</div>

      {/* FOOTER */}
      {to && label && (
        <footer className="w-full text-center tracking-tight font-medium">
          <Link
            aria-label={`Go to ${label}`}
            to={to}
            className="hover:underline underline-offset-2"
          >
            {label}
          </Link>
        </footer>
      )}
    </section>
  );
};
