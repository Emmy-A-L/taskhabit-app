import { useState } from "react";
import { Link } from "react-router-dom";
import { Dialog } from "@headlessui/react";
// import { motion } from "framer-motion";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";

interface NavbarProps {
  onLoginClick: () => void;
}

export default function Navbar({ onLoginClick }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Link to="/" className="-m-1.5 p-1.5">
            <span className="font-bold text-2xl text-primary">TaskHabit</span>
          </Link>
        </div>

        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>

        <div className="hidden lg:flex lg:gap-x-12">
          <Link
            to="/tasks"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors"
          >
            Browse Tasks
          </Link>
          <Link
            to="/how-it-works"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors"
          >
            How it Works
          </Link>
          <Link
            to="/about"
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors"
          >
            About Us
          </Link>
        </div>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:gap-x-4">
          <button
            onClick={onLoginClick}
            className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors"
          >
            Log in
          </button>
          <Link
            to="/signup"
            className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm hover:bg-primary-hover transition-colors"
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
              <span className="font-bold text-2xl text-primary">TaskHabit</span>
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
                  className="mt-2 -mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-white bg-primary hover:bg-primary-hover"
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
