import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-[1140px] mx-auto px-6 xl:px-0 text-center">
        <div className="max-w-[160px] mx-auto bg-[#E5E0EF] text-[#050405] px-[20px] py-[6px] rounded-full text-[12px] font-ibmPlex border border-[#000080] mb-5">
          Chat to our team now
        </div>
        <h2 className="text-[24px] font-workSans font-bold mb-4">
          Ready to take your business to the cloud?
        </h2>
        <p className="text-[16px] font-ibmPlex mb-8">
          Let us help you navigate this transformation journey. Contact us today
          to learn more about how Digivolve can elevate your cloud strategy and
          drive your success.
        </p>
        <Button
          variant={"secondary"}
          className="font-workSans py-[12px] px-[24px] h-[44px]"
        >
          Contact Us Now
        </Button>
      </div>
    </section>
  );
}
