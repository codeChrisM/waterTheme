import * as React from "react";
import { Disclosure, Transition } from "@headlessui/react";
import { Transition } from "@headlessui/react";
import { ChevronUpIcon } from "@heroicons/react/20/solid";

// TODO: fix always not open toggle
const AccordionItem = ({ question, answer }) => {
  return (
    <div className="mx-4   rounded-md ">
      {/* TODO: set accordion to automaticall close toggle */}
      <Disclosure className="bg-white m-1">
        {({ open }) => (
          <div className="">
            <Disclosure.Button className="toggle flex w-full justify-between  bg-white-100 px-4 py-2 text-left text-sm font-medium text-white-900 hover:bg-white-200 focus:outline-none focus-visible:ring focus-visible:ring-white-500 focus-visible:ring-opacity-75 border-b-2 ">
              <span>{question}</span>
              <ChevronUpIcon
                className={`transition-all duration-500 ease-in-out text-lg  ${
                  open ? "rotate-180 transform" : ""
                } h-5 w-5 text-white-500`}
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
              <Disclosure.Panel className="   px-4 pt-4 pb-2    bg-gray-200 border-2 text-xs ">
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

// TODO move all accordian to faq
