import BizPay from "../assets/BIZPAY.png"
import { BsTwitterX } from "react-icons/bs";
import { FaInstagram } from "react-icons/fa6";
import { FiFacebook, FiLinkedin } from "react-icons/fi";



const Footer = () => {
    return (
        <section className="bg-[#3BAA671A]">
            <div className="max-w-screen-xl mx-auto lg:px-10 px-4 py-8 pt-32">
                <img src={BizPay} className="ml-4 lg:ml-0" alt="" />
                <div className="md:flex justify-center gap-6 text-center md:space-y-0 space-y-4 font-semibold text-[#111111] pt-16 pb-24">
                    <a className="link link-hover pt-1 block">About Us</a>
                    <a className="link link-hover pt-1 block">Services</a>
                    <a className="link link-hover pt-1 block">Contact Us</a>
                    <a className="link link-hover pt-1 block">FAQ</a>
                    <a className="link link-hover pt-1 block">Blog</a>
                    <span className="space-x-4">
                        <button className="text-white bg-[#3BAA67] rounded-full p-2" title="Instagram">
                            <FaInstagram className="h-4 w-4" />
                        </button>
                        <button className="text-white bg-[#3BAA67] rounded-full p-2" title="Facebook">
                            <FiFacebook className="h-4 w-4" />
                        </button>
                        <button className="text-white bg-[#3BAA67] rounded-full p-2" title="LinkedIn">
                            <FiLinkedin className="h-4 w-4" />
                        </button>
                        <button className="text-white bg-[#3BAA67] rounded-full p-2" title="Twitter(X)">
                            <BsTwitterX className="h-4 w-4" />
                        </button>
                    </span>
                </div>

                <div className="sm:flex space-x-4 gap-6 text-center border-[#D9D9D9] border-t pt-4">
                    <p>2023 BIZPAY. All rights reserved.</p>
                    <a className="underline">Privacy Policy</a>
                    <a className="underline">Terms and Conditions</a>
                </div>
            </div>
        </section>


    )
}

export default Footer