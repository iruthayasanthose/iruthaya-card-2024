import Link from "next/link";

export default function Features() {
  return (
    <section id="services" className="py-12">
      <div className="max-w-xl px-4 py-12 mx-auto sm:px-6 lg:max-w-6xl lg:px-8">
        <h1 className="mb-8 text-2xl font-bold tracking-normal text-center text-gray-800 md:leading-tight md:tracking-normal dark:text-gray-200 md:text-4xl">
          Elevate Your{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-rose-500 via-fuchsia-500 to-indigo-500 dark:from-rose-400 dark:via-fuchsia-400 dark:to-indigo-400">
            Business
          </span>{" "}
          On{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500 dark:from-indigo-400 dark:via-fuchsia-400 dark:to-rose-400">
            Online
          </span>{" "}
          With Me.
        </h1>
        <p className="max-w-md mx-auto mb-10 text-lg text-gray-600 dark:text-gray-400 md:text-lg text-center">
          I&apos;m here to bring your vision to life.
        </p>
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="mb-10 space-y-6">
            <h1 className="text-xl font-bold text-center text-rose-600 dark:text-rose-300 md:text-2xl sm:text-left">
              Web design
            </h1>
            <div className="h-auto">
              <a href="#letstalk" rel="noreferrer">
                <img
                  className="transition duration-700 rounded shadow-2xl h-80 sm:h-40 hover:shadow-3xl md:hover:transform md:hover:scale-105"
                  src="/images/knsb.webp"
                  alt="Web design"
                />
              </a>
            </div>
            <p className="mx-2 font-normal text-gray-500 dark:text-gray-400 text-md">
              <ul className="mr-0 md:mr-10">
                <li className="mb-2">
                  Crafting Websites that Seamlessly Adapt to Mobile Devices,
                  Load Swiftly, Offer User-Friendly Management, and Instantly
                  Captivate Visitors&apos; Attention.
                </li>
                <li className="mb-2">
                  <span className="font-semibold">Whether your need:</span>
                </li>
                <li className="mb-2">
                  <span className="text-purple-500 dark:text-purple-400 px-1 py-0.75 border border-gray-200 dark:border-gray-800 rounded-md bg-gray-100 dark:bg-gray-900">
                    Business
                  </span>{" "}
                  Website
                </li>
                <li className="mb-2">
                  <span className="text-purple-500 dark:text-purple-400 px-1 py-0.75 border border-gray-200 dark:border-gray-800 rounded-md bg-gray-100 dark:bg-gray-900">
                    Portfolio
                  </span>{" "}
                  Website
                </li>
                <li className="mb-2">
                  <span className="text-purple-500 dark:text-purple-400 px-1 py-0.75 border border-gray-200 dark:border-gray-800 rounded-md bg-gray-100 dark:bg-gray-900">
                    Blog
                  </span>{" "}
                  Website
                </li>
                <li className="mb-2">
                  <span className="text-purple-500 dark:text-purple-400 px-1 py-0.75 border border-gray-200 dark:border-gray-800 rounded-md bg-gray-100 dark:bg-gray-900">
                    E-commerce
                  </span>{" "}
                  Website
                </li>
                <li className="mb-2">
                  <span className="font-semibold">
                    or any other customized web solution, I&apos;m here to help
                    you.
                  </span>
                </li>
              </ul>
            </p>
            <div className="mt-6 text-left">
              <Link href="#letstalk" legacyBehavior>
                <a
                  className="inline-flex items-center px-5 py-3 mt-2 ml-0 text-sm font-medium text-gray-700 transition duration-300 border rounded shadow dark:hover:border-gray-500 hover:shadow-md md:ml-2 dark:text-gray-300"
                  aria-label="learn more"
                >
                  <span className="flex justify-center">Lets Talk</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="mb-10 space-y-6">
            <h1 className="text-xl font-bold text-center text-rose-600 dark:text-rose-300 md:text-2xl sm:text-left">
              Web Redesign
            </h1>
            <div className="h-auto">
              <a href="#letstalk" rel="noreferrer">
                <img
                  className="transition duration-700 rounded shadow-2xl h-80 sm:h-40 hover:shadow-3xl md:hover:transform md:hover:scale-105"
                  src="/images/gadgify.webp"
                  alt="Web Redesign"
                />
              </a>
            </div>
            <p className="mx-2 font-normal text-gray-500 dark:text-gray-400 text-md">
              <ul className="mr-0 md:mr-10">
                <li className="mb-2">
                  Redefing Websites that Seamlessly Adapt to Mobile Devices,
                  Load Swiftly, Offer User-Friendly Management, and Instantly
                  Captivate Visitors&apos; Attention.
                </li>
                <li className="mb-2">
                  <span className="font-semibold">
                    Currently I&apos;m redesigning:
                  </span>
                </li>
                <li className="mb-2">
                  <span className="text-purple-500 dark:text-purple-400 px-1 py-0.75 border border-gray-200 dark:border-gray-800 rounded-md bg-gray-100 dark:bg-gray-900">
                    Business
                  </span>{" "}
                  Website
                </li>
                <li className="mb-2">
                  <span className="text-purple-500 dark:text-purple-400 px-1 py-0.75 border border-gray-200 dark:border-gray-800 rounded-md bg-gray-100 dark:bg-gray-900">
                    Portfolio
                  </span>{" "}
                  Website
                </li>
                <li className="mb-2">
                  <span className="text-purple-500 dark:text-purple-400 px-1 py-0.75 border border-gray-200 dark:border-gray-800 rounded-md bg-gray-100 dark:bg-gray-900">
                    Blog
                  </span>{" "}
                  Website
                </li>
                <li className="mb-2">
                  <span className="text-purple-500 dark:text-purple-400 px-1 py-0.75 border border-gray-200 dark:border-gray-800 rounded-md bg-gray-100 dark:bg-gray-900">
                    E-commerce
                  </span>{" "}
                  Website
                </li>
                <li className="mb-2">
                  <span className="font-semibold">
                    or any other customized web solution, I&apos;m here to help
                    you.
                  </span>
                </li>
              </ul>
            </p>
            <div className="mt-6 text-left">
              <Link href="#letstalk" legacyBehavior>
                <a
                  className="inline-flex items-center px-5 py-3 mt-2 ml-0 text-sm font-medium text-gray-700 transition duration-300 border rounded shadow dark:hover:border-gray-500 hover:shadow-md md:ml-2 dark:text-gray-300"
                  aria-label="learn more"
                >
                  <span className="flex justify-center">Lets Talk</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="mb-10 space-y-6">
            <h1 className="text-xl font-bold text-center text-rose-600 dark:text-rose-300 md:text-2xl sm:text-left">
              Web Maintenance
            </h1>
            <div className="h-auto">
              <a href="#letstalk" rel="noreferrer">
                <img
                  className="transition duration-700 rounded shadow-2xl h-80 sm:h-40 hover:shadow-3xl md:hover:transform md:hover:scale-105"
                  src="/images/reyna.webp"
                  alt="Web Maintenance"
                />
              </a>
            </div>
            <p className="mx-2 font-normal text-gray-500 dark:text-gray-400 text-md">
              <ul className="mr-0 md:mr-10">
                <li className="mb-2">
                  Maintaining Websites that Seamlessly Adapt to Mobile Devices,
                  Load Swiftly, Offer User-Friendly Management, and Instantly
                  Captivate Visitors&apos; Attention.
                </li>
                <li className="mb-2">
                  <span className="font-semibold">
                    Currently I&apos;m helping:
                  </span>
                </li>
                <li className="mb-2">
                  <span className="text-purple-500 dark:text-purple-400 px-1 py-0.75 border border-gray-200 dark:border-gray-800 rounded-md bg-gray-100 dark:bg-gray-900">
                    Business
                  </span>{" "}
                  Website
                </li>
                <li className="mb-2">
                  <span className="text-purple-500 dark:text-purple-400 px-1 py-0.75 border border-gray-200 dark:border-gray-800 rounded-md bg-gray-100 dark:bg-gray-900">
                    Portfolio
                  </span>{" "}
                  Website
                </li>
                <li className="mb-2">
                  <span className="text-purple-500 dark:text-purple-400 px-1 py-0.75 border border-gray-200 dark:border-gray-800 rounded-md bg-gray-100 dark:bg-gray-900">
                    Blog
                  </span>{" "}
                  Website
                </li>
                <li className="mb-2">
                  <span className="text-purple-500 dark:text-purple-400 px-1 py-0.75 border border-gray-200 dark:border-gray-800 rounded-md bg-gray-100 dark:bg-gray-900">
                    E-commerce
                  </span>{" "}
                  Website
                </li>
                <li className="mb-2">
                  <span className="font-semibold">
                    or any other customized web solution, I&apos;m here to help
                    you.
                  </span>
                </li>
              </ul>
            </p>
            <div className="mt-6 text-left">
              <Link href="#letstalk" legacyBehavior>
                <a
                  className="inline-flex items-center px-5 py-3 mt-2 ml-0 text-sm font-medium text-gray-700 transition duration-300 border rounded shadow dark:hover:border-gray-500 hover:shadow-md md:ml-2 dark:text-gray-300"
                  aria-label="learn more"
                >
                  <span className="flex justify-center">Lets Talk</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="mb-10 space-y-6">
            <h1 className="text-xl font-bold text-center text-rose-600 dark:text-rose-300 md:text-2xl sm:text-left">
              Web Development
            </h1>
            <div className="h-auto">
              <a href="#letstalk" rel="noreferrer">
                <img
                  className="transition duration-700 rounded shadow-2xl h-80 sm:h-40 hover:shadow-3xl md:hover:transform md:hover:scale-105"
                  src="/images/webilo.webp"
                  alt="Web Development"
                />
              </a>
            </div>
            <p className="mx-2 font-normal text-gray-500 dark:text-gray-400 text-md">
              <ul className="mr-0 md:mr-10">
                <li className="mb-2">
                  If you already have a good design, I&apos; help you to bring
                  the design into reality.
                </li>
                <li className="mb-2">
                  <span className="font-semibold">
                    Currently I&apos;m helping:
                  </span>
                </li>
                <li className="mb-2">
                  <span className="text-purple-500 dark:text-purple-400 px-1 py-0.75 border border-gray-200 dark:border-gray-800 rounded-md bg-gray-100 dark:bg-gray-900">
                    Business
                  </span>{" "}
                  Website
                </li>
                <li className="mb-2">
                  <span className="text-purple-500 dark:text-purple-400 px-1 py-0.75 border border-gray-200 dark:border-gray-800 rounded-md bg-gray-100 dark:bg-gray-900">
                    Portfolio
                  </span>{" "}
                  Website
                </li>
                <li className="mb-2">
                  <span className="text-purple-500 dark:text-purple-400 px-1 py-0.75 border border-gray-200 dark:border-gray-800 rounded-md bg-gray-100 dark:bg-gray-900">
                    Blog
                  </span>{" "}
                  Website
                </li>
                <li className="mb-2">
                  <span className="text-purple-500 dark:text-purple-400 px-1 py-0.75 border border-gray-200 dark:border-gray-800 rounded-md bg-gray-100 dark:bg-gray-900">
                    E-commerce
                  </span>{" "}
                  Website
                </li>
                <li className="mb-2">
                  <span className="font-semibold">
                    or any other customized web solution, I&apos;m here to help
                    you.
                  </span>
                </li>
              </ul>
            </p>
            <div className="mt-6 text-left">
              <Link href="#letstalk" legacyBehavior>
                <a
                  className="inline-flex items-center px-5 py-3 mt-2 ml-0 text-sm font-medium text-gray-700 transition duration-300 border rounded shadow dark:hover:border-gray-500 hover:shadow-md md:ml-2 dark:text-gray-300"
                  aria-label="learn more"
                >
                  <span className="flex justify-center">Lets Talk</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="mb-10 space-y-6">
            <h1 className="text-xl font-bold text-center text-rose-600 dark:text-rose-300 md:text-2xl sm:text-left">
              SEO On & Off
            </h1>
            <div className="h-auto">
              <a href="#letstalk" rel="noreferrer">
                <img
                  className="transition duration-700 rounded shadow-2xl h-80 sm:h-40 hover:shadow-3xl md:hover:transform md:hover:scale-105"
                  src="/images/ez.webp"
                  alt="SEO On & Off"
                />
              </a>
            </div>
            <p className="mx-2 font-normal text-gray-500 dark:text-gray-400 text-md">
              <ul className="mr-0 md:mr-10">
                <li className="mb-2">
                  SEO and Social media marketing pricing are customized based on
                  your specific requirements. Let&apos;s have a conversation to
                  discuss your needs and create a tailored pricing package that
                  aligns perfectly with your goals.
                </li>
              </ul>
            </p>
            <div className="mt-6 text-left">
              <Link href="#letstalk" legacyBehavior>
                <a
                  className="inline-flex items-center px-5 py-3 mt-2 ml-0 text-sm font-medium text-gray-700 transition duration-300 border rounded shadow dark:hover:border-gray-500 hover:shadow-md md:ml-2 dark:text-gray-300"
                  aria-label="learn more"
                >
                  <span className="flex justify-center">Lets Talk</span>
                </a>
              </Link>
            </div>
          </div>
          <div className="mb-10 space-y-6">
            <h1 className="text-xl font-bold text-center text-rose-600 dark:text-rose-300 md:text-2xl sm:text-left">
              Google My Business Optimization
            </h1>
            <div className="h-auto">
              <a href="#letstalk" rel="noreferrer">
                <img
                  className="transition duration-700 rounded shadow-2xl h-80 sm:h-40 hover:shadow-3xl md:hover:transform md:hover:scale-105"
                  src="/images/realme.webp"
                  alt="Google My Business Optimization"
                />
              </a>
            </div>
            <p className="mx-2 font-normal text-gray-500 dark:text-gray-400 text-md">
              <ul className="mr-0 md:mr-10">
                <li className="mb-2">
                  SEO and Social media marketing pricing are customized based on
                  your specific requirements. Let&apos;s have a conversation to
                  discuss your needs and create a tailored pricing package that
                  aligns perfectly with your goals.
                </li>
              </ul>
            </p>
            <div className="mt-6 text-left">
              <Link href="#letstalk" legacyBehavior>
                <a
                  className="inline-flex items-center px-5 py-3 mt-2 ml-0 text-sm font-medium text-gray-700 transition duration-300 border rounded shadow dark:hover:border-gray-500 hover:shadow-md md:ml-2 dark:text-gray-300"
                  aria-label="learn more"
                >
                  <span className="flex justify-center">Lets Talk</span>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
