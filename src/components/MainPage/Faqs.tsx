import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Line from "./Line";

type Props = {};

const Faqs = (props: Props) => {
  return (
    <div className="bg-background2">
      <div className="container">
        <div>
          <div className="flex justify-center items-center gap-4 pt-8 p-6">
            <p className="text-3xl text-black">- Faqs -</p>
          </div>
          <div className="flex items-center justify-center">
            <p className=" text-4xl   p-5  pl-10">
              Question?
              <span className="text-green1"> Look here</span>
            </p>
          </div>
        </div>
        <div className="container">
          <div className="m-5 p-4">
            <div className="flex  m-2 p-2 justify-center items-center">
              <div
                className="w-full border hover:bg-bgGreen bg-white border-black   drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover rounded-lg px-5"
              >
                {" "}
                <Accordion className="" type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-2xl">
                      Is it accessible?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            <div className="flex m-2 p-2 justify-center items-center">
              <div
                className="w-full border hover:bg-bgGreen bg-white border-black   drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover rounded-lg px-5"
              >
                {" "}
                <Accordion className="" type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-2xl">
                      Is it accessible?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            <div className="flex  m-2 p-2 justify-center items-center">
              <div
                className="w-full border hover:bg-bgGreen bg-white border-black   drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover rounded-lg px-5"
              >
                {" "}
                <Accordion className="" type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-2xl">
                      Is it accessible?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            <div className="flex m-2 p-2 justify-center items-center">
              <div
                className="w-full border hover:bg-bgGreen bg-white border-black   drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover rounded-lg px-5"
              >
                {" "}
                <Accordion className="" type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-2xl">
                      Is it accessible?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
            <div className="flex m-2 p-2 justify-center items-center">
              <div
                className="w-full border hover:bg-bgGreen bg-white border-black   drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)]
                    object-cover rounded-lg px-5"
              >
                {" "}
                <Accordion className="" type="single" collapsible>
                  <AccordionItem value="item-1">
                    <AccordionTrigger className="text-2xl">
                      Is it accessible?
                    </AccordionTrigger>
                    <AccordionContent>
                      Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design pattern. Yes. It adheres to the WAI-ARIA design pattern.
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Line/>
    </div>
  );
};

export default Faqs;
