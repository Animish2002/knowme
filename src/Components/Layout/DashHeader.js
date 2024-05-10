import React, { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { ChevronDownIcon } from "@heroicons/react/20/solid";

const DashHeader = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white">
      <nav
        className="flex justify-between items-center p-6   mx-auto"
        aria-label="Global"
      >
        <div className="-m-1.5 p-1.5 flex items-center">
          <img
            className="h-8 w-auto ml-2" // Adjust margin as needed for spacing
            src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
            alt=""
          />
          <span className="text-3xl font-bold ml-4">Know Me</span>
        </div>
        <div className="flex">
          <h2 className="m-4 text-lg rounded-xl border-gray-700 px-5 py-1 bg-red-600 shadow-xl cursor-pointer">
            About Us
          </h2>
          <h2 className="m-4 text-lg rounded-xl border-gray-700 px-5 py-1 bg-green-600 shadow-xl cursor-pointer">
            Log Out
          </h2>
        </div>
      </nav>
    </header>
  );
};

export default DashHeader;
