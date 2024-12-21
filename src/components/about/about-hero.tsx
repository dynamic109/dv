import Image from "next/image";
import OrbitImg from "../../../public/images/orbit-img.svg";

export function AboutHero() {
  return (
    <section className="py-16">
      <div className="max-w-[1140px] mx-auto px-6 xl:px-0 mt-[50px]">
        <div className="">
          <Image src={OrbitImg} alt="orbit image" />
        </div>

        <div className="max-w-[720px] mx-auto mt-[-40px] border-b-[3px] border-[#000080] pb-4">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-center max-w-3xl mx-auto mb-8">
            {["9k+", "2k+", "2k+"].map((stat, index) => (
              <div key={index} className="space-y-1">
                <div className="text-[40px] font-bold text-[#312231] font-workSans">
                  {stat}
                </div>
                <div className="font-ibmPlex">Founded</div>
              </div>
            ))}
          </div>
          <div className="text-center space-y-3 max-w-3xl mx-auto">
            <p className="font-ibmPlex">WELCOME TO DIGIVOLVE</p>
            <h1 className="text-[30px] text-[#050405] font-medium mb-8 font-workSans">
              At Digivolve, we are passionate about harnessing the power of
              cloud technologies to drive innovation and efficiency for
              businesses of all sizes.
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
