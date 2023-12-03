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
          <ul className="menu menu-horizontal px-1 space-x-4">
            <li className="text-white bg-[#E67E22]">
              <button onClick={handleLogout}>Logout</button>
            </li>
          </ul>
          <img src={BizPay} className="ml-4 lg:ml-0" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
