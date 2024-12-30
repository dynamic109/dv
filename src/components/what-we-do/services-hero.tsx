export function ServicesHero() {
  return (
    <section
      className="py-14"
      style={{
        backgroundImage: "url('/images/wwd-hero-bg.svg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        minHeight: "500px",
      }}
    >
      <div className="max-w-[1140px]  h-[500px] px-6 xl:px-0 mx-auto md:mx-[28px] flex flex-col items-start justify-end gap-6 md:gap-10 ">
        <div className="bg-[#e5e0ef] font-ibmPlex px-[20px]  py-[6px] rounded-full text-[12px] w-fit border border-[#000080]">
          What we do
        </div>
        <h1 className="text-[35px] md:text-[40px] font-workSans leading-[44px] font-extrabold text-white">
          IT solutions focused on cloud technologies
        </h1>
        <p className="text-[16px] font-ibmPlex text-[#fafafa] max-w-2xl">
          We provide end-to-end innovative solutions to support your business
          operations and growth.
        </p>
      </div>
    </section>
  );
}
