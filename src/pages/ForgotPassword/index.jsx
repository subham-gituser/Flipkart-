import { useState } from "react";
import { TextField } from "@mui/material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { MetaData } from "../../components";
import { FormSidebar } from "../components";

const ForgotPassword = () => {
  const [email, setEmail] = useState("");
  const { error, message, loading } = useSelector((state) => state.forgotPassword);

  const dispatch = useDispatch();


  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("email", email);
    setEmail("");
  };

  return (
    <>
      <MetaData title="Forgot Password" />
      <main className="w-full mt-12 sm:pt-20 sm:mt-0">
        <div className="flex sm:w-4/6 sm:mt-4 m-auto mb-7 bg-white shadow-lg">
          <FormSidebar
            title="Forgot Your Password?"
            tag="Enter the email address associated with your account."
          />
          <div className="flex-1 overflow-hidden">
            <h2 className="text-center text-2xl font-medium mt-6 text-gray-800">
              Forgot Password
            </h2>
            <div className="text-center py-10 px-4 sm:px-14">
              <form onSubmit={handleSubmit}>
                <div className="flex flex-col w-full gap-4">
                  <TextField
                    fullWidth
                    label="Email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                  <div className="flex flex-col gap-2.5 mt-2 mb-32">
                    <p className="text-xs text-primary-grey text-left">
                      By continuing, you agree to Flipkart's{" "}
                      <a
                        href="https://www.flipkart.com/pages/terms"
                        className="text-primary-blue"
                      >
                        Terms of Use
                      </a>
                      and
                      <a
                        href="https://www.flipkart.com/pages/privacypolicy"
                        className="text-primary-blue"
                      >
                        {" "}
                        Privacy Policy.
                      </a>
                    </p>
                    <button
                      type="submit"
                      className="text-white py-3 w-full bg-primary-orange shadow rounded-sm font-medium"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
              <Link
                to="/register"
                className="font-medium text-sm text-primary-blue"
              >
                New to Flipkart? Create an account
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default ForgotPassword;
