export function Hero() {
  return (
    <section className="bg-teal-500 text-white pt-10">
      <div className="mx-auto container max-w-[1400px]">
        <div className="pt-10 px-4 sm:px-12">
          <div className=" flex flex-col items-center gap-6 md:flex-row md:justify-between md:gap-0">
            <div className="flex flex-col gap-6">
              <h1 className="text-4xl font-normal max-w-[790px] md:text-5xl lg:text-7xl xl:text-[88px]">
                Попробуй новый вкус Арабики
              </h1>
              <button className="border bg-inherit max-w-40 w-full py-3 rounded-md text-lg">
                Перейти к кофе
              </button>
            </div>
            <img
              className="max-w-60 w-1/2"
              src="https://i.postimg.cc/jSWWCXs5/hero-bg.png"
              alt="Кофе"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
