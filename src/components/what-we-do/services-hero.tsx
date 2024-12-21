export function ServicesHero() {
  return (
    <section
      className=""
      style={{
        backgroundImage: "url('/images/wwd-hero-bg.svg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "fit-content",
      }}
    >
      <div className="max-w-[1140px] pb-3 md:pb-8 h-[500px] px-6 xl:px-0 mx-auto flex flex-col items-start justify-end gap-3 ">
        <div className="bg-[#e5e0ef] font-ibmPlex px-[20px]  py-[6px] rounded-full text-[12px] w-fit border border-[#000080]">
          What we do
        </div>
        <h1 className="text-[45px] font-workSans font-bold text-white">
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
