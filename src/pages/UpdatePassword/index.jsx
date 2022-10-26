import { useState } from "react";
import TextField from "@mui/material/TextField";
import { Link } from "react-router-dom";
import { MetaData } from "../../components";
import { FormSidebar } from "../components";

const UpdatePassword = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const updatePasswordSubmitHandler = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("oldPassword", oldPassword);
    formData.set("newPassword", newPassword);
    formData.set("confirmPassword", confirmPassword);
  };

  return (
    <>
      <MetaData title="Password Update | Flipkart" />
      <main className="w-full mt-12 sm:pt-20 sm:mt-0">
        <div className="flex sm:w-4/6 sm:mt-4 m-auto mb-7 bg-white shadow-lg">
          <FormSidebar
            title="Looks like you want to update password!"
            tag="Enter your current and new password to update"
          />
          <div className="flex-1 overflow-hidden">
            <h2 className="text-center text-2xl font-medium mt-6 text-gray-800">
              Update Password
            </h2>
            <form
              onSubmit={updatePasswordSubmitHandler}
              className="p-5 sm:p-14"
            >
              <div className="flex flex-col gap-4 items-start">
                <div className="flex flex-col w-full justify-between sm:flex-col gap-3 items-center">
                  <TextField
                    fullWidth
                    label="Current Password"
                    type="password"
                    name="oldPassword"
                    value={oldPassword}
                    onChange={(e) => setOldPassword(e.target.value)}
                    required
                  />
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
                </div>
                <button
                  type="submit"
                  className="text-white py-3 w-full bg-primary-orange shadow hover:shadow-lg rounded-sm font-medium"
                >
                  Update
                </button>
                <Link
                  className="hover:bg-gray-50 text-primary-blue text-center py-3 w-full shadow border rounded-sm font-medium mb-8"
                  to="/account"
                >
                  Cancel
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default UpdatePassword;
