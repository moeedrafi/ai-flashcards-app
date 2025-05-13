import { Card } from "@/components/ui/Card";
import { useRegister } from "@/features/auth/hooks/useRegister";

export const RegisterForm = () => {
  const { errors, handleSubmit, isSubmitting, register } = useRegister();

  return (
    <Card
      header="Register"
      subHeading="Create an Account"
      to="/login"
      label="Already have an account?"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="flex flex-col gap-2">
          <label htmlFor="email">Email</label>
          <input
            id="email"
            type="email"
            autoComplete="on"
            placeholder="john@doe.com"
            {...register("email")}
            aria-invalid={!!errors.email}
            aria-describedby={errors.email ? "email-error" : undefined}
            className="px-3 py-2 rounded-lg outline-2 outline-gray-400 focus:outline-2 focus:outline-black"
          />
          {errors.email && (
            <p
              id="email-error"
              role="alert"
              aria-live="polite"
              className="text-rose-500"
            >
              {errors.email.message}
            </p>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            type="password"
            placeholder="********"
            {...register("password")}
            aria-invalid={!!errors.password}
            aria-describedby={errors.password ? "password-error" : undefined}
            className="px-3 py-2 rounded-lg outline-2 outline-gray-400 focus:outline-2 focus:outline-black"
          />
          {errors.password && (
            <p
              id="password-error"
              role="alert"
              aria-live="polite"
              className="text-rose-500"
            >
              {errors.password.message}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          aria-busy={isSubmitting}
          className={`mb-5 w-full p-2 font-semibold rounded-lg bg-custom-black hover:bg-custom-black/90 text-custom-white ${
            isSubmitting ? "cursor-not-allowed" : "cursor-pointer"
          }`}
        >
          {isSubmitting ? "Registering..." : "Register"}
        </button>
      </form>
    </Card>
  );
};
