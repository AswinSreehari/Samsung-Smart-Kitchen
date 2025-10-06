import React from "react";
import { TiTick } from "react-icons/ti";

const ApplianceModal = ({ data, onClose }) => {

  console.log("data-->",data)
  if (!data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-start bg-transparent pointer-events-none">
       <div
        class="absolute left-[100px] top-[300px] w-[390px] min-h-[180px]
  bg-[linear-gradient(93.58deg,rgba(0,0,0,0.16)_9.43%,rgba(0,0,0,0.06)_86.58%)]
  shadow-[0_6px_24px_4px_rgba(0,0,0,0.08)]
  pointer-events-auto
  backdrop-blur-md"

      >
        {/* Title + Close */}
        <div className="flex items-start justify-between pt-5 pl-6 pr-6 pb-0">
          <div>
            <div className="font-bold text-lg text-black mb-1">{data.title}</div>
            <div className="text-[#222] text-sm mb-1 leading-tight">
              {data.subtitle}
            </div>
          </div>
          <button
            className="ml-2 mt-1 text-[18px] text-red-600 font-bold hover:text-red-700"
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
        <div className="pl-6 pb-2">
          {data.title === "BeSpoke Appliances" ? (
  <div className="flex items-start mt-2 mb-3 text-[15px]">
    <TiTick color="green" size={25} className="flex-shrink-0 mt-0.5 mr-2" />
    <span>
      Connect all your smart home appliances and devices into one simple-to-use app for a more efficient home.
    </span>
  </div>
) : (
  <ul className="mt-1 mb-3">
    {data.features.map((feature, idx) => (
      <li key={idx} className="flex items-center mb-1.5 text-[14px]">
        <TiTick color="green" size={25} />
        <span>{feature}</span>
      </li>
    ))}
  </ul>
)}

        </div>

        {/* Images */}
        <div className="flex px-5 pb-5">
          {data.images.map((imgSrc, idx) => (
            <img
              key={idx}
              src={imgSrc}
              alt={`${data.title} ${idx + 1}`}
              className="rounded-md bg-white border w-[62px] h-[52px] object-cover mr-3 last:mr-0 shadow"
              style={{ background: "white" }}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ApplianceModal;
