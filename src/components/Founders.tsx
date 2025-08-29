import React from "react";
import lovlinaImg from "../assets/lovlina.avif";
import joythismanimg from "../assets/joytishman.webp"
import coachimg from "../assets/coachimg.webp"

const Founders = () => {
  const founders = [
    {
      name: "Lovlina Borgohain",
      role: "Olympic Medalist",
      description:
        "Lovlina Borgohain is an Olympic Bronze medalist in boxing and a source of inspiration for our students.",
      image: lovlinaImg, // 👈 updated image
    },
    {
      name: "Sanjib Das",
      role: "Head Coach",
      description:
        "Sanjib Das is our Head Coach with over 15 years of boxing experience, guiding and shaping future champions.",
      image:
       coachimg, // you can replace with real photo later
    },
    {
      name: "Joytishman Lakhar",
      role: "Managing Director",
      description:
        "Joytishman Lakhar is a co-founder who works tirelessly to support and grow our academy with passion and dedication.",
      image:
        joythismanimg, // placeholder, can replace with actual
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-12">
          Meet Our Founders
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {founders.map((founder, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden transform hover:scale-105 transition duration-300"
            >
              <img
                src={founder.image}
                alt={founder.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800">
                  {founder.name}
                </h3>
                <p className="text-blue-600 font-medium">{founder.role}</p>
                <p className="mt-3 text-gray-600">{founder.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
