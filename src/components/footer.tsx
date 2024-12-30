import Image from "next/image";
import Link from "next/link";
import Logo from "../../public/images/logo-footer.svg";
import LinkedinIcon from "../../public/images/linkedin-icon.svg";
import InstagramIcon from "../../public/images/instagram-icon.svg";
import TwitterIcon from "../../public/images/twitter-icon.svg";

export function Footer() {
  return (
    <footer className="bg-[#000080] text-white">
      <div className="max-w-[940px] mx-auto px-6 py-14">
        <div className="flex flex-col md:flex-row justify-between items-center mb-8 ">
          <div className="text-[14px] text-[#E8FEFF] font-ibmPlex font-normal leading-5 tracking-[-.1px] grid grid-cols-2 md:flex md:items-center md:justify-center gap-3  w-full items-start justify-start md:space-x-4 mb-4 md:mb-0 ">
            <Link href="/how-it-works">How it works</Link>
            <Link href="/pricing">Terms & Conditions</Link>
            <Link href="/demo">Contact Support</Link>
            <Link href="/careers">Pricing</Link>
            <Link href="/terms">Careers</Link>
          </div>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between pt-8 border-t-[1px] border-[#ffede9] gap-5">
          <div className="flex items-center gap-4">
            <Image
              src={Logo}
              alt="Digivolve"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
            <div className="text-[16px] text-[#C0C0C0] font-ibmPlex">
              © Digivolve, 2024
            </div>
          </div>
          <div className="flex items-center space-x-8 md:pr-8">
            <Link href="https://linkedin.com" className="hover:text-gray-300">
              <Image
                src={LinkedinIcon}
                alt="linkedin icon"
                className="h-[28px] w-[28px]"
              />
            </Link>
            <Link href="https://instagram.com" className="hover:text-gray-300">
              <Image
                src={InstagramIcon}
                alt="instagram icon"
                className="h-[28px] w-[28px]"
              />
            </Link>
            <Link href="https://twitter.com" className="hover:text-gray-300">
              <Image
                src={TwitterIcon}
                alt="twitter icon"
                className="h-[28px] w-[28px]"
              />
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
