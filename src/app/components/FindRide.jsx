"use client";

import React, { useState } from "react";

const FindRide = () => {
  const [activeTab, setActiveTab] = useState("daily");

  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");


  const openModal=(type)=>{
     setModalType(type);
     setModalOpen(true);
  }

  const closeModal=()=>{
     setModalOpen(false);
     setModalType("");
  }

  return (
    <>
      <div className="w-[800px] border-1 bg-[rgba(0,0,0,0.13)] border-gray-300 rounded-xl flex justify-center mx-auto">
        <div className="flex my-6">
          <div className="flex-col">
            {["daily", "outstation", "rentals"].map((tab) => (
              <button
                key={tab}
                style={{ borderRadius: "10px" }}
                onClick={() => setActiveTab(tab)}
                className={`py-1 px-5 mx-8 capitalize cursor-pointer  ${
                  activeTab === tab
                    ? "bg-green-500 text-white font-semibold"
                    : "text-gray-400 hover:text-green-500"
                }`}
              >
                {tab}
              </button>
            ))}

            <div className="mt-10">
              {activeTab === "daily" && (
                <>
                  <div className="flex">
                    <button className="px-4 py-2 w-[80px] bg-[#3130304d] text-xs backdrop-blur-lg text-white rounded-l-md">
                      FROM
                    </button>
                    <input
                      type="text"
                      placeholder="Enter pickup location"
                      onClick={()=>openModal("from")}
                      className="px-4 py-2 w-100 border border-l-0 border-gray-800 rounded-r-md focus:outline-none focus:ring-2"
                    />
                  </div>
                  <div className="flex mt-5">
                    <button className="px-4 py-2 w-[80px] bg-[#3130304d] text-xs backdrop-blur-lg text-white rounded-l-md">
                      TO
                    </button>
                    <input
                      type="text"
                      placeholder="Enter pickup location"
                      onClick={()=>openModal("to")}
                      className="px-4 py-2 w-100 border border-l-0 border-gray-800 rounded-r-md focus:outline-none focus:ring-2"
                    />
                  </div>
                </>
              )}
              {activeTab === "outstation" && (
                <p>🛣️ Plan your **Outstation Trip**.</p>
              )}
              {activeTab === "rentals" && (
                <p>⏳ Rent a taxi with **Hourly Packages**.</p>
              )}
            </div>
          </div>
        </div>
      </div>
      {modalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-[rgba(0,0,0,0.5)] bg-opacity-50 backdrop-blur-sm">
          <div className="bg-white rounded-xl p-6 w-full max-w-md relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-black text-xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <h2 className="text-lg font-semibold mb-4">
              {modalType === "from" ? "Pickup Location" : "Drop Location"}
            </h2>
            <input
              type="text"
              placeholder={
                modalType === "from"
                  ? "Enter pickup location"
                  : "Enter drop location"
              }
              className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-500"
            />
            <button
              onClick={closeModal}
              className="mt-4 w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
            >
              Save & Close
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default FindRide;
