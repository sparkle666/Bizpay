import { RevenueTableData } from "./content.tsx"

const RevenueTable = () => {
    return (
        <section className="">

            <div className="relative overflow-x-auto sm:rounded-lg">
                <table className="w-full text-sm text-left rtl:text-right">
                    <thead className="text-xs text-[#999999]">
                        <tr className="border-b border-[#999999]">
                            <th scope="col" className="px-6 font-medium py-3">
                                Total Revenue
                            </th>
                            <th scope="col" className="px-6 font-medium py-3">
                                Amount
                            </th>
                            <th scope="col" className="px-6 font-medium py-3">
                                Total Revenue
                            </th>
                            <th scope="col" className="px-6 font-medium py-3">
                                Amount
                            </th>
                        </tr>
                    </thead>

                    {RevenueTableData.map((item, index) => (
                        <tbody key={index}>
                            <tr className="hover:bg-gray-50 dark:hover:bg-gray-300">
                                <th scope="row" className="px-6 py-4 font-medium text-[#111111] whitespace-nowrap">
                                    {item.revenue}
                                </th>
                                <td className="px-6 py-4">
                                    {item.amount}
                                </td>
                                <td className="px-6 py-4">
                                    {item.revenue}
                                </td>
                                <td className="px-6 py-4">
                                    {item.amount}
                                </td>
                            </tr>

                        </tbody>
                    ))}
                </table>
            </div>
        </section>
    )
}

export default RevenueTable