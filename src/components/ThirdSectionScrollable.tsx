import { FC } from 'react'

const ThirdSectionScrollable: FC = () => {
    return (
        <div className="max-w-screen-xl mx-auto p-6">
            <div className="scroll-container">
                <div className="scroll-item rounded-md px-4 py-8 space-y-3">
                    <p className='font-semibold text-[30px] leading-none'>The Benefits of Automating payment process</p>
                    <p>Learn how proper financial planning can drive business  success.</p>
                    <div className='flex flex-col lg:flex-row lg:justify-evenly'>
                        <div></div>
                        <div>20th Nov 2023</div>
                        <div></div>
                        <div>5 min read</div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ThirdSectionScrollable