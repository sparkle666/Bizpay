import BizPay from "../assets/BIZPAY.png";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
    const navigate = useNavigate();
  const handleLogout = () => {
    navigate("/");
  };

  return (
    <div className="pb-14">
      <div className="navbar bg-base-100 top-0 fixed lg:px-10 px-4">
        <div className="flex justify-between">
         
          <img
            src={BizPay}
            onClick={handleLogout}
            className="ml-4 lg:ml-0"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
