import { Mail, Phone } from "lucide-react";

export function ContactInfo() {
  return (
    <div className="max-w-[450px] px-6 space-y-5">
      <div className="max-w-[160px] bg-[#E5E0EF] text-[#050405] px-[20px] py-[6px] rounded-full text-[12px] font-ibmPlex border border-[#000080]">
        Chat to our team now
      </div>

      <h1 className="text-[24px] font-workSans font-bold">
        Ready to take your business to the next level?
      </h1>

      <p className="text-[#685d69] text-[16px]">
        Have questions about our pricing, plans, or services? Use the links
        below or fill out the form and our product analytics expert will be in
        touch directly.
      </p>

      <div className="space-y-6">
        <a
          href="mailto:contact@digivolve.com"
          className="flex items-center space-x-3 font-semibold text-[#0000EE] underline font-workSans"
        >
          <Mail className="h-5 w-5" />
          <span>Shoot us an email</span>
        </a>

        <a
          href="tel:+1234567890"
          className="flex items-center space-x-3 font-semibold text-[#0000EE] underline font-workSans"
        >
          <Phone className="h-5 w-5" />
          <span>Call us at +1 234567890</span>
        </a>
      </div>
    </div>
  );
}
