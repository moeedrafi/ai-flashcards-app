import { Link } from "react-router";
import { useRoutes } from "@/hooks/useRoutes";
import { useAuth } from "@/context/AuthContext";
import { ProfilePopover } from "./ProfilePopover";

export const Navbar = () => {
  const routes = useRoutes();
  const { isLoggedIn } = useAuth();

  return (
    <header className="w-full sticky top-0 left-0 z-50 bg-custom-black py-3 px-4 md:px-10 flex items-center border border-[#222]">
      <div className="flex-1 flex items-center gap-2">
        <span className="text-custom-white font-extrabold text-xl tracking-tight">
          LOGO
        </span>
      </div>

      <nav className="hidden sm:flex gap-5">
        {routes.map(({ href, label, active }) => (
          <Link
            key={label}
            to={href}
            className={`text-custom-white font-medium text-sm px-2 py-1 ${
              active && "underline underline-offset-4"
            }`}
          >
            {label}
          </Link>
        ))}
      </nav>

      {isLoggedIn ? (
        <div className="flex-1 flex justify-end">
          <ProfilePopover />
        </div>
      ) : (
        <div className="flex-1 flex items-center justify-end gap-3">
          <Link to="/login">
            <button className="px-3 py-2 bg-custom-primary text-custom-white cursor-pointer hover:bg-custom-ascent">
              Sign In
            </button>
          </Link>
          <Link to="/register">
            <button className="hidden px-3 py-2 text-custom-white md:inline border-[1px] border-custom-primary cursor-pointer hover:bg-custom-ascent">
              Create your account
            </button>
          </Link>
        </div>
      )}
    </header>
  );
};
