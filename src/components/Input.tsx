import { FC, ReactNode } from 'react'
import { FiUser } from "react-icons/fi";


interface InputProps {
    InputIcon: ReactNode,
    placeholder?: string
}

const Input: FC<InputProps> = ({ InputIcon, placeholder = "Placeholder" }) => {
    return (
        <div className="relative w-full">
            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                {InputIcon ? InputIcon : <FiUser className="w-4 h-4 text-gray-500 dark:text-gray-400" />}
            </div>
            <input type="text" id="simple-search" className="bg-white border focus:outline-none border-gray-300 text-gray-900 text-sm rounded-lg block w-full ps-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder={placeholder} required />
        </div>
    )
}

export default Input