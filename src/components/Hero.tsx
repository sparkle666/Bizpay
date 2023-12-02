import { FC } from "react"
import IPad from "../assets/iPadPro.png"
import { Link } from "react-router-dom"

const Hero: FC = () => {
    return (
        <div className="flex lg:h-screen text-[#111111] flex-col lg:flex-row lg:px-10 px-4 pt-24 pb-10 justify-evenly items-center bg-[#F7F7F7]">
            <div className="space-y-8">
                <p className="lg:text-[4rem] text-[50px]  font-semibold leading-none">Efficient payment management for small businesses</p>
                <p>Our application allows small business owners to easily create <br />
                    profiles, track payment transactions, and receive real-time <br />
                    alerts for unpaid invoices</p>
                <div className="space-x-4">
                    <Link to="/signup"
                        className="border border-orange-500 bg-orange-500 hover:bg-transparent hover:border-orange-500 hover:text-orange-500 text-white font-semibold py-3 px-4 rounded-md transition duration-200">
                        Get Started
                    </Link>

                    <a className="btn-outline text-[#111111] border-0 font-semibold">Learn More</a>
                </div>
            </div>
            <div>
                <img src={IPad} className="lg:block hidden" alt="An ipad image" />
            </div>
        </div >
    )
}

export default Hero