const PriceSidebar = ({ cartItems }) => {
    return (
        <div className="flex sticky top-16 sm:h-screen flex-col sm:w-4/12 sm:px-1">
            <div className="flex flex-col bg-white rounded-sm shadow">
                <h1 className="px-6 py-3 border-b font-medium text-gray-500">PRICE DETAILS</h1>
                <div className="flex flex-col gap-4 p-6 pb-3">
                    <p className="flex justify-between">Price (2 item) <span>₹300</span></p>
                    <p className="flex justify-between">Discount <span className="text-primary-green">- ₹200</span></p>
                    <p className="flex justify-between">Delivery Charges <span className="text-primary-green">FREE</span></p>
                    <div className="border border-dashed"></div>
                    <p className="flex justify-between text-lg font-medium">Total Amount <span>₹200</span></p>
                    <div className="border border-dashed"></div>
                    <p className="font-medium text-primary-green">You will save ₹ on this order</p>
                </div>
            </div>
        </div>
    );
};

export default PriceSidebar;
