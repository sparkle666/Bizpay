import { FC } from 'react'
import Finance from "../assets/Finance.png"
import { Link } from 'react-router-dom'


const SecondInfoSection: FC = () => {
    return (
        <div>
            <div className="flex flex-col lg:flex-row lg:px-10 px-4 py-10 justify-evenly items-center bg-[#F7F7F7]">
                <div className="space-y-4">
                    <p className="text-[50px] font-semibold leading-none">Efficient payment management for small businesses</p>

                    <p>
                        Our application streamlines payment <br />
                        processes allowing small business owners to easily create profiles, track payment <br />
                        transactions, and receive real-time alerts for unpaid invoices
                    </p>
                    <Link to="/signup"
                        className="border border-orange-500 bg-orange-500 hover:bg-transparent hover:border-orange-500 hover:text-orange-500 text-white font-semibold py-3 px-4 rounded-md transition duration-200 inline-block">
                        Register
                    </Link>
                </div>
                <div>
                    <img src={Finance} alt="An ipad image" />
                </div>
            </div>
        </div >
    )
}

export default SecondInfoSection