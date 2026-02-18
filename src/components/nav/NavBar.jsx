import React, { useState } from "react";
import Buttons from "../Buttons";
import { Dropdown, DropdownItem } from "./Dropdown";
import GoogleTranslateSwitcher from "../GoogleTranslateSwitcher";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import Logo from "../Logo";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-black text-white shadow-md sticky top-0 z-50  py-3">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo - always visible, left aligned */}
          <div className="shrink-0 flex gap-10">
            <Link to="/" className="text-2xl font-bold text-gray-800">
              <Logo />
            </Link>

            {/* Desktop Navigation - hidden on mobile */}
            <div className="hidden md:flex items-center">

              {/* Dropdown Usage Example */}
              <Dropdown trigger="Products">
                <DropdownItem onClick={() => console.log("About Us")}>
                  <Link to="/about">About Us</Link>
                </DropdownItem>
                <DropdownItem onClick={() => console.log("Contact Us clicked")}>
                  <Link to="/contact">Contact Us</Link>
                </DropdownItem>
                <DropdownItem onClick={() => console.log("FAQ's")}>
                  <Link to="faqs">FAQ's</Link>
                </DropdownItem>
              </Dropdown>
              {/* Dropdown Usage Example */}

              <Link to="/market" className="hover:text-primary px-3 py-2 rounded-md text-sm">
                Market
              </Link>
              <Link to="/plans" className="hover:text-primary px-3 py-2 rounded-md text-sm">
                Plans
              </Link>
              <Link to="/services" className="hover:text-primary px-3 py-2 rounded-md text-sm">
                Our Services
              </Link>
              <Link to="/buy/sell" className="hover:text-primary px-3 py-2 rounded-md text-sm">
                Buy/Sell
              </Link>
              <Link to="/legal" className="hover:text-primary px-3 py-2 rounded-md text-sm">
                Legal
              </Link>
              <Link to="/account" className="hover:text-primary px-3 py-2 rounded-md text-sm">
                uAccount
              </Link>
              <Link to="/deposit" className="hover:text-primary px-3 py-2 rounded-md text-sm">
                uDeposit
              </Link>
              <Link to="/confirm-deposit" className="hover:text-primary px-3 py-2 rounded-md text-sm">
                uConfirm deposit
              </Link>
            </div>
          </div>

          {/* Buttons and Google Translate Switcher */}
          <div className="hidden md:flex space-x-4 items-center">
            <GoogleTranslateSwitcher />
            <Link to="/login">
              <Buttons btnTitle="Login" withArrow={true} />
            </Link>
            <Link to="/register">
              <Buttons btnTitle="Sign up" btnStyles="bg-primary shadow-lg" withArrow={true} />
            </Link>
          </div>



          {/* Mobile Hamburger - right aligned */}
          <div className="md:hidden flex items-center gap-4">
            <GoogleTranslateSwitcher />
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-300 hover:text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Panel - slides down when hamburger clicked */}
      <div className={`md:hidden absolute w-full ${isOpen ? "block" : "hidden"}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-gray-400 border-t" onClick={toggleMenu}>
          <Link
            href="/"
            className="block hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium">
            Comapany
          </Link>
          <Link
            to="/about"
            className="block hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium">
            Markets
          </Link>
          <Link
            to="/services"
            className="block hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium">
            Plans
          </Link>
          <Link
            to="/contact"
            className="block hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium">
            Our Services
          </Link>
          <Link
            to="/contact"
            className="block hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium">
            Buy/Sell
          </Link>
          <Link
            to="/contact"
            className="block hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium">
            Legal
          </Link>
          <Link
            to="/login"
            className="block hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium">
            Login
          </Link>
          <Link
            to="/register"
            className="block hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium">
            Sign up
          </Link>
          <Link to="/account" className="block hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium">
            uAccount
          </Link>
          <Link to="/deposit" className="block hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium">
            uDeposit
          </Link>
          <Link to="/confirm-deposit" className="block hover:bg-gray-50 px-3 py-2 rounded-md text-base font-medium">
            uConfirm deposit
          </Link>
        </div>
      </div>
    </nav>
  );
};
