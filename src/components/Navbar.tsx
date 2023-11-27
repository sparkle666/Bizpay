import { Link } from "react-router-dom"
import BizPay from "../assets/BIZPAY.png"

const Navbar = () => {
    return (<>
        <div className="navbar bg-base-100 top-0 fixed px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        <li><a>Home</a></li>
                        <li><a>About Us</a></li>
                        <li><a>Services</a></li>
                        <li><a>Resources</a></li>
                    </ul>
                </div>
                <img src={BizPay} alt="" />

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>About Us</a></li>
                    <li><a>Services</a></li>
                    <li><a>Resources</a></li>
                </ul>
            </div>
            <div className="navbar-end space-x-2">
                <Link to="/signup" className="btn btn-secondary outline-0 text-white px-[18px] py-[12px] ">Register </Link>
                <Link to="/signin" className="btn btn-outline outline-0 border-0 text-[#E67E22]">Sign In </Link>
            </div>
        </div>
    </>)
}

export default Navbar