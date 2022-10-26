import { TextField } from "@mui/material";
import { useState } from "react";
import { Link } from "react-router-dom";
import { MetaData } from "../../components";
import { FormSidebar } from "../components";

const ResetPassword = () => {
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.set("password", newPassword);
    formData.set("confirmPassword", confirmPassword);
  };


  return (
    <>
      <MetaData title="Password Reset | Flipkart" />
      <main class="w-full mt-12 sm:pt-20 sm:mt-0">
        <div class="flex sm:w-4/6 sm:mt-4 m-auto mb-7 bg-white shadow-lg">
          <FormSidebar
            title="Reset Password"
            tag="Get access to your Orders, Wishlist and Recommendations"
          />
          <div class="flex-1 overflow-hidden">
            <h2 className="text-center text-2xl font-medium mt-6 text-gray-800">
              Reset Password
            </h2>
            <div class="text-center py-10 px-4 sm:px-14">
              <form onSubmit={handleSubmit}>
                <div class="flex flex-col w-full gap-4">
                  <TextField
                    fullWidth
                    label="New Password"
                    type="password"
                    name="newPassword"
                    value={newPassword}
                    onChange={(e) => setNewPassword(e.target.value)}
                    required
                  />
                  <TextField
                    fullWidth
                    label="Confirm New Password"
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                  <div class="flex flex-col gap-2.5 mt-2 mb-32">
                    <p class="text-xs text-primary-grey text-left">
                      By continuing, you agree to Flipkart's{" "}
                      <a
                        href="https://www.flipkart.com/pages/terms"
                        class="text-primary-blue"
                      >
                        {" "}
                        Terms of Use
                      </a>{" "}
                      and{" "}
                      <a
                        href="https://www.flipkart.com/pages/privacypolicy"
                        class="text-primary-blue"
                      >
                        {" "}
                        Privacy Policy.
                      </a>
                    </p>
                    <button
                      type="submit"
                      class="text-white py-3 w-full bg-primary-orange shadow hover:shadow-lg rounded-sm font-medium"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
              <Link
                to="/register"
                class="font-medium text-sm text-primary-blue"
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

export default ResetPassword;
