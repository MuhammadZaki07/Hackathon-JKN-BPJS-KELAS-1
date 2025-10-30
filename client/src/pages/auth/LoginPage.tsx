import React from "react";
import { LanguageToggle } from "@/components/language-toggle";

const LoginPage: React.FC = (): JSX.Element => {
  return (
    <section className="flex flex-col-reverse lg:flex-row h-screen">
      <div className="w-full lg:w-1/2 flex flex-col">
        <header className="flex justify-between items-center lg:px-10 px-5 lg:py-6">
          <img src="/logo.png" alt="Logo" className="h-8" />
          <LanguageToggle />
        </header>
        <div className="flex-1 flex items-center justify-center px-6 lg:px-16 mb-14 lg:mb-0 md:mb-0 mt-24 lg:mt-0">
          <div className="w-full max-w-md">
            <h1 className="text-2xl font-bold text-foreground mb-2 lg:mt-12">
              Masuk ke Akun JKN
            </h1>
            <p className="text-sm text-gray-600 mb-6">
              Akses layanan BPJS Kesehatan dan kelola data kepesertaan Anda
            </p>

            <form className="space-y-4" action="#" method="POST">
              <div>
                <label className="block text-foreground/70 mb-1">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Email Address"
                  className="w-full px-4 py-3 rounded-lg bg-muted/20 border focus:border-primary focus:bg-background focus:outline-none"
                  autoFocus
                  autoComplete="on"
                  required
                />
              </div>
              <div>
                <label className="block text-foreground/70 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter Password"
                  minLength={6}
                  className="w-full px-4 py-3 rounded-lg bg-muted/20 border focus:border-primary focus:bg-background focus:outline-none"
                  required
                />
              </div>
              <div className="text-right">
                <a
                  href="#"
                  className="text-sm font-semibold text-foreground/70 hover:text-primary"
                >
                  Forgot Password?
                </a>
              </div>
              <button
                type="submit"
                className="w-full bg-primary hover:bg-primary/80 text-background font-semibold rounded-lg py-3 mt-4"
              >
                Log In
              </button>
            </form>
            <hr className="my-6 border-border" />
            <button
              type="button"
              className="w-full flex items-center justify-center bg-background hover:bg-muted/10 text-foreground font-semibold rounded-lg py-3 border border-border"
            >
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
              <span className="ml-4">Log in with Google</span>
            </button>
            <p className="mt-6 text-center text-foreground">
              Need an account?{" "}
              <a
                href="/register-user"
                className="text-primary hover:text-primary/80 font-semibold"
              >
                Create an account
              </a>
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 hidden lg:flex">
        <img
          src="/assets/images/keluarga-sehat-auth2.png"
          alt="Login Banner"
          className="w-full h-full object-cover rounded-l-3xl"
          loading="lazy"
          draggable="false"
          onContextMenu={(e) => e.preventDefault()}
        />
      </div>
    </section>
  );
};

export default LoginPage;
