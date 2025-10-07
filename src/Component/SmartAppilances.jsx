import React from "react";
import Refrigerator from "../assets/product1.jpg";
import jetRobot from "../assets/product2.jpg";
import WashingMachine from "../assets/product3.jpg";
import Oven from "../assets/product4.jpg";
import { Link } from "react-router-dom";

export default function SmartAppliances() {
  return (
    <div className="flex flex-col items-center justify-center h-100vh min-h-screen bg-white pb-16">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold mb-12 text-center">
        Samsung Smart Appliances
      </h2>

      {/* Appliance cards */}
      <div className="flex flex-wrap gap-14 justify-center">
        {/* Refrigerator (highlighted) */}
        <div className="flex flex-col items-center group">
          <div className="hover:border-2 hover:border-green-400 rounded-lg cursor-pointer p-6 mb-3 transition-shadow duration-200 shadow hover:shadow-lg">
            <img
              src={Refrigerator}
              alt="Refrigerator"
              className="h-40 w-28 object-contain mx-auto"
            />
          </div>
          <p className="font-bold text-lg mb-1 text-center">Refrigerator</p>
          <p className="text-gray-600 text-sm text-center leading-snug invisible group-hover:visible">
            615L Convertible 5-in-1<br />
            Refrigerator.
          </p>
        </div>

        {/* Jet Robot */}
        <div className="flex flex-col items-center group cursor-pointer">
          <div className="hover:border-2 hover:border-green-400  rounded-lg p-6 mb-3 transition-shadow duration-200 shadow hover:shadow-lg">
            <img
              src={jetRobot}
              alt="Jet Robot"
              className="h-40 w-28 object-contain mx-auto"
            />
          </div>
          <p className="font-bold text-lg text-center">Jet Robot</p>
          <p className="text-gray-600 text-sm text-center leading-snug invisible group-hover:visible">
            Bespoke AI Vaccum cleaner 
           </p>
        </div>

        {/* Oven */}
        <div className="flex flex-col items-center group cursor-pointer">
          <div className="hover:border-2 hover:border-green-400 rounded-lg p-6 mb-3 transition-shadow duration-200 shadow hover:shadow-lg">
            <img
              src={Oven}
              alt="Oven"
              className="h-40 w-28 object-contain mx-auto"
            />
          </div>
          <p className="font-bold text-lg text-center">Oven</p>
          <p className="text-gray-600 text-sm text-center leading-snug invisible group-hover:visible">
            28L Convection Microwave Oven 
           </p>
        </div>

        {/* Washing Machine */}
        <div className="flex flex-col items-center group cursor-pointer">
          <div className="hover:border-2 hover:border-green-400 rounded-lg p-6 mb-3 transition-shadow duration-200 shadow hover:shadow-lg">
            <img
              src={WashingMachine}
              alt="Washing Machine"
              className="h-40 w-28 object-contain mx-auto"
            />
          </div>
          <p className="font-bold text-lg text-center">Washing Machine</p>
          <p className="text-gray-600 text-sm text-center leading-snug invisible group-hover:visible">
             9Kg AI Eco bubble Front Load machine
           </p>
        </div>
      </div>

      {/* Explore 3D Kitchen Button */}
      <Link
      to= "/3d-explore"
      className="mt-12 flex items-center gap-2 px-7 py-3 rounded-full bg-green-500 text-white font-semibold text-lg shadow hover:bg-green-600 transition-all">
        {/* <svg width="22" height="22" fill="none" className="mr-1">
          <rect x="2" y="6" width="18" height="11" rx="2" fill="#fff" />
          <rect
            x="2"
            y="6"
            width="18"
            height="11"
            rx="2"
            stroke="#0CCB79"
            strokeWidth="2"
          />
          <path
            d="M9 12l2 2 2-2"
            stroke="#0CCB79"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg> */}
        Explore 3D Kitchen
      </Link>
    </div>
  );
}
