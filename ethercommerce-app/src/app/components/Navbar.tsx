import React from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function Navbar() {
  return (
    <nav className="bg-red-800 text-white">
      <div className="container mx-auto px-6 py-3 md:flex md:justify-between md:items-center">
        <div className="flex justify-between items-center">
          <div>
            <a className="text-3xl font-bold text-white lg:text-4xl" href="/">
              EC
            </a>
          </div>

          <div className="my-1 md:mx-6">
              <input className="bg-white rounded-md px-4 py-1 w-96 mx-8 text-black" type="text" placeholder="Search..." />
          </div>
          
        </div>
        

        <div className="md:flex items-center">
          <div className="flex flex-col md:flex-row md:mx-6">
            <a className="my-1 text-lg text-white hover:text-yellow-500 md:mx-4 md:my-6" href="/create">
              Create
            </a>
            <a className="my-1 text-lg text-white hover:text-yellow-500 md:mx-4 md:my-6" href="#">
              About
            </a>
            <a className="my-1 text-lg text-white hover:text-yellow-500 md:mx-4 md:my-6" href="#">
              Services
            </a>
            <a className="my-1 text-lg text-white hover:text-yellow-500 md:mx-4 md:my-6" href="#">
              Contact
            </a>
            <div className="my-1 text-lg text-white hover:text-yellow-500 md:mx-4 md:my-4">
              <ConnectButton/>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
