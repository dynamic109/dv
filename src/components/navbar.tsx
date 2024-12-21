import Link from "next/link";
import Image from "next/image";
import Logo from "../../public/images/logo.svg";
import { Button } from "@/components/ui/button";
import { TiThMenu } from "react-icons/ti";
import MobileNav from "./mobilenav";

export function Navbar({ toggle, isNavOpen }: any) {
  return (
    <>
      <header className="w-full h-fit py-6 px-6 bg-[#000080] fixed z-50">
        <div className="max-w-[1140px] mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src={Logo}
              alt="Digivolve"
              width={120}
              height={32}
              className="h-8 w-auto"
            />
          </Link>

          <nav className="hidden lg:flex items-center space-x-20">
            <div className="flex gap-6 font-ibmPlex">
              <Link href="/about-us" className="text-white hover:text-[gray]">
                About
              </Link>
              <Link href="/what-we-do" className="text-white hover:text-[gray]">
                What we do
              </Link>
              <Link href="/support" className="text-white hover:text-[gray]">
                Support
              </Link>
              <Link href="/careers" className="text-white hover:text-[gray]">
                Careers
              </Link>
            </div>
            <Button
              variant="default"
              className="font-semibold font-workSans h-[36px]"
            >
              Contact Support
            </Button>
          </nav>
          <div onClick={toggle} className="flex lg:hidden">
            <TiThMenu size={30} color="white" />
          </div>
          <MobileNav isNavOpen={isNavOpen} toggle={toggle} />
        </div>
      </header>
    </>
  );
}
