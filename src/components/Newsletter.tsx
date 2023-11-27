

const Newsletter = () => {
    return (
        <section className="bg-white border-2 p-8 w-max rounded-md absolute -mt-20">
            <div className="flex">
                <h1 className="text-[2rem] font-bold">
                    Enter your email and <br />
                    get our latest news
                </h1>

                <div className="relative gap-4 flex">
                    <input
                        type="text"
                        id="Search"
                        placeholder="Search for..."
                        className="w-full h-max bg-transparent rounded-lg p-2 border border-gray-200"
                    />
                    <button className="h-max p-2 bg-[#E67E22] text-white rounded-md">
                        Subscribe
                    </button>
                </div>
            </div>
        </section>
    )
}

export default Newsletter