import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import Image from "next/image";
import Logo from "../../public/images/logo.svg";
import { TiThMenu } from "react-icons/ti";
import { motion, AnimatePresence } from "framer-motion";

interface MobileNavProps {
  isNavOpen: boolean;
  toggle: () => void;
}

const menuVariants = {
  open: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    opacity: 0,
    y: "-100%",
    transition: {
      type: "spring",
      stiffness: 300,
      damping: 24,
      when: "afterChildren",
      staggerChildren: 0.1,
      staggerDirection: -1,
    },
  },
};

const itemVariants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: -20 },
};

export default function MobileNav({ isNavOpen, toggle }: MobileNavProps) {
  return (
    <AnimatePresence>
      {isNavOpen && (
        <motion.div
          className="fixed inset-0 bg-[#000080] z-50 lg:hidden flex flex-col py-8 px-6 gap-14 h-[90%]"
          initial="closed"
          animate="open"
          exit="closed"
          variants={menuVariants}
        >
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center">
              <Image
                src={Logo}
                alt="Digivolve"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </Link>
            <div onClick={toggle} className="flex lg:hidden">
              <TiThMenu size={30} color="white" />
            </div>
          </div>
          <nav className="flex gap-10 container mx-auto flex-col justify-center items-center">
            <div className="flex flex-col justify-center items-center gap-8 text-[18px] text-[#F6F5F6] font-ibmPlex">
              <motion.div variants={itemVariants}>
                <Link
                  href="/about-us"
                  className="hover:text-[gray]"
                  onClick={toggle}
                >
                  About
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  href="/what-we-do"
                  className="hover:text-[gray]"
                  onClick={toggle}
                >
                  What we do
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  href="/support"
                  className="hover:text-[gray]"
                  onClick={toggle}
                >
                  Support
                </Link>
              </motion.div>
              <motion.div variants={itemVariants}>
                <Link
                  href="/careers"
                  className="hover:text-[gray]"
                  onClick={toggle}
                >
                  Careers
                </Link>
              </motion.div>
            </div>
            <motion.div variants={itemVariants}>
              <Button
                variant="default"
                className="font-semibold font-workSans text-[16px] py-[12px] px-[20px] h-[40px]"
                onClick={toggle}
              >
                Contact Support
              </Button>
            </motion.div>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
