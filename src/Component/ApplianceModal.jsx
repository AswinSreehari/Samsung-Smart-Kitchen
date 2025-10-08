import React from "react";
import { TiTick } from "react-icons/ti";

const ApplianceModal = ({ data, onClose }) => {
  if (!data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center sm:justify-start bg-transparent pointer-events-none">
      {/* Responsive container: width, position, and spacing */}
      <div
        className={`
          absolute
          left-1/2 sm:left-[100px] top-7 sm:top-[90px] 
          transform -translate-x-1/2 sm:translate-x-0
          w-[96vw] max-w-[390px] sm:w-[390px]
          min-h-[180px] sm:min-h-[180px]  
          bg-[linear-gradient(93.58deg,rgba(0,0,0,0.16)_9.43%,rgba(0,0,0,0.06)_86.58%)]
          shadow-[0_6px_24px_4px_rgba(0,0,0,0.08)]
          pointer-events-auto
          backdrop-blur-md
          rounded-lg
          sm:rounded-xl
        `}
      >
        {/* Title + Close */}
        <div className="flex items-start justify-between pt-4 sm:pt-5 pl-4 sm:pl-6 pr-4 sm:pr-6 pb-0">
          <div>
            <div className="font-bold text-base sm:text-lg text-black mb-1">
              {data.title}
            </div>
            <div className="text-[#222] text-xs sm:text-sm mb-1 leading-tight">
              {data.subtitle}
            </div>
          </div>
          <button
            className="ml-2 mt-1 text-base sm:text-[18px] text-red-600 font-bold hover:text-red-700"
            onClick={onClose}
            aria-label="Close"
            style={{
              lineHeight: "1",
              height: "24px",
              width: "24px",
              textAlign: "center"
            }}
          >
            ×
          </button>
        </div>

        {/* Features */}
        <div className="pl-4 sm:pl-6 pb-2">
          {data.title === "BeSpoke Appliances" ? (
            <div className="flex items-start mt-2 mb-3 text-xs sm:text-[15px]">
              <TiTick color="green" size={20} className="flex-shrink-0 mt-0.5 mr-2" />
              <span>
                {data.features[0]}
              </span>
            </div>
          ) : (
            <ul className="mt-1 mb-3">
              {data.features.map((feature, idx) => (
                <li key={idx} className="flex items-center mb-1.5 text-xs sm:text-[14px]">
                  <TiTick color="green" size={20} className="mr-2" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          )}
        </div>

        {/* Images (responsive grid) */}
        <div className="flex flex-wrap justify-between px-2 sm:px-5 pb-5 gap-2 sm:gap-3">
          {data.images.map((imgSrc, idx) => (
            <img
              key={idx}
              src={imgSrc}
              alt={`${data.title} ${idx + 1}`}
              className="rounded-md bg-white border w-[46px] h-[38px] sm:w-[62px] sm:h-[52px] object-cover shadow"
              style={{ background: "white" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplianceModal;
