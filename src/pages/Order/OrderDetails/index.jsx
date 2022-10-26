import { MetaData } from "../../../components";
import { MinCategory } from "../../components";

const OrderDetails = () => {
  return (
    <>
      <MetaData title="Order Details | Flipkart" />
      <MinCategory />
      <main className="w-full mt-14 sm:mt-4">
        <div className="flex flex-col gap-4 max-w-6xl mx-auto">
          <div className="flex bg-white shadow rounded-sm min-w-full">
            <div className="sm:w-1/2 border-r">
              <div className="flex flex-col gap-3 my-8 mx-10">
                <h3 className="font-medium text-lg">Delivery Address</h3>
                <h4 className="font-medium">Ashok Sahu</h4>
                <p className="text-sm">{`Surala junction, girisola, odisha - 761009`}</p>
                <div className="flex gap-2 text-sm">
                  <p className="font-medium">Email</p>
                  <p>ashoksahu1105@gmail.com</p>
                </div>
                <div className="flex gap-2 text-sm">
                  <p className="font-medium">Phone Number</p>
                  <p>9550183902</p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="flex flex-col sm:flex-row min-w-full shadow rounded-sm bg-white px-2 py-5"
          >
            <div className="flex flex-col sm:flex-row sm:w-1/2 gap-2">
              <div className="w-full sm:w-32 h-20">
                <img
                  draggable="false"
                  className="h-full w-full object-contain"
                  src={require('../../../assets/images/Banners/vivo.webp')}
                />
              </div>
              <div className="flex flex-col gap-1 overflow-hidden">
                <p className="text-sm">
                  T-shirt
                </p>
                <p className="text-xs text-gray-600 mt-2">
                  Quantity: 2
                </p>
                <p className="text-xs text-gray-600">
                  Price: ₹200
                </p>
                <span className="font-medium">
                  Total: ₹400
                </span>
              </div>
            </div>

            <div className="flex flex-col w-full sm:w-1/2">
              <h3 className="font-medium sm:text-center">Order Status</h3>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default OrderDetails;
