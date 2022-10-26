import PriceSidebar from "../PriceSidebar";
import Stepper from "../Stepper";
import FormControl from "@mui/material/FormControl";
import FormControlLabel from "@mui/material/FormControlLabel";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import { MetaData } from "../../../../components";

const Payment = () => {
  return (
    <>
      <MetaData title="Flipkart: Secure Payment | Paytm" />

      <main className="w-full mt-20">
        <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto sm:mb-7">
          <div className="flex-1">
            <Stepper activeStep={3}>
              <div className="w-full bg-white">
                <form
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

                  <input type="submit" />
                </form>
              </div>
            </Stepper>
          </div>

          <PriceSidebar />
        </div>
      </main>
    </>
  );
};

export default Payment;
