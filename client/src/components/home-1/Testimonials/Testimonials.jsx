import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const reviews = [
  {
    image: "/assets/images/cartoon_farmer1.webp",
    name: "Rajesh Patel",
    role: "🌾 Farmer",
    review: "Krushet has made selling my crops so easy! I get fair prices and direct access to buyers.",
  },
  {
    image: "/assets/images/cartoon_farmer2.webp",
    name: "Aisha Sharma",
    role: "👩‍🌾 Organic Farmer",
    review: "Finally, a platform that connects us directly to customers! No more middlemen taking huge cuts.",
  },
  {
    image: "/assets/images/cartoon_customer1.webp",
    name: "Vikram Singh",
    role: "🏪 Wholesale Buyer",
    review: "Fresh produce at great prices! The platform makes bulk purchasing hassle-free.",
  },
  {
    image: "/assets/images/cartoon_customer2.webp",
    name: "Sonia Mehta",
    role: "🥗 Restaurant Owner",
    review: "I can now source organic ingredients directly from farmers, improving the quality of my dishes.",
  },
  {
    image: "/assets/images/cartoon_investor1.webp",
    name: "Amit Khanna",
    role: "💰 Angel Investor",
    review: "Investing in Krushet was an easy decision. The platform is solving real-world agricultural challenges.",
  },
];

const Testimonials = () => {
  return (
    <section className="max-w-6xl mx-auto px-6 py-16 text-center bg-[#f6e58d] rounded-lg">
      <h2 className="text-4xl font-bold text-gray-900 mb-10">
        What Our <span className="text-green-700">Users Say</span> 🌟
      </h2>

      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 2000, disableOnInteraction: false }}
        breakpoints={{
          640: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {reviews.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-xl flex flex-col items-center shadow-lg transition-transform duration-300 hover:scale-105">
              <img
                src={item.image}
                alt={item.name}
                className="w-20 h-20 rounded-full object-cover border-4 border-green-500"
              />
              <div className="text-center mt-4">
                <h3 className="text-xl font-semibold text-green-700">{item.name}</h3>
                <p className="text-gray-500 text-md italic">{item.role}</p>
                <p className="text-gray-700 text-lg mt-3">" {item.review} "</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
