import { Link } from "react-router-dom";
import { Lock, Mail, Phone, SendHorizontal } from "lucide-react";
import AuthLayout from "../../Components/AuthLayout.jsx";
import "./Forms.css";

const businessName = import.meta.env.VITE_BUSINESS_NAME;

export default function SignUp() {
  return (
    <AuthLayout
      heading="Build Wealth with"
      tagline="Empowering associates with premium land banking opportunities across Nigeria. "
    >
      <form action="">
        <h5 className="text-center">Become an Associate</h5>
        <p className="text-center text-muted">
          Secure your future. Start earning through strategic property
          partnerships.
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
          <div className="flex flex-col input-container">
            <label htmlFor="phoneNumber">Phone Number</label>
            <input
              type="tel"
              name="phoneNumber"
              id="phoneNumber"
              placeholder="Enter Phone Number"
              autoComplete="phone"
            />
            <Phone size={18} />
          </div>
        </div>
        <div className="flex items-center">
          <input type="checkbox" /> &nbsp; &nbsp;
          <p>
            I agree to the{" "}
            <span className="text-secondary fw700">Terms of Service</span> and{" "}
            <span className=" text-secondary fw700">Privacy Policy</span>{" "}
          </p>
        </div>
        <br />
        <button className="btn text-inverse bg-primary" id="submit-btn">
          Register Now
          <SendHorizontal size={18} />
        </button>
        <p className="text-center">
          Already have an Associate account ?
          <Link to="/sign-in" className="text-primary">
            Sign in
          </Link>
        </p>
      </form>
    </AuthLayout>
  );
}
