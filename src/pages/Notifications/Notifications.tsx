

const Notifications = () => {
    return (
        <section className='bg-gray-100 p-8 text-black'>
            <div className="md:flex justify-between">
                <h1 className='text-4xl font-semibold'>
                    Notifications
                </h1>
                <span className="text-base text-[#999999]">
                    <button className="px-4 py-2 border-2 rounded-lg">
                        Mark all as read
                    </button>
                </span>
            </div>

            <div className="text-center">
                <i className="">No Notifications yet..</i>
            </div>
        </section>
    )
}

export default Notifications