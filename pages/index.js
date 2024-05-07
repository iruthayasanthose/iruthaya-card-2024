import Head from "next/head";
import Link from "next/link";
import { NextSeo } from "next-seo";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Sponsors from "../components/Sponsors";
import Features from "../components/Services";
import Pricing from "../components/Pricing";
import Form from "../components/Form";

export default function Home() {
  return (
    <div className="bg-white dark:bg-black">
      <NextSeo
        title="Anthony Iruthaya"
        description="Anthony Iruthaya – Freelance web developer."
        canonical="https://anthonyiruthaya.vercel.app/"
        openGraph={{
          url: "https://anthonyiruthaya.vercel.app/",
          title: "Anthony Iruthaya",
          description: "Anthony Iruthaya – Freelance web developer.",
          site_name: "Anthony Iruthaya",
        }}
        twitter={{
          handle: "@anthonyiruthaya",
          site: "https://anthonyiruthaya.vercel.app/",
          cardType: "summary_large_image",
        }}
      />
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <section id="land" className="relative">
        <div className="px-4 pt-10 mx-auto max-w-7xl md:pt-16">
          <div className="w-full pb-5 mx-auto text-center md:w-11/12">
            <h1 className="mb-3 text-5xl font-bold tracking-tight text-gray-900 dark:text-gray-100 md:text-6xl">
              Hi 👋🏻, I am
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 dark:from-pink-500 dark:via-purple-400 dark:to-indigo-500">
                Anthony Iruthaya
              </span>
            </h1>
            <p className="max-w-xl pt-5 mx-auto text-lg text-gray-600 dark:text-gray-400 md:text-lg">
              I am a freelance web developer, indie-hacker.<br></br> Welcome to
              my creative world!
            </p>
            <div className="mt-6 text-center md:ml-6">
              <a
                className="inline-flex items-center px-5 py-3 text-sm font-medium text-gray-300 transition duration-300 bg-black rounded hover:bg-gray-800 dark:hover:bg-gray-200 dark:text-gray-700 dark:bg-white"
                aria-label="learn more"
                rel="noreferrer"
                href="#"
              >
                <span className="flex justify-center">Previous Works</span>
              </a>
              <br className="sm:hidden" />
              <Link href="#letstalk">
                <a
                  className="inline-flex items-center px-5 py-3 mt-2 ml-0 text-sm font-medium text-gray-700 transition duration-300 border rounded shadow dark:hover:border-gray-500 hover:shadow-md md:ml-2 dark:text-gray-300"
                  aria-label="learn more"
                >
                  <span className="flex justify-center">Let&apos;s Talk</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="relative w-full py-10 mx-auto text-center md:py-32 md:my-12 md:w-10/12">
            <div className="relative z-10">
              <img
                className="transition duration-700 shadow-xl rounded-xl ring-1 ring-black ring-opacity-5 hover:transform hover:scale-105"
                src="/images/pp.webp"
                alt="Placeholder Image"
              />
            </div>
            <p className="z-10 my-8 text-sm font-medium text-gray-500">
              It&apos;s me ❤️
            </p>
          </div>
        </div>
        {/* <div
          style={{ backgroundImage: "url(/images/blur.png)" }}
          className="absolute inset-0 w-full h-full bg-bottom bg-no-repeat bg-cover -z-1"
        /> */}
      </section>
      <Sponsors />
      <Features />
      <Pricing />
      <Form />
      <Footer />
    </div>
  );
}
