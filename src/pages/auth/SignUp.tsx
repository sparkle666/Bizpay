import React, { FC, useState } from 'react';
import { FiUser, FiPhone } from 'react-icons/fi';
import { GoLock } from 'react-icons/go';
import { HiOutlineMail } from 'react-icons/hi';
import { ToastContainer, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import NavbarLogout from '../../components/NavbarLogin';

const SignUp: FC = () => {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(
        "https://bizpay.onrender.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      if (response.ok) {
        const result = await response.json();
        toast.success(result.message);

        setTimeout(() => {
          navigate("/signin");
        }, 10000);

      } else {
        const errorResult = await response.json();
        toast.error(errorResult.message);
      }
    } catch (error) {
      console.error("Error during signup:", error);
      toast.error("Error during signup. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <> <NavbarLogout />
      <div className="lg:h-screen bg-[#F6F9FA] text-[#111111]">
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-lg">
            <form
              onSubmit={handleSubmit}
              className="mb-0 space-y-2 rounded-lg p-6 bg-white shadow-lg"
            >
              <div className="space-y-2 mb-6">
                <h1 className="text-center text-[#111111] text-xl font-semibold sm:text-3xl">
                  Welcome to{" "}
                  <span className="text-[#3BAA67] text-xl font-semibold sm:text-3xl">
                    BIZ
                  </span>
                  <span className="text-[#E67E22] text-xl font-semibold sm:text-3xl">
                    PAY
                  </span>
                </h1>
                <p className="text-center text-lg font-medium">Sign Up</p>
              </div>

              <div className="space-y-4">
                <div className="space-y-1">
                  <label htmlFor="fullName" className="font-semibold">
                    Full Name
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <FiUser className="w-5 h-5 text-[#ABABAB]" />
                    </div>
                    <input
                      type="text"
                      id="fullName"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      className="block w-full p-4 ps-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="email" className="font-semibold">
                    Email
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <HiOutlineMail className="w-5 h-5 text-[#ABABAB]" />
                    </div>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="block w-full p-4 ps-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="phoneNumber" className="font-semibold">
                    Phone Number
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <FiPhone className="w-5 h-5 text-[#ABABAB]" />
                    </div>
                    <input
                      type="tel"
                      id="phoneNumber"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleChange}
                      className="block w-full p-4 ps-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                    />
                  </div>
                </div>
                <div className="space-y-1">
                  <label htmlFor="password" className="font-semibold">
                    Password
                  </label>
                  <div className="relative">
                    <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                      <GoLock className="w-5 h-5 text-[#ABABAB]" />
                    </div>
                    <input
                      type="password"
                      id="password"
                      name="password"
                      value={formData.password}
                      onChange={handleChange}
                      className="block w-full p-4 ps-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:placeholder-gray-400 dark:focus:ring-blue-500 dark:focus:border-blue-500"
                      placeholder=""
                      required
                    />
                  </div>
                </div>
              </div>

              <button
                type="submit"
                className={`block w-full rounded-lg bg-[#E67E22] px-5 py-3 text-sm font-medium text-white ${
                  loading ? "opacity-50 cursor-not-allowed" : ""
                }`}
                disabled={loading}
              >
                {loading ? "Signing Up..." : "Sign Up"}
              </button>

              <p className="text-center text-sm text-gray-500">
                Already have an account?
              </p>

              <Link to="/signin">
                <button
                  type="button"
                  className="block w-full rounded-lg border border-[#E67E22] px-5 py-3 text-sm font-medium text-[#E67E22]"
                >
                  Sign In
                </button>
              </Link>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
