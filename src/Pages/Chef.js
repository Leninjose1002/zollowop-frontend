import React, { useState } from "react";
import ChefRequirementForm from "./ChefRequirementForm";

const Chef = () => {
  const [showModal, setShowModal] = useState(false);
  const closeModal = () => setShowModal(false);

  return (
    <>
      <div className="bg-white py-12 px-4 sm:px-6 md:px-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Text Section */}
          <div className="text-center lg:text-left flex-1">
            <h1 className="text-2xl sm:text-3xl font-bold text-white">
              <span className=" bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:brightness-110 px-3 py-1 rounded-md inline-block">
                Chefs at Home – When You Need Them Most
              </span>
            </h1>
            <p className="text-base sm:text-lg text-black mt-4 sm:mt-6">
              From birthday parties to pujas – 5 Lakh+ happy customers in 20+ cities
            </p>
            <button
              onClick={() => setShowModal(true)}
              className="mt-5 sm:mt-6  bg-gradient-to-r from-blue-500 to-blue-700 text-white hover:brightness-110 text-sm font-semibold px-5 py-2 sm:px-6 sm:py-3 rounded-md shadow-md hover:shadow-lg transition"
            >
              Book Now
            </button>
          </div>

          {/* Images Section */}
          <div className="flex flex-wrap justify-center lg:justify-end gap-4 sm:gap-6 flex-1">
            <img
              src="https://img.freepik.com/premium-vector/curry-dishes_78118-131.jpg"
              alt="Chef 1"
              className="w-28 sm:w-36 md:w-44 object-contain"
            />
            <img
              src="https://img.freepik.com/premium-vector/drawing-chef-cooking-with-spoon-sauce_1087929-12556.jpg"
              alt="Chef 2"
              className="w-28 sm:w-36 md:w-44 object-contain"
            />
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 px-4">
          <div className="bg-white w-full max-w-2xl rounded-lg p-4 sm:p-6 relative shadow-lg overflow-y-auto max-h-[90vh]">
            <button
              onClick={closeModal}
              className="absolute top-3 right-3 text-2xl font-bold text-gray-500 hover:text-black"
            >
              &times;
            </button>
            <ChefRequirementForm closeModal={closeModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default Chef;
