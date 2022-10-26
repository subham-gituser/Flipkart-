import { Link } from "react-router-dom";

const CartItem = () => {
  return (
    <div className="flex flex-col gap-3 py-5 pl-2 sm:pl-6 border-b overflow-hidden">
      <Link className="flex flex-col sm:flex-row gap-5 items-stretch w-full group">
        <div className="w-full sm:w-1/6 h-28 flex-shrink-0">
          <img
            draggable="false"
            className="h-full w-full object-contain"
            src=""
            alt="image"
          />
        </div>
        <div className="flex flex-col sm:gap-5 w-full pr-6">
          <div className="flex flex-col sm:flex-row justify-between items-start pr-5 gap-1 sm:gap-0">
            <div className="flex flex-col gap-0.5 sm:w-3/5">
              <p className="group-hover:text-primary-blue"></p>
              <span className="text-sm text-gray-500">Seller:</span>
            </div>
            <div className="flex flex-col sm:gap-2">
              <p className="text-sm">
                Delivery by | <span className="text-primary-green">Free</span>
                <span className="line-through">₹</span>
              </p>
              <span className="text-xs text-gray-500">
                7 Days Replacement Policy
              </span>
            </div>
          </div>
          <div className="flex items-baseline gap-2 text-xl font-medium">
            <span>₹</span>
            <span className="text-sm text-gray-500 line-through font-normal">
              ₹
            </span>
            <span className="text-sm text-primary-green">%&nbsp;off</span>
          </div>
        </div>
      </Link>

      <div className="flex justify-between pr-4 sm:pr-0 sm:justify-start sm:gap-6">
        <div className="flex gap-1 items-center">
          <span
            onClick="decrease"
            className="w-7 h-7 text-3xl font-light bg-gray-50 rounded-full border flex items-center justify-center cursor-pointer"
          >
            <p>-</p>
          </span>
          <input className="w-11 border outline-none text-center rounded-sm py-0.5 text-gray-700 font-medium text-sm qtyInput" />
          <span
            onClick="increaseQuantity"
            className="w-7 h-7 text-xl font-light bg-gray-50 rounded-full border flex items-center justify-center cursor-pointer"
          >
            +
          </span>
        </div>
        <>
          <button
            onClick="saveForLaterHandler"
            className="sm:ml-4 font-medium hover:text-primary-blue"
          >
            SAVE FOR LATER
          </button>
          <button
            onClick="removeCartItem"
            className="font-medium hover:text-red-600"
          >
            REMOVE
          </button>
        </>
      </div>
    </div>
  );
};

export default CartItem;
