import { FC } from 'react'
import ProfileIcon from "../assets/ProfileIcon.png"

const InfoSection: FC = () => {
    return (
        <div className='px-10 py-8 space-y-6'>
            <div className='text-center px-40'>
                <p className='font-semibold text-[40px]'>What's
                    <span className='font-semibold text-[40px] text-[#2d302e]'> BIZ</span>
                    <span className='font-semibold text-[40px] text-[#E67E22]'>PAY</span>
                </p>
                <p>Our application simplifies payment management for small business owners.
                    Create profiles, track payment transactions, and receive real-time alerts for unpaid invoices
                </p>
            </div>
            <div className='flex flex-col lg:flex-row space-x-6 px-12'>
                <div className='flex flex-col items-center bg-[#F7F7F7] rounded-md p-10 text-center'>
                    <div><img src={ProfileIcon} alt="A profile icon of two people" /></div>
                    <div className='font-semibold'>Create Client Profiles</div>
                    <div className='text-[16px]'>Easily create profile for each of your clients</div>
                </div>
                <div className='flex flex-col items-center bg-[#F7F7F7] rounded-md p-10 text-center'>
                    <div><img src={ProfileIcon} alt="A profile icon of two people" /></div>
                    <div className='font-semibold'>Create Client Profiles</div>
                    <div className='text-[16px]'>Easily create profile for each of your clients</div>
                </div>
                <div className='flex flex-col items-center bg-[#F7F7F7] rounded-md p-10 text-center'>
                    <div><img src={ProfileIcon} alt="A profile icon of two people" /></div>
                    <div className='font-semibold'>Create Client Profiles</div>
                    <div className='text-[16px]'>Easily create profile for each of your clients</div>
                </div>
            </div>
        </div>
    )
}

export default InfoSection