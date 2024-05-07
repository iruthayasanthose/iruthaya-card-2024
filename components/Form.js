import FormfacadeEmbed from "@formfacade/embed-react";

export default function Form() {
  return (
    <section id="form" className="py-12">
      <div className="max-w-xl px-4 py-12 mx-auto sm:px-6 lg:max-w-6xl lg:px-8">
        <h1 className="mb-8 text-2xl font-bold tracking-normal text-center text-gray-800 md:leading-tight md:tracking-normal dark:text-gray-200 md:text-4xl">
          <span className="text-transparent bg-clip-text bg-gradient-to-r dark:bg-gradient-to-r from-indigo-500 via-fuchsia-500 to-rose-500 dark:from-indigo-400 dark:via-fuchsia-400 dark:to-rose-400">
            Let&apos;s Talk
          </span>{" "}
          .
        </h1>

        <div id="letstalk" className="grid grid-cols-1 gap-4 md:grid-cols-1">
          <FormfacadeEmbed
            formFacadeURL="https://formfacade.com/include/100523233362798998298/form/1FAIpQLSescnYBY26XzNfs1eg8-dy801DP_ax2Wjw8xo1GkKtlosQmdg/classic.js/?div=ff-compose"
            onSubmitForm={() => console.log("Form submitted")}
          />
        </div>
      </div>
    </section>
  );
}
