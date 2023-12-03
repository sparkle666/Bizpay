const Newsletter = () => {
  return (
    <section className=" bg-orange-500 opacity-100 border-2 p-8 md:w-max mx-auto z-50 -mb-36 mr-90 ml-96">
      <div className="md:flex justify-between gap-8 bg-orange-500 ml-auto">
        <h1 className="text-[2rem] font-bold">
          Enter your email and <br />
          get our latest news
        </h1>

        <div className="relative">
          <div className="sm:flex">
            <input
              type="text"
              id="Search"
              placeholder="Enter your email"
              className="w-full min-w-[10rem] h-max my-6 bg-transparent rounded-lg p-2 border border-gray-200"
            />
            <button className="h-max p-2 my-0 sm:my-6 bg-orange-500 text-white rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
