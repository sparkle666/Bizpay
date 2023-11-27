import BizPay from "../assets/BIZPAY.png"


const Footer = () => {
    return (
        <section className="bg-[#3BAA671A]">
            <div className="lg:px-10 px-4 py-8 pt-32">
                <img src={BizPay} className="ml-4 lg:ml-0" alt="" />
                <div className="md:flex gap-6 text-center md:space-y-0 space-y-4 font-semibold text-[#111111] pt-16 pb-24">
                    <a className="link link-hover block">
                        About Us
                    </a>
                    <a className="link link-hover block">
                        Services
                    </a>
                    <a className="link link-hover block">
                        Contact Us
                    </a>
                    <a className="link link-hover block">
                        FAQ
                    </a>
                    <a className="link link-hover block">
                        Blog
                    </a>
                </div>

                <div className="flex gap-6 text-center border-[#D9D9D9] border-t pt-4">
                    <p>
                        2023 BIZPAY. All rights reserved.
                    </p>
                    <a className="underline">
                        Privacy Policy
                    </a>
                    <a className="underline">
                        Terms and Conditions
                    </a>
                </div>
            </div>
        </section>
    )
}

export default Footer