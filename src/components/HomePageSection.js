import React from 'react';
// import { Link, useNavigate } from 'react-router-dom';
import PrimaryButton from "./PrimaryButton";

const HomePageSection = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-[#F8FBFF] py-6 px-2 md:px-16">
      {/* FIRST ROW */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10">
        {/* Left Side: Image */}
        <div className="max-w-md w-full mx-auto">
          <img
            src="/images/homepage/service-provider-img.png"
            alt="Zollowup Service"
            className="w-full h-auto rounded-xl"
          />
        </div>

        {/* Right Side: Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FFB800] to-[#E91E63] text-transparent bg-clip-text font-heading leading-snug mb-4">
            Your One-Stop Solution for 
            <br />
                <span className=" italic text-accent"> Home Services</span>
           
          </h2>
          <p className="text-gray-600 text-base md:text-lg font-roboto mb-6">
            From cleaning to caregiving, Zollowup connects you with reliable, background-verified professionals right at your doorstep.
            <br /><br />
            We offer a wide range of services, including home cleaning, cooking assistance, elderly care, and more — all with flexible scheduling and upfront pricing.
            Our trained professionals ensure you get the best quality without the hassle.
          </p>
          <div className="mt-6">
            <PrimaryButton label="Explore Services" onClick={() => navigate('/services')} />
          </div>
        </div>
      </div>

      {/* SECOND ROW */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-10 mt-20 mb-20">
        {/* Left Side: Text Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-[#FFB800] to-[#E91E63] text-transparent bg-clip-text font-heading leading-snug mb-4">
            Trusted Experts for Every   <br />
                <span className=" italic text-accent"> Household Need</span>
          </h2>
          <p className="text-gray-600 text-base md:text-lg font-roboto mb-6">
            Whether it's plumbing, electrical work, appliance repair, or daily help — Zollowup brings skilled and background-verified professionals to your home with just a few clicks.
            <br /><br />
            Our team is committed to delivering timely and dependable services tailored to your lifestyle. With transparent pricing and quality assurance, Zollowup is redefining how urban India gets things done at home.
          </p>
          <div className="mt-6">
            <PrimaryButton label="Book Now" onClick={() => navigate('/contact')} />
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="max-w-md w-full mx-auto">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7O7cZlzhoXoBJtI4H7FnT33bmHFj7JYTLLVwmeux3qHeFpAQj-7Waj3kbek3QUMQA3n4&usqp=CAU"
            alt="Zollowup Professionals"
            className="w-full h-auto rounded-xl"
          />
        </div>
      </div>
    </section>
  );
};

export default HomePageSection;
