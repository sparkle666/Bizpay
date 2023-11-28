import { FC } from 'react'
import SimplifyPayment from "../assets/simplifypayment.png"
import { Link } from 'react-router-dom'

const SimplifyPayments: FC = () => {
    return (
        <section className="max-w-screen-lg mx-auto py-6 pb-40 px-4">
            <div className="bg-[#3BAA67] sm:flex justify-between rounded-lg p-6">
                <span className="space-y-10 pt-20">
                    <h1 className="text-white text-3xl">
                        Simplify Your Payment <br />
                        Management Today
                    </h1>
                    <Link to="signup" className='inline-block'>
                        <button
                            className="border border-orange-500 bg-orange-500 hover:bg-transparent hover:border-orange-500 text-white py-3 px-4 rounded-md transition duration-200">
                            Create a free account
                        </button>
                    </Link>
                </span>
                <span>
                    <img src={SimplifyPayment} className="" alt="vector" />
                </span>
            </div>
        </section>
    )
}

export default SimplifyPayments