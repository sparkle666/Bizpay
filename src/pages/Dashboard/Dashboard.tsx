import { CiFilter } from "react-icons/ci";
import { FiDownload } from "react-icons/fi";
import RevenueTable from "./RevenueTable";
import PaymentsTable from "./PaymentsTable.tsx";
import PaidUnpaidGraph from "../../assets/Paid-unpaid.png"
import Analytics from "../../assets/Analytics.png"



const Dashboard = () => {
    return (
        <section className='bg-gray-100 p-8 text-black'>
            <div className="md:flex justify-between">
                <h1 className='text-4xl font-semibold'>
                    Dashboard
                </h1>
                <span className="flex gap-4 text-base text-[#999999]">
                    <button className="px-4 py-2 border-2 rounded-lg">
                        <CiFilter className="inline w-4 h-4" /> Filters
                    </button>
                    <button className="px-4 py-2 border-2 rounded-lg">
                        <FiDownload className="inline w-4 h-4" /> Export
                    </button>
                </span>
            </div>

            <div className="mt-8 md:flex justify-between space-y-8 md:space-y-0 gap-12">
                <div className="flex-1 p-4 space-y-6 rounded-2xl bg-gray-200">
                    <h2 className="font-semibold text-xl">
                        Revenue Overview
                    </h2>
                    <RevenueTable />
                </div>
                <div className="flex-1 p-4 rounded-2xl bg-gray-200">
                    <h2 className="font-semibold text-xl">
                        Analytics
                    </h2>
                    <img src={Analytics} className="my-3" alt="analytics" />
                </div>
            </div>

            <div className="mt-8 md:flex justify-between space-y-8 md:space-y-0 gap-12">
                <div className="flex-1 p-4 space-y-6 rounded-2xl bg-gray-200">
                    <h2 className="font-semibold text-xl">
                        Recent Payments
                    </h2>
                    <PaymentsTable />
                </div>

                <div className="flex-1 p-4 rounded-2xl bg-gray-200">
                    <img src={PaidUnpaidGraph} className="" alt="Paid-unpaid" />
                </div>
            </div>
        </section>
    )
}

export default Dashboard