import { Link } from "react-router";
import { useRoutes } from "@/hooks/useRoutes";

export const Navbar = () => {
  const routes = useRoutes();

  return (
    <div className="px-8 py-4 sm:px-16 md:px-32">
      <nav className="flex items-center justify-between relative">
        <Link to="/" className="text-xl z-10 font-bold">
          LOGO
        </Link>

        <div className="hidden lg:flex pl-52 justify-center">
          <div className="flex items-center space-x-6">
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
          <Link to="/login">
            <button className="px-3 py-2.5 rounded-lg bg-custom-primary text-custom-white cursor-pointer hover:bg-custom-ascent">
              Sign In
            </button>
          </Link>
          <Link to="/register">
            <button className="hidden md:inline border-2 px-3 py-2 rounded-xl border-custom-primary cursor-pointer hover:bg-sky-50">
              Create your account
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
};
