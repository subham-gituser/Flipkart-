import { useSelector } from "react-redux";
import FolderIcon from "@mui/icons-material/Folder";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import PersonIcon from "@mui/icons-material/Person";
import AccountBalanceWalletIcon from "@mui/icons-material/AccountBalanceWallet";
import ChatIcon from "@mui/icons-material/Chat";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import PowerSettingsNewIcon from "@mui/icons-material/PowerSettingsNew";
import { Link, useNavigate } from "react-router-dom";

const Sidebar = ({ activeTab }) => {
  const navigate = useNavigate();

  const { user } = useSelector((state) => state.userReducer);

  const handleLogout = () => {
    // dispatch(logoutUser());
    navigate("/login");
  };

  return (
    <div className="hidden sm:flex flex-col gap-4 w-1/4 px-1">
      <div className="flex items-center gap-4 p-3 bg-white rounded-sm shadow">
        <div className="w-12 h-12 rounded-full">
          {/* <img
            draggable="false"
            className="h-full w-full object-cover rounded-full"
            // src={user.avatar.url}
            alt="Avatar"
          /> */}
        </div>
        <div className="flex flex-col gap-1">
          <p className="text-xs">Hello,</p>
          <h2 className="font-medium">{user.name}</h2>
        </div>
      </div>
      <div className="flex flex-col bg-white rounded-sm shadow">
        <div className="flex items-center gap-5 px-4 py-4 border-b">
          <span className="text-primary-blue">
            <FolderIcon />
          </span>
          <Link
            className="flex w-full justify-between font-medium text-gray-500 hover:text-primary-blue"
            to="/"
          >
            MY ORDERS
            <span>
              <ChevronRightIcon />
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-5 px-4 py-4">
          <span className="text-primary-blue">
            <PersonIcon />
          </span>
          <p className="flex w-full justify-between font-medium text-gray-500">
            ACCOUNT SETTINGS
          </p>
        </div>
        <div className="flex flex-col pb-3 border-b text-sm">
          <Link
            to="/account"
            className={`${
              activeTab === "profile"
                ? "bg-blue-50 text-primary-blue font-medium"
                : "hover:bg-blue-50 hover:text-primary-blue"
            } p-3 pl-14`}
          >
            Profile Information
          </Link>
          <Link
            className="p-3 pl-14 hover:bg-blue-50 hover:text-primary-blue"
            to="/"
          >
            Manage Addresses
          </Link>
          <Link
            className="p-3 pl-14 hover:bg-blue-50 hover:text-primary-blue"
            to="/"
          >
            PAN Card Information
          </Link>
        </div>
        <div className="flex items-center gap-5 px-4 py-4">
          <span className="text-primary-blue">
            <AccountBalanceWalletIcon />
          </span>
          <p className="flex w-full justify-between font-medium text-gray-500">
            PAYMENTS
          </p>
        </div>
        <div className="flex flex-col pb-3 border-b text-sm">
          <Link
            className="p-3 pl-14 hover:bg-blue-50 hover:text-primary-blue flex justify-between pr-6"
            to="/"
          >
            Gift Cards{" "}
            <span className="font-medium text-primary-green">₹0</span>
          </Link>
          <Link
            className="p-3 pl-14 hover:bg-blue-50 hover:text-primary-blue"
            to="/"
          >
            Saved UPI
          </Link>
          <Link
            className="p-3 pl-14 hover:bg-blue-50 hover:text-primary-blue"
            to="/"
          >
            Saved Cards
          </Link>
        </div>
        <div className="flex items-center gap-5 px-4 py-4 border-b">
          <span className="text-primary-blue">
            <ChatIcon />
          </span>
          <Link
            className="flex w-full justify-between font-medium text-gray-500 hover:text-primary-blue"
            to="/"
          >
            MY CHATS
            <span>
              <ChevronRightIcon />
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-5 px-4 py-4">
          <span className="text-primary-blue">
            <FolderSharedIcon />
          </span>
          <p className="flex w-full justify-between font-medium text-gray-500">
            MY STUFF
          </p>
        </div>
        <div className="flex flex-col pb-3 border-b text-sm">
          <Link
            className="p-3 pl-14 hover:bg-blue-50 hover:text-primary-blue"
            to="/"
          >
            My Coupons
          </Link>
          <Link
            className="p-3 pl-14 hover:bg-blue-50 hover:text-primary-blue"
            to="/"
          >
            My Reviews & Ratings
          </Link>
          <Link
            className="p-3 pl-14 hover:bg-blue-50 hover:text-primary-blue"
            to="/"
          >
            All Notifications
          </Link>
          <Link
            to="/"
            className={`${
              activeTab === "wishlist"
                ? "bg-blue-50 text-primary-blue font-medium"
                : "hover:bg-blue-50 hover:text-primary-blue"
            } p-3 pl-14`}
          >
            My Wishlist
          </Link>
        </div>
        <div className="flex items-center gap-5 px-4 py-4 border-b">
          <span className="text-primary-blue">
            <PowerSettingsNewIcon />
          </span>
          <div
            className="flex w-full justify-between font-medium text-gray-500 hover:text-primary-blue cursor-pointer"
            onClick={handleLogout}
          >
            Logout
            <span>
              <ChevronRightIcon />
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-start gap-2 p-4 bg-white rounded-sm shadow">
        <span className="text-xs font-medium">Frequently Visited:</span>
        <div className="flex gap-2.5 text-xs text-gray-500">
          <Link to="/">Change Password</Link>
          <Link to="/">Track Order</Link>
          <Link to="/">Help Center</Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
