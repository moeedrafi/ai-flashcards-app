import { LoginForm } from "@/features/auth/components/LoginForm";

const Login = () => {
  return (
    <div className="h-screen w-full flex items-center justify-center bg-gradient-to-r from-custom-secondary to-custom-secondary-20">
      <LoginForm />
    </div>
  );
};

export default Login;
