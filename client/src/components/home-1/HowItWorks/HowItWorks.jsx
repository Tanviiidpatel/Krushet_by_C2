import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  addYourCrop,
  connectWithBuyers,
  confirmAndSale,
} from "../../../assets/images";

const steps = [
  {
    img: addYourCrop,
    title: "Add Your Crops",
    description: "List your crops with images, descriptions, and pricing.",
  },
  {
    img: connectWithBuyers,
    title: "Connect with Buyers",
    description: "Find and connect directly with buyers for fresh produce.",
  },
  {
    img: confirmAndSale,
    title: "Confirm & Sell",
    description: "Receive orders, confirm transactions, and get paid.",
  },
  {
    img: connectWithBuyers,
    title: "Delivery Process",
    description: "Coordinate delivery or pickup for smooth order fulfillment.",
  },
  {
    img: connectWithBuyers,
    title: "Secure Payment",
    description: "Ensure safe and quick payments through verified gateways.",
  },
  {
    img: connectWithBuyers,
    title: "Customer Support",
    description: "Get 24/7 support for inquiries, orders, and transactions.",
  },
  {
    img: connectWithBuyers,
    title: "Investor Opportunities",
    description: "Partner with us and invest in the future of agriculture.",
  },
];

const HowItWorks = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section
      className={`transition-all duration-500 ease-in-out mx-auto my-16 px-5 py-12 text-center bg-[#caefcded] rounded-lg ${
        isHovered ? "w-[95%] gap-4" : "w-[85%] gap-3"
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Section Title */}
      <h2 className="text-4xl font-bold text-[#1b5e20] mb-7">How It Works?</h2>

      {/* Swiper Carousel */}
      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        spaceBetween={isHovered ? 0 : 3} // Adjust spacing dynamically
        slidesPerView={4} // Show 4 images at first
        loop={true}
        autoplay={{ delay: 1500, disableOnInteraction: false }} // Auto-swipe every 1.5 sec
        navigation
        pagination={{ clickable: true }}
        className="pb-10 transition-all duration-500 ease-in-out"
      >
        {steps.map((step, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="w-[370px] min-h-[450px] bg-white rounded-2xl p-6 shadow-lg flex flex-col hover:scale-105 transition-transform duration-300 cursor-pointer">
              {/* Image */}
              <img
                src={step.img}
                alt={step.title}
                className="w-full h-[250px] object-cover rounded-lg"
              />
              {/* Text Content */}
              <div className="flex flex-col items-center text-center mt-3">
                <h3 className="text-2xl font-semibold text-[#1b5e20]">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-lg px-3">{step.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HowItWorks;
