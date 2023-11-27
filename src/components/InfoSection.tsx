import { FC } from 'react'
import ProfileIcon from "../assets/ProfileIcon.png"
import ChatIcon from "../assets/ChatIcon.png"
import NotificationIcon from "../assets/NotificationIcon.png"


const InfoSection: FC = () => {
    return (
        <div className='lg:px-10 lg:py-8 space-y-6 py-6'>
            <div className='text-center px-10'>
                <p className='font-semibold text-[40px]'>What's
                    <span className='font-semibold text-[40px] text-[#2d302e]'> BIZ</span>
                    <span className='font-semibold text-[40px] text-[#E67E22]'>PAY</span>
                </p>
                <p>Our application simplifies payment management for small business owners.
                    Create profiles, track payment transactions, and receive real-time alerts for unpaid invoices
                </p>
            </div>
            <div className='lg:flex lg:space-x-6 lg:px-12 px-4 lg:space-y-0 space-y-6'>
                <div className='flex-1 items-center bg-[#F7F7F7] rounded-md p-10 text-center'>
                    <div><img src={ProfileIcon} className='mx-auto' alt="A profile icon of two people" /></div>
                    <div className='font-semibold'>Create Client Profiles</div>
                    <div className='text-[16px]'>Easily create profile for each of your clients</div>
                </div>
                <div className='flex-1 items-center bg-[#F7F7F7] rounded-md p-10 text-center'>
                    <div><img src={ChatIcon} className='mx-auto' alt="A profile icon of two people" /></div>
                    <div className='font-semibold'>Track Payment Transactions</div>
                    <div className='text-[16px]'>Effortlessly monitor and manage payment transactions</div>
                </div>
                <div className='flex-1 items-center bg-[#F7F7F7] rounded-md p-10 text-center'>
                    <div><img src={NotificationIcon} className='mx-auto' alt="A profile icon of two people" /></div>
                    <div className='font-semibold'>Receive Real-Time Alerts</div>
                    <div className='text-[16px]'>Stay informed with real-time alerts for unpaid invoices</div>
                </div>
            </div>
        </div>
    )
}

export default InfoSection