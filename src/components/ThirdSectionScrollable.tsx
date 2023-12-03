import { FC } from 'react'
import GroupPhoto from "../assets/Group 114.png"

const ThirdSectionScrollable: FC = () => {
    return (
      <div className="max-w-screen-xl mx-auto p-6">
        <div className="scroll-container flex justify-between">
          <div className="scroll-item flex-1 rounded-md px-4 py-8 space-y-3">
            <p className="font-semibold text-[30px] leading-none">
              Create your Client's profile with ease.
            </p>
            <p>
              Effortlessly craft detailed and comprehensive client profiles with
              our user-friendly platform.
            </p>
            <div className="flex justify-between gap-4">
              <div>
                <img src={GroupPhoto} className="" alt="Group" />
              </div>
              <div>20th Nov 2023</div>
              <div></div>
              <div>5 min read</div>
            </div>
          </div>
          <div className="scroll-item flex-1 rounded-md px-4 py-8 space-y-3">
            <p className="font-semibold text-[30px] leading-none">
              The Benefits of Automating payment process
            </p>
            <p>
              Learn how proper financial planning can drive business success.
            </p>
            <div className="flex justify-between gap-4">
              <div>
                <img src={GroupPhoto} className="" alt="Group" />
              </div>
              <div>20th Nov 2023</div>
              <div></div>
              <div>5 min read</div>
            </div>
          </div>
          <div className="scroll-item flex-1 rounded-md px-4 py-8 space-y-3">
            <p className="font-semibold text-[30px] leading-none">
              The Importance of Tracking your invoices.
            </p>
            <p>
              Unlock the power of financial clarity by understanding the
              significance of diligently monitoring your invoices.
            </p>
            <div className="flex justify-between gap-4">
              <div>
                <img src={GroupPhoto} className="" alt="Group" />
              </div>
              <div>20th Nov 2023</div>
              <div></div>
              <div>5 min read</div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default ThirdSectionScrollable