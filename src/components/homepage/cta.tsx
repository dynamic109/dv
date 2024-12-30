import { Button } from "@/components/ui/button";

export function CTA() {
  return (
    <section className="py-16 md:text-center bg-[#e8feff]">
      <div className="max-w-[1140px] mx-auto px-6">
        <h2 className="text-[24px] text-[#333333] leading-8 font-workSans font-bold mb-4">
          Ready to take your business to the next level?
        </h2>
        <p className="text-[16px] text-[#312231] font-ibmPlex mb-8">
          Contact us today to discover how our cloud solutions can benefit your
          organization.
        </p>
        <div className="flex flex-col max-w-[125px] md:mx-auto md:items-center gap-4">
          <Button
            variant={"secondary"}
            className="md:self-center h-[44px] px-[24px] py-[12px]"
          >
            Contact Us
          </Button>
        </div>
      </div>
    </section>
  );
}
