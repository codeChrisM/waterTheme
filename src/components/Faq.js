import React from "react";
import { useState } from "react";
import AccordionItem from "../components/AccordianItem";
import { ChevronUpIcon } from "@heroicons/react/20/solid";
import faqData from "../data/faqData";
import whyUsData from "../data/whyUsData";

function Faq() {
  const [isAccordionVisible, setIsAccordionVisible] = useState(false);

  return (
    <div className="flex w-full justify-center items-center flex-col">
      <button
        onClick={() => setIsAccordionVisible(!isAccordionVisible)}
        className={`font-bold text-2xl p-4   flex rounded-t-lg  w-full   max-w-md text-center text-black ${
          isAccordionVisible ? "rounded-none " : "rounded-lg"
        }`}
      >
        Frequently Asked Questions
        <ChevronUpIcon
          className={`w-10   transition-all  flex duration-500 ease-in-out  text-lg ${
            isAccordionVisible ? "rotate-0" : "rotate-180"
          }`}
        />
      </button>
      <div
        className={`questions  ${isAccordionVisible ? " p-4" : "px-2"}`}
      >
        {faqData.map((item, index) => (
          <div className={`${isAccordionVisible ? "visible " : "hidden"}`}>
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          </div>
        ))}
        {whyUsData.map((item, index) => (
          <div className={`${isAccordionVisible ? "visible " : "hidden"}`}>
            <AccordionItem
              key={index}
              question={item.question}
              answer={item.answer}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
