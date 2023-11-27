import { PaymentData } from "./content"
import { BsThreeDots } from "react-icons/bs";

const PaymentsTable = () => {
    return (
        <section className="">

            <div className="relative overflow-x-auto sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right">
                    {PaymentData.map((item, index) => (
                        <tbody key={index}>
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-300">
                                <th scope="row" className="px-6 py-4 font-medium text-[#111111] whitespace-nowrap">
                                    <img src={item.image} className="" alt="chicogogor" />
                                </th>
                                <td className="px-6 py-4">
                                    <p className="font-semibold">{item.name}</p>
                                    <p className="text-[#111111]">
                                        {item.date}
                                    </p>
                                </td>
                                <td className="px-6 py-4">
                                    <p className="font-semibold">{item.amount}</p>
                                </td>
                                <td className="px-6 py-4">
                                    <p className={item.status === 'Done' ? 'rounded-xl font-semibold py-3 px-6 text-[#3BAA67] bg-[#DCFFD6]' : 'rounded-xl font-semibold py-3 px-6 text-[#937F59] bg-[#FFEDCB]'}>
                                        {item.status}
                                    </p>
                                </td>
                                <td className="px-6 py-4">
                                    <button title="More">
                                        <BsThreeDots className="h-8 w-8 text-[#A0A0A0]" />
                                    </button>
                                </td>
                            </tr>

                        </tbody>
                    ))}
                </table>
            </div>
        </section>
    )
}

export default PaymentsTable