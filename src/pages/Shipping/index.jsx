import {
  FormControl,
  InputLabel,
  Select,
  TextField,
  MenuItem,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { PriceSidebar, Stepper } from "../components";
import { MetaData } from "../../components";
import states from "../../utils/states";

const Shipping = () => {
  const navigate = useNavigate();
  const [address, setAddress] = useState("surala junction");
  const [city, setCity] = useState("girisola");
  const [country] = useState("IN");
  const [state, setState] = useState("odisha");
  const [pincode, setPincode] = useState(761009);
  const [phoneNo, setPhoneNo] = useState(9550183902);

  const shippingSubmit = (e) => {
    e.preventDefault();
    console.log("data submitting", { data: e });
    navigate("/order/confirm");
  };

  return (
    <>
      <MetaData title="Flipkart: Shipping Details" />
      <main className="w-full mt-20">
        <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto sm:mb-7 overflow-hidden">
          <div className="flex-1">
            <Stepper activeStep={1}>
              <div className="w-full bg-white">
                <form
                  onSubmit={shippingSubmit}
                  autoComplete="off"
                  className="flex flex-col justify-start gap-3 w-full sm:w-3/4 mx-1 sm:mx-8 my-4"
                >
                  <TextField
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                    fullWidth
                    label="Address"
                    variant="outlined"
                    required
                  />
                  <div className="flex gap-6">
                    <TextField
                      value={pincode}
                      onChange={(e) => setPincode(e.target.value)}
                      type="number"
                      label="Pincode"
                      fullWidth
                      variant="outlined"
                      required
                    />
                    <TextField
                      value={phoneNo}
                      onChange={(e) => setPhoneNo(e.target.value)}
                      type="number"
                      label="Phone No"
                      fullWidth
                      variant="outlined"
                      required
                    />
                  </div>
                  <div className="flex gap-6">
                    <TextField
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      label="City"
                      fullWidth
                      variant="outlined"
                      required
                    />
                    <TextField
                      label="Landmark (Optional)"
                      fullWidth
                      variant="outlined"
                    />
                  </div>
                  <div className="flex gap-6">
                    <FormControl fullWidth>
                      <InputLabel id="country-select">Country</InputLabel>
                      <Select
                        labelId="country-select"
                        id="country-select"
                        defaultValue={country}
                        disabled
                        label="Country"
                      >
                        <MenuItem value={"IN"}>India</MenuItem>
                      </Select>
                    </FormControl>
                    <FormControl fullWidth disabled={country ? false : true}>
                      <InputLabel id="state-select">State</InputLabel>
                      <Select
                        labelId="state-select"
                        id="state-select"
                        value={state}
                        label="State"
                        onChange={(e) => setState(e.target.value)}
                        required
                      >
                        {states.map((item) => (
                          <MenuItem key={item.code} value={item.code}>
                            {item.name}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                  </div>
                  <button
                    type="submit"
                    className="bg-primary-orange w-full sm:w-1/3 my-2 py-3.5 text-sm font-medium text-white shadow hover:shadow-lg rounded-sm uppercase outline-none"
                  >
                    save and deliver here
                  </button>
                </form>
              </div>
            </Stepper>
          </div>
          <PriceSidebar cartItems={""} />
        </div>
      </main>
    </>
  );
};

export default Shipping;
