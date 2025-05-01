import { useRoutes } from "@/hooks/useRoutes";
import { Link } from "react-router";

export const Navbar = () => {
  const routes = useRoutes();

  return (
    <div className="container mx-auto px-4 py-4 sm:px-8 md:px-16">
      <nav className="flex items-center justify-between relative">
        <Link to="/" className="text-xl z-10 font-bold">
          LOGO
        </Link>

        <div className="absolute left-0 right-0 flex justify-center">
          <div className="hidden md:flex items-center space-x-6">
            {routes.map(({ active, href, label }) => (
              <Link
                to={href}
                className={`${
                  active && "underline"
                } hover:underline underline-offset-2`}
              >
                {label}
              </Link>
            ))}
          </div>
        </div>

        <div className="space-x-4">
          <button>Sign In</button>
          <button>Create your account</button>
        </div>
      </nav>
    </div>
  );
};
