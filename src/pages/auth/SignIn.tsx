import { FC } from 'react'
import { FiPhone, } from "react-icons/fi";
import { GoLock } from "react-icons/go";
import { HiOutlineMail } from "react-icons/hi";
import SignUp from './SignUp';

const SignIn: FC = () => {
  return (
    <section className='bg-[#F6F9FA] text-[#111111]'>
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <form
            className="mb-0 space-y-2 rounded-lg p-6 bg-white shadow-lg"
          >
            <div className='space-y-2 mb-6'>
              <h1 className="text-center text-[#111111] text-xl font-semibold sm:text-3xl">
                Welcome to <span className='text-[#3BAA67] text-xl font-semibold sm:text-3xl'>BIZ</span><span className='text-[#E67E22] text-xl font-semibold sm:text-3xl'>PAY</span>
              </h1>
              <p className="text-center text-lg font-medium">Sign In</p>
            </div>


            <div className='space-y-4'>
              <div className='space-y-1'>
                <label htmlFor="Email" className="font-semibold">Email</label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <HiOutlineMail className="w-5 h-5 text-[#ABABAB]" />
                  </div>
                  <input type='email'
                    id='Email'
                    className="block w-full p-4 ps-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    defaultValue="ifediogorsophia@gmail.com"
                    required />
                </div>
              </div>
              <div className='space-y-1'>
                <label htmlFor="phoneNumber" className="font-semibold">Phone Number</label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <FiPhone className="w-5 h-5 text-[#ABABAB]" />
                  </div>
                  <input type='tel'
                    id='phoneNumber'
                    className="block w-full p-4 ps-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    defaultValue="+234 813 296 260"
                    required />
                </div>
              </div>
              <div className='space-y-1'>
                <label htmlFor="Password" className="font-semibold">Password</label>
                <div className="relative">
                  <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                    <GoLock className="w-5 h-5 text-[#ABABAB]" />
                  </div>
                  <input type='password'
                    id='Password'
                    className="block w-full p-4 ps-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder=""
                    defaultValue="Password"
                    required />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-[#E67E22] px-5 py-3 text-sm font-medium text-white"
            >
              Sign In
            </button>

            <p className="text-center text-sm text-gray-500">
              Don’t have an account?
            </p>
            <button
              type="submit"
              className="block w-full rounded-lg border border-[#E67E22] px-5 py-3 text-sm font-medium text-[#E67E22]"
            >
              Sign Up
            </button>

          </form>
        </div>
      </div >
    </section>
  )
}

export default SignIn