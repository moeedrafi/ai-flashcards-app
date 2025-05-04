import { Link } from "react-router";
import { Card } from "@/components/ui/Card";

const Login = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-custom-secondary to-custom-secondary-20">
      <Card
        header="Login"
        subHeading="Welcome Back"
        to="/register"
        label="Don't have an account?"
      >
        <form className="space-y-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="john@doe.com"
              className="px-3 py-2 rounded-lg outline-2 outline-gray-400 focus:outline-2 focus:outline-black"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="********"
              className="px-3 py-2 rounded-lg outline-2 outline-gray-400 focus:outline-2 focus:outline-black"
            />
          </div>

          <div className="text-end">
            <Link
              to="/forgot-password"
              className="text-sm hover:underline underline-offset-2"
            >
              Forgot your password?
            </Link>
          </div>

          <button
            type="submit"
            className="mb-5 w-full p-2 font-semibold rounded-lg bg-custom-black hover:bg-custom-black/90 text-custom-white cursor-pointer"
          >
            Submit
          </button>
        </form>
      </Card>
    </div>
  );
};

export default Login;
