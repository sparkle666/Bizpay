import { CiFilter } from "react-icons/ci";
import { FiDownload } from "react-icons/fi";

const Invoice = () => {
    return (
        <section className='bg-gray-100 p-8 space-y-8 text-black'>
            <div className="md:flex justify-between">
                <h1 className='text-4xl font-semibold'>
                    Recent Invoice
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

            <div className="text-center">
                <i className="">Nothing to show here..</i>
            </div>
        </section>
    )
}

export default Invoice