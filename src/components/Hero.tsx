import { FC } from "react"
import IPad from "../assets/iPadPro.png"

const Hero: FC = () => {
    return (
        <div className="flex flex-col lg:flex-row px-10 pt-24 pb-10 justify-evenly items-center bg-[#F7F7F7]">
            <div className="space-y-4">
                <p className="text-[50px] font-semibold leading-none">Efficient payment management for small businesses</p>
                <p>Our application allows small business owners to easily create <br />
                    profiles, track payment transactions, and receive real-time <br />
                    alerts for unpaid invoices</p>
                <div className="space-x-3">
                    <a href="" className="btn bg-secondary outline-0 text-white">Get Started</a>
                    <a href="" className="btn-outline border-0 font-semibold">Learn More</a>
                </div>
            </div>
            <div>
                <img src={IPad} alt="An ipad image" />
            </div>
        </div>
    )
}

export default Hero