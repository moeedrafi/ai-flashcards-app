import { Card } from "@/components/ui/Card";

const Register = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-custom-secondary to-custom-secondary-20">
      <Card
        header="Register"
        subHeading="Create an Account"
        to="/login"
        label="Already have an account?"
      >
        <form className="space-y-6">
          <div className="flex flex-col gap-2">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              placeholder="john.doe"
              className={`px-3 py-2 rounded-lg outline-2 outline-gray-400 focus:outline-2 focus:outline-black`}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              type="email"
              placeholder="john@doe.com"
              className={`px-3 py-2 rounded-lg outline-2 outline-gray-400 focus:outline-2 focus:outline-black`}
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="********"
              className={`px-3 py-2 rounded-lg outline-2 outline-gray-400 focus:outline-2 focus:outline-black`}
            />
          </div>

          <button
            type="submit"
            className="mb-5 w-full p-2 font-semibold rounded-lg bg-custom-black hover:bg-custom-black/90 text-custom-white cursor-pointer"
          >
            Register
          </button>
        </form>
      </Card>
    </div>
  );
};

export default Register;
