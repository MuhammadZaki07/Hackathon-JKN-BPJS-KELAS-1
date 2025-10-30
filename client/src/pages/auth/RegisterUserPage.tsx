import React from "react";
import { LanguageToggle } from "@/components/language-toggle";
import { FaHospitalUser } from "react-icons/fa";

const RegisterUserPage: React.FC = (): JSX.Element => {
  return (
    <section className="flex flex-col-reverse lg:flex-row h-screen">
      <div className="w-full lg:w-1/2 flex flex-col bg-background">
        <header className="flex justify-between items-center px-10 py-6">
          <img src="/logo.png" alt="Logo" className="h-8"  draggable="false"
          onContextMenu={(e) => e.preventDefault()}/>
          <LanguageToggle />
        </header>

        <div className="flex-1 flex items-center justify-center px-6 lg:px-16">
          <div className="w-full max-w-lg">
            <h1 className="text-2xl font-bold text-foreground mb-2">
              Daftar Akun JKN
            </h1>
            <p className="text-sm text-gray-600 mb-6">
              Buat akun untuk mengakses layanan BPJS Kesehatan dan kelola data
              kepesertaan Anda
            </p>

            <form className="space-y-4">
              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="text"
                  placeholder="NIK"
                  className="w-full md:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <input
                  type="text"
                  placeholder="BPJS Number"
                  className="w-full md:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <input
                type="text"
                placeholder="Active Phone Number"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
              />

              <div className="flex flex-col md:flex-row gap-4">
                <input
                  type="password"
                  placeholder="Password"
                  className="w-full md:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
                <input
                  type="password"
                  placeholder="Confirm Password"
                  className="w-full md:w-1/2 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400"
                />
              </div>

              <button className="w-full bg-green-700 text-white py-3 rounded-lg hover:bg-green-800 transition">
                Register
              </button>
            </form>

            <div className="flex items-center my-4">
              <hr className="flex-grow border-green-200" />
              <span className="mx-2 text-green-400">or</span>
              <hr className="flex-grow border-green-200" />
            </div>

            <button className="w-full flex items-center justify-center bg-background hover:bg-muted/10 text-foreground font-semibold rounded-lg py-3 border border-border transition">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="w-6 h-6"
                viewBox="0 0 48 48"
              >
                <defs>
                  <path
                    id="a"
                    d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                  />
                </defs>
                <clipPath id="b">
                  <use xlinkHref="#a" overflow="visible" />
                </clipPath>
                <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                <path
                  clipPath="url(#b)"
                  fill="#EA4335"
                  d="M0 11l17 13 7-6.1L48 14V0H0z"
                />
                <path
                  clipPath="url(#b)"
                  fill="#34A853"
                  d="M0 37l30-23 7.9 1L48 0v48H0z"
                />
                <path
                  clipPath="url(#b)"
                  fill="#4285F4"
                  d="M48 48L17 24l-4-3 35-10z"
                />
              </svg>
              <span className="ml-4">Sign up with Google</span>
            </button>

            <a
              href="/register-hospital"
              className="w-full flex gap-2 items-center justify-center bg-background hover:bg-muted/10 text-foreground font-semibold rounded-lg py-3 border border-border transition mt-4"
            >
              <FaHospitalUser size={25} /> Register as Hospital
            </a>

            <p className="mt-6 text-center text-foreground">
              Already have an account?{" "}
              <a
                href="/login"
                className="text-primary hover:text-primary/80 font-semibold"
              >
                Login
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className="flex-1 hidden lg:flex">
        <img
          src="/assets/images/keluarga-sehat-auth2.png"
          alt="Register Banner"
          className="w-full h-full object-cover rounded-l-3xl"
          loading="lazy"
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
        />
      </div>
    </section>
  );
};

export default RegisterUserPage;
