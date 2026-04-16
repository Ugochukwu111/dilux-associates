import { Link } from "react-router-dom";
import { Lock, Mail, SendHorizontal } from "lucide-react";
import AuthLayout from "../../Components/AuthLayout.jsx";

const businessName = import.meta.env.VITE_BUSINESS_NAME;

export default function SignIn() {
  return (
    <AuthLayout
      heading="Welcome Back to"
      tagline="Access your Dilux Properties dashboard to manage your listings and track your growth."
    >
      <form action="">
        <h5 className="text-center">Welcome Back</h5>
        <p className="text-center text-muted">
          Enter your credentials to access your associate account
        </p>
        <div className="input-wrapper">
          <div className="flex flex-col input-container">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              name="password"
              id="email"
              autoComplete="email"
            />
            <Mail size={18} />
          </div>
          <div className="flex flex-col input-container">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Create a strong Password"
              autoComplete="new-password"
            />
            <Lock size={18} />
          </div>
        </div>
        <br />
        <button className="btn text-inverse bg-primary" id="submit-btn">
          Access Dashboard
          <SendHorizontal size={18} />
        </button>
        <p className="text-center">
          Don'y have an Associate account ?
          <Link to="/sign-in" className="text-primary">
            Sign Up
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
