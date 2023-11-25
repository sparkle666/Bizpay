import { FC } from 'react'
import Finance from "../assets/Finance.png"


const SecondInfoSection: FC = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row px-10 py-10 justify-evenly items-center bg-[#F7F7F7]">
                <div className="space-y-4">
                    <p className="text-[50px] font-semibold leading-none">Efficient payment management for small businesses</p>

                    <p>
                        Our application streamlines payment <br />
                        processes allowing small business owners to easily create profiles, track payment <br />
                        transactions, and receive real-time alerts for unpaid invoices
                    </p>
                    <div className="space-x-3">
                        <a href="" className="btn bg-secondary outline-0 text-white">Register</a>
                    </div>
                </div>
                <div>
                    <img src={Finance} alt="An ipad image" />
                </div>
            </div>
        </div>
    )
}

export default SecondInfoSection