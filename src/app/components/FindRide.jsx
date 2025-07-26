"use client";

import axios from "axios";
import React, { useState } from "react";

const FindRide = () => {
  const [activeTab, setActiveTab] = useState("daily");

  const [modalOpen, setModalOpen] = useState(false);
  const [modalType, setModalType] = useState("");

  const [pickup, setPickup] = useState("");
  const [pickupSuggestions, setPickupSuggestions] = useState([]);

  const [drop, setDrop] = useState("");
  const [dropSuggestions, setDropSuggestions] = useState([]);

  const handleSearch = async (query, setSuggestions) => {
    if (!query) return setSuggestions([]);

    try {
      const res = await axios.get(
        `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodeURIComponent(
          query
        )}.json`,
        {
          params: {
            access_token: 'pk.eyJ1Ijoib3JnYW5pemUtMjYiLCJhIjoiY21kanprNnM1MHF4ZzJrc2Q4eTJhZHR2dyJ9.3EwYhqzi4Kc582EuLnb5Zw',
            autocomplete: true,
            limit: 5,
            country: "IN",
          },
        }
      );
      setSuggestions(res.data.features);
      console.log(query);
      
      console.log(res.data.features);
    } catch (error) {
      console.error("Error fetching Mapbox suggestions:", error);
    }
  };

  const handleSelect = (place, setInput, setSuggestions) => {
    setInput(place.place_name);
    setSuggestions([]);
  };

  const openModal = (type) => {
    setModalType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setModalType("");
  };

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
                    <button className="px-4 py-3 w-[80px] bg-[#3130304d] text-xs backdrop-blur-lg text-white rounded-l-md">
                      FROM
                    </button>
                    <button
                      className="px-4 py-3 w-100 bg-[#3130304d] text-[14px] backdrop-blur-lg text-white rounded-r-md cursor-pointer"
                      onClick={() => openModal("from")}
                    >
                      Enter Pickup location
                    </button>
                  </div>
                  <div className="flex mt-5">
                    <button className="px-4 py-2 w-[80px] bg-[#3130304d] text-xs backdrop-blur-lg text-white rounded-l-md">
                      TO
                    </button>
                    <button
                      className="px-4 py-3 w-100 bg-[#3130304d] text-[14px] backdrop-blur-lg text-white rounded-r-md cursor-pointer"
                      onClick={() => openModal("to")}
                    >
                      Enter drop location
                    </button>
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
          <div className="bg-[rgba(35,35,35,1)] rounded-xl p-6 w-full max-w-3xl relative">
            <button
              className="absolute top-2 right-2 text-gray-600 hover:text-white cursor-pointer text-xl"
              onClick={closeModal}
            >
              <i className="bx bx-x text-3xl"></i>
            </button>
            <h2 className="text-lg font-semibold mb-4">
              {modalType === "from" ? "Pickup Location" : "Drop Location"}
            </h2>
            <div className="flex relative">
              <button className="px-4 py-2 w-[50px] bg-[#3130304d] text-xs backdrop-blur-lg border border-r-0  border-gray-300 text-white rounded-l-md">
                <i className="bx bx-search text-xl"></i>
              </button>
              <input
                type="text"
                placeholder="Enter Address"
                value={modalType === "from" ? pickup : drop}
                onChange={(e) => {
                  const value = e.target.value;
                  if (modalType === "from") {
                    setPickup(value);
                    handleSearch(value, setPickupSuggestions);
                  } else {
                    setDrop(value);
                    handleSearch(value, setDropSuggestions);
                  }
                }}
                className="px-4 py-2 w-full border border-l-0 text-[14px] border-gray-300 rounded-r-md focus:outline-none focus:ring-1"
              />

              {(modalType === "from" ? pickupSuggestions : dropSuggestions)
                .length > 0 && (
                <div className="absolute z-40 top-full left-12 right-0 bg-[rgba(35,35,35,1)] shadow-md rounded-md mt-1 max-h-[200px] overflow-y-auto">
                  {modalType === "from"
                    ? pickupSuggestions
                    : dropSuggestions.map((place, index) => (
                        <div
                          key={index}
                          onClick={() =>
                            modalType === "from"
                              ? handleSelect(
                                  place,
                                  setPickup,
                                  setPickupSuggestions
                                )
                              : handleSelect(place, setDrop, setDropSuggestions)
                          }
                          className="px-4 py-2 cursor-pointer hover:bg-gray-100 text-sm text-black"
                        >
                          {place.place_name}
                        </div>
                      ))}
                </div>
              )}
            </div>
            {modalType === "from" && (
              <div className="flex mt-5 cursor-pointer">
                <button className="px-4 py-2 w-[50px] bg-[#3130304d] text-xs backdrop-blur-lg border border-r-0  border-gray-300 text-white rounded-l-md">
                  <i className="bx bx-target-lock text-xl"></i>
                </button>
                <button className="px-4 py-2 w-full text-[14px] border border-l-0 border-r-0 border-gray-300 rounded-r-0 flex justify-start cursor-pointer">
                  Current Location
                </button>
                <button className="px-4 py-2 w-[50px]  border border-gray-300 border-l-0 rounded-r-md">
                  <span className="text-xs">MAP</span>
                </button>
              </div>
            )}

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
