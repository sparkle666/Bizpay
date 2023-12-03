import { FC } from 'react'
import ProfileIcon from "../assets/ProfileIcon.png"
import ChatIcon from "../assets/ChatIcon.png"
import NotificationIcon from "../assets/NotificationIcon.png"

const InfoSection: FC = () => {
  return (
    <div className="lg:px-10 lg:py-8 bg-white space-y-6 py-6">
       <div className="flex items-center justify-center h-full">
        <div className="text-center px-4 lg:px-10">
          <p className="font-semibold text-xl lg:text-4xl mb-2">
            What's
            <span className="font-semibold text-[#2d302e] text-xl lg:text-4xl">
              {" "}
              BIZ
            </span>
            <span className="font-semibold text-[#E67E22] text-xl lg:text-4xl">
              PAY
            </span>
          </p>
          <p className="text-sm lg:text-lg">
            Our application simplifies payment management for small business
            owners. Create profiles, track payment transactions, and receive
            real-time alerts for unpaid invoices
          </p>
        </div>
      </div>

      <div className="lg:flex lg:space-x-6 lg:px-10 px-4 lg:space-y-0 space-y-6">
        <div className="flex-1 items-center bg-[#F7F7F7] rounded-md p-6 lg:p-10 text-center">
          <div>
            <img
              src={ProfileIcon}
              className="mx-auto"
              alt="A profile icon of two people"
            />
          </div>
          <div className="font-semibold text-lg lg:text-xl">
            Create Client Profiles
          </div>
          <div className="text-sm lg:text-base">
            Easily create a profile for each of your clients
          </div>
        </div>
        <div className="flex-1 items-center bg-[#F7F7F7] rounded-md p-6 lg:p-10 text-center">
          <div>
            <img
              src={ChatIcon}
              className="mx-auto"
              alt="A profile icon of two people"
            />
          </div>
          <div className="font-semibold text-lg lg:text-xl">
            Track Payment Transactions
          </div>
          <div className="text-sm lg:text-base">
            Effortlessly monitor and manage payment transactions
          </div>
        </div>
        <div className="flex-1 items-center bg-[#F7F7F7] rounded-md p-6 lg:p-10 text-center">
          <div>
            <img
              src={NotificationIcon}
              className="mx-auto"
              alt="A profile icon of two people"
            />
          </div>
          <div className="font-semibold text-lg lg:text-xl">
            Receive Real-Time Alerts
          </div>
          <div className="text-sm lg:text-base">
            Stay informed with real-time alerts for unpaid invoices
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoSection;
