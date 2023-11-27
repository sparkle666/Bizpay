import { Link } from "react-router-dom"
import BizPay from "../assets/BIZPAY.png"

const Navbar = () => {
    return (<>
        <div className="navbar bg-base-100 top-0 fixed lg:px-10 px-4">
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
                        <li>
                            <Link to="/signup">Register </Link>
                        </li>
                        <li>
                            <Link to="/signin">Sign In </Link>
                        </li>
                    </ul>
                </div>
                <img src={BizPay} className="ml-4 lg:ml-0" alt="" />

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>About Us</a></li>
                    <li><a>Services</a></li>
                    <li><a>Resources</a></li>
                </ul>
            </div>
            <div className="navbar-end space-x-4">
                <Link to="/signup" className="btn btn-secondary hidden md:flex ">
                    Register
                </Link>
                <Link to="/signin" className="btn btn-secondary hidden md:flex ">
                    Sign In
                </Link>
            </div>
        </div>
    </>)
}

export default Navbar