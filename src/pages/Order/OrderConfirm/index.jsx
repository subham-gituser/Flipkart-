import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { MetaData } from "../../../components";
import { PriceSidebar, Stepper } from "../../components";

const OrderConfirm = () => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.userReducer);
  return (
    <>
      <MetaData title="Flipkart: Order Confirmation" />
      <main className="w-full mt-20">
        <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto sm:mb-7">
          <div className="flex-1">
            <Stepper activeStep={2}>
              <div className="w-full bg-white"></div>
              <div className="flex justify-between items-center mt-4 bg-white px-6 py-3 rounded-b-sm">
                <p className="text-sm">
                  Order confirmation email will be sent to{" "}
                  <span className="font-medium">{user.email}</span>
                </p>
                <button
                  onClick={() => {
                    navigate("/process/payment");
                  }}
                  className="bg-primary-orange px-6 py-2 text-white font-medium rounded-sm shadow hover:shadow-lg uppercase"
                >
                  continue
                </button>
              </div>
            </Stepper>
          </div>
          <PriceSidebar cartItems={""} />
        </div>
      </main>
    </>
  );
};

export default OrderConfirm;
