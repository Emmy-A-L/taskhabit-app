import { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog } from "@headlessui/react";
// import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavbarProps {
  onLoginClick: () => void;
}

const Navbar = ({ onLoginClick }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="flex items-center gap-1 -m-1.5 p-1.5">
          <span className="bg-[#3dbe9e] px-3 py-1 rounded-2xl text-2xl font-black text-white">T</span>
            <span className="font-bold text-2xl text-[#3dbe9e]">TaskHabit</span>
          </Link>
        </div>

        {/* mobile nav */}
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            to="/tasks"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#3dbe9e] transition-colors"
          >
            Browse Tasks
          </Link>
          <Link
            to="/how-it-works"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#3dbe9e] transition-colors"
          >
            How it Works
          </Link>
          <Link
            to="/about"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-[#3dbe9e] transition-colors"
          >
            About Us
          </Link>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <button
            onClick={onLoginClick}
            className="text-sm font-semibold cursor-pointer leading-6 text-[#37ab8f] hover:text-[#3dbe9e] border border-[#3dbe9e] rounded-lg transition-colors px-6 py-0.5"
          >
            Log in
          </button>
          <Link
            to="/signup"
            className="rounded-lg bg-[#3dbe9e] px-4 py-2 cursor-pointer text-sm font-semibold text-white shadow-sm hover:bg-[#37ab8f] transition-colors"
          >
            Sign up
          </Link>
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="font-bold text-2xl text-[#3dbe9e]">TaskHabit</span>
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Link
                  to="/tasks"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Browse Tasks
                </Link>
                <Link
                  to="/how-it-works"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  How it Works
                </Link>
                <Link
                  to="/about"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  About Us
                </Link>
              </div>
              <div className="py-6">
                <button
                  onClick={onLoginClick}
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  Log in
                </button>
                <Link
                  to="/signup"
                  className="mt-2 -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-[#3dbe9e] hover:bg-[#37ab8f]"
                >
                  Sign up
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Navbar;