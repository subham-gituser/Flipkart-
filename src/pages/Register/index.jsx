import { useState, useEffect } from "react";
import { TextField, FormControlLabel, Radio, RadioGroup } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate,Link } from "react-router-dom";
import { FormSidebar } from "../components";
import { MetaData, BackdropLoader } from "../../components";
import { clearErrors, registerUser } from "../../actions/auth.action";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, isAuthenticated, error } = useSelector(
    (state) => state.userReducer
  );

  const [user, setUser] = useState({
    name: "",
    email: "",
    gender: "",
    password: "",
    cpassword: "",
  });

  const { name, email, gender, password, cpassword } = user;

  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.set("name", name);
    formData.set("email", email);
    formData.set("gender", gender);
    formData.set("password", password);
    dispatch(registerUser(formData));
  };

  const handleDataChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }
    if (isAuthenticated) {
      navigate("/");
    }
  }, [dispatch, error, isAuthenticated, navigate]);

  return (
    <>
      <MetaData title="Register | Flipkart" />
      {loading && <BackdropLoader />}
      <main className="w-full mt-12 sm:pt-20 sm:mt-0">
        <div className="flex sm:w-4/6 sm:mt-4 m-auto mb-7 bg-white shadow-lg">
          <FormSidebar
            title="Looks like you're new here!"
            tag="Sign up with your mobile number to get started"
          />
          <div className="flex-1 overflow-hidden">
            <form
              onSubmit={(e) => handleRegister(e)}
              encType="multipart/form-data"
              className="p-5 sm:p-10"
            >
              <div className="flex flex-col gap-4 items-start">
                <div className="flex flex-col w-full justify-between sm:flex-col gap-3 items-center">
                  <TextField
                    fullWidth
                    id="full-name"
                    label="Full Name"
                    name="name"
                    value={name}
                    onChange={handleDataChange}
                    required
                  />
                  <TextField
                    fullWidth
                    id="email"
                    label="Email"
                    type="email"
                    name="email"
                    value={email}
                    onChange={handleDataChange}
                    required
                  />
                </div>
                <div className="flex gap-4 items-center">
                  <h2 className="text-md">Your Gender :</h2>
                  <div className="flex items-center gap-6" id="radioInput">
                    <RadioGroup
                      row
                      aria-labelledby="radio-buttons-group-label"
                      name="radio-buttons-group"
                    >
                      <FormControlLabel
                        name="gender"
                        value="male"
                        onChange={handleDataChange}
                        control={<Radio required />}
                        label="Male"
                      />
                      <FormControlLabel
                        name="gender"
                        value="female"
                        onChange={handleDataChange}
                        control={<Radio required />}
                        label="Female"
                      />
                    </RadioGroup>
                  </div>
                </div>
                <div className="flex flex-col w-full justify-between sm:flex-row gap-3 items-center">
                  <TextField
                    id="password"
                    label="Password"
                    type="password"
                    name="password"
                    value={password}
                    onChange={handleDataChange}
                    required
                  />
                  <TextField
                    id="confirm-password"
                    label="Confirm Password"
                    type="password"
                    name="cpassword"
                    value={cpassword}
                    onChange={handleDataChange}
                    required
                  />
                </div>
                <div className="flex flex-col w-full justify-between sm:flex-row gap-3 items-center"></div>
                <button
                  type="submit"
                  className="text-white py-3 w-full bg-primary-orange shadow hover:shadow-lg rounded-sm font-medium"
                >
                  Signup
                </button>
                <Link
                  to="/login"
                  className="hover:bg-gray-50 text-primary-blue text-center py-3 w-full shadow border rounded-sm font-medium"
                >
                  Existing User? Log in
                </Link>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>
  );
};

export default Register;
