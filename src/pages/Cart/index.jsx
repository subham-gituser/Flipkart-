import { MetaData } from "../../components";
import {
  CartItem,
  EmptyCart,
  PriceSidebar,
  SaveForLaterItem,
} from "./components";

const Cart = () => {
  return (
    <>
      <MetaData title="Shopping Cart | Flipkart" />
      <main className="w-full mt-20">
        <div className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-11/12 mt-0 sm:mt-4 m-auto sm:mb-7">
          <div className="flex-1">
            <div className="flex flex-col shadow bg-white">
              <span className="font-medium text-lg px-2 sm:px-8 py-4 border-b">
                My Cart{" "}
              </span>
              <EmptyCart />
              <CartItem />

              <div className="flex justify-end">
                <button>PLACE ORDER</button>
              </div>
            </div>
            <div className="flex flex-col mt-5 shadow bg-white">
              <span className="font-medium text-lg px-2 sm:px-8 py-4 border-b">
                Saved For Later{" "}
              </span>
              <SaveForLaterItem />
            </div>
          </div>
          <PriceSidebar />
        </div>
      </main>
    </>
  );
};

export default Cart;
