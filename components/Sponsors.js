import Link from "next/link";

export default function Sponsors() {
  return (
    <section className="pb-10" id="sponsors">
      <div className="px-4 pb-16 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <h1 className="mb-8 text-2xl font-bold tracking-normal text-center text-gray-800 md:leading-tight md:tracking-normal dark:text-gray-200 md:text-4xl">
          I will meet your requirements.
        </h1>
        <p className="max-w-5xl mx-auto mb-12 text-lg text-gray-600 dark:text-gray-400 text-left md:text-center md:text-lg">
          <b>Note:</b> I provide exceptional web design, development, and UI/UX
          design services that elevate your brand. Additionally, I offer
          strategic SEO and social media marketing solutions to help your brand
          shine online.
        </p>
        <div className="mt-6 text-center md:ml-6">
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
    </section>
  );
}
