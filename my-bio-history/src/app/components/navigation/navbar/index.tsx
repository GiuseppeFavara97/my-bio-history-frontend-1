import React from "react";
import Link from "next/link";
import Logo from "./logo";
import Button from "./button";

type NavbarProps = {
  toggle: () => void;
};

const Navbar = ({ toggle }: NavbarProps) => {
  return (
    <div className="w-full h-20 bg-[#282c50] sticky top-0">
      <div className="container mx-auto px-4 h-full">
        <div className="flex justify-between items-center h-full">
          <Logo />
          <ul className="hidden md:flex gap-x-6 text-white">
            <li><Link href="/about"><p>About Us</p></Link></li>
            <li><Link href="/services"><p>Services</p></Link></li>
            <li><Link href="/contacts"><p>Contacts</p></Link></li>
            <li><Link href="/users"> <p>ProvacatturaDatiUsers</p></Link> </li>
            <li><Link href="/login"><p>Login</p></Link> </li> 
            <li><Link href="/profile"><p>Profilo</p></Link> </li>
          </ul>

          {/* Bottone mobile menu */}
          <button
            type="button"
            className="inline-flex items-center md:hidden"
            onClick={toggle}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 24 24">
              <path fill="#fff" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z" />
            </svg>
          </button>

          {/* Pulsante desktop */}
          <div className="hidden md:block">
            <Button>prova </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;