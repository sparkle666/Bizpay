import { FC } from 'react'
import SimplifyPayment from "../assets/simplifypayment.png"

const SimplifyPayments: FC = () => {
    return (
        <section className="max-w-screen-lg mx-auto py-6 px-4">
            <div className="bg-[#3BAA67] sm:flex justify-between rounded-lg p-6">
                <span className="space-y-10 pt-20">
                    <h1 className="text-white text-3xl">
                        Simplify Your Payment <br />
                        Management Today
                    </h1>
                    <button className="bg-[#E67E22]/90 hover:bg-[#E67E22] text-white p-2 rounded-md">
                        Create a free account
                    </button>
                </span>
                <span>
                    <img src={SimplifyPayment} className="" alt="vector" />
                </span>
            </div>
        </section>
    )
}

export default SimplifyPayments