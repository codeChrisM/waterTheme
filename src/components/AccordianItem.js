import * as React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

const AccordionItem = ({ question, answer }) => {
  return (
    <div className="mx-4   rounded-md bg-gold">
      <Disclosure className="">
        {({ open }) => (
          <div className="">
            <Disclosure.Button className=" flex w-full justify-between  bg-purple-100 px-4 py-2 text-left text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring focus-visible:ring-purple-500 focus-visible:ring-opacity-75 border-b-2 ">
              <span>{question}</span>
              <ChevronUpIcon
                className={`transition-all duration-500 ease-in-out text-black text-lg  ${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-purple-500`}
              />
            </Disclosure.Button>
            <Transition
              show={open}
              className="overflow-hidden"
              enter="transition transition-[max-height] duration-200 ease-in"
              enterFrom="transform max-h-0"
              enterTo="transform max-h-screen"
              leave="transition transition-[max-height] duration-400 ease-out"
              leaveFrom="transform max-h-screen"
              leaveTo="transform max-h-0"
            >
              <Disclosure.Panel className="   px-4 pt-4 pb-2    bg-white border-2 text-xs border-blue">
                {answer}
              </Disclosure.Panel>
            </Transition>
          </div>
        )}
      </Disclosure>
    </div>
  );
};

export default AccordionItem;
