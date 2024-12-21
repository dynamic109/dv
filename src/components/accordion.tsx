import Image from "next/image";
import CircleTick from "../../public/images/circle-tick.svg";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function ServicesAccordion({ data }: any) {
  return (
    <Accordion type="single" collapsible className="w-full">
      {data.map((data: any, index: number) => (
        <AccordionItem key={index} value={data.title}>
          <AccordionTrigger>
            <div className="flex items-center gap-5 font-semibold font-ibmPlex text-[16px]">
              <Image src={CircleTick} alt="circular tick icon" />
              {data.title}
            </div>
          </AccordionTrigger>
          <AccordionContent className="font-ibmPlex text-[16px]">
            {data.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
