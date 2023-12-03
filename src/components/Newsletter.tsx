

// // const Newsletter = () => {
// //     return (
// //       <section className="relative z-1 bg-white opacity-100 border-2 p-8 md:w-max mx-auto z-50 -mb-20">
// //         <div className="md:flex justify-between gap-8">
// //           <h1 className="text-[2rem] font-bold">
// //             Enter your email and <br />
// //             get our latest news
// //           </h1>

// //           <div className="relative">
// //             <div className="sm:flex">
// //               <input
// //                 type="text"
// //                 id="Search"
// //                 placeholder="Enter your email"
// //                 className="w-full min-w-[10rem] h-max my-6 bg-transparent rounded-lg p-2 border border-gray-200"
// //               />
// //               <button className="h-max p-2 my-0 sm:my-6 bg-orange-500 text-white rounded-md">
// //                 Subscribe
// //               </button>
// //             </div>
// //           </div>
// //         </div>
// //       </section>
// //     );
// // }

// // export default Newsletter


const Newsletter = () => {
  return (
    <section className="relative z-1 bg-white opacity-100 border-2 p-8 md:w-max mx-auto z-50 -mb-20">
      <div className="md:flex justify-between gap-8">
        <div>
          <h3 className="text-[2rem] font-bold">
            Enter your email and <br />
            get our latest news
          </h3>
        </div>

        <div className="relative rounded-md border border-gray-300 border-0.5 bg-transparent mt-2 mb-2">
          <div className="sm:flex items-center mr-4 ml-4">
            {" "}
            <input
              type="text"
              id="Search"
              placeholder="Enter your email"
              className="w-full min-w-[10rem] my-6 bg-transparent"
            />
            <button className="h-max pr-4 pl-4 pt-2 pb-2 my-0 sm:my-6 bg-green-500 text-white rounded-md">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;

