import { useState } from "react";
import { useDispatch } from "react-redux";
import { Stepper, PriceSidebar } from "../components";
import { MetaData } from "../../components";
import {
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
} from "@mui/material";

const Payment = () => {
  const [payDisable, setPayDisable] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();
    setPayDisable(true);

    try {
        console.log('payment success')
    } catch (error) {
      setPayDisable(false);
    }
  };

  return (
    <>
      <MetaData title="Flipkart: Secure Payment | Paytm" />
      <main className="w-full mt-20">
        <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto sm:mb-7">
          <div className="flex-1">
            <Stepper activeStep={3}>
              <div className="w-full bg-white">
                <form
                  onSubmit={(e) => submitHandler(e)}
                  autoComplete="off"
                  className="flex flex-col justify-start gap-2 w-full mx-8 my-4 overflow-hidden"
                >
                  <FormControl>
                    <RadioGroup
                      aria-labelledby="payment-radio-group"
                      defaultValue="paytm"
                      name="payment-radio-button"
                    >
                      <FormControlLabel
                        value="paytm"
                        control={<Radio />}
                        label={
                          <div className="flex items-center gap-4">
                            <img
                              draggable="false"
                              className="h-6 w-6 object-contain"
                              src="https://rukminim1.flixcart.com/www/96/96/promos/01/09/2020/a07396d4-0543-4b19-8406-b9fcbf5fd735.png"
                              alt="Paytm Logo"
                            />
                            <span>Paytm</span>
                          </div>
                        }
                      />
                    </RadioGroup>
                  </FormControl>

                  <input
                    type="submit"
                    value={`Pay ₹200`}
                    disabled={payDisable ? true : false}
                    className={`${
                      payDisable
                        ? "bg-primary-grey cursor-not-allowed"
                        : "bg-primary-orange cursor-pointer"
                    } w-1/2 sm:w-1/4 my-2 py-3 font-medium text-white shadow hover:shadow-lg rounded-sm uppercase outline-none`}
                  />
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

export default Payment;
