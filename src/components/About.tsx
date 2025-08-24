import React from 'react';
import { Users, Award, Flame } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Users className="w-8 h-8" />,
      title: "GRASSROOT DEVELOPMENT",
      description: "Affordable training programs starting at just ₹500/month to make boxing accessible to all youth of Assam.",
      color: "from-red-500 to-red-600"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "FOUNDED BY A CHAMPION",
      description: "Led by Olympic Bronze Medalist Lovlina Borgohain, who brings her vision and experience to inspire the next generation.",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: <Flame className="w-8 h-8" />,
      title: "VISION 2028",
      description: "Our mission is to produce international-level boxers by 2028, while transforming rural communities through sports.",
      color: "from-red-500 to-red-600"
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-to-br from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">
              ABOUT US
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Lovlina Boxing Academy, established on <span className="font-bold text-red-500">5th July 2025</span>, 
            is a grassroots initiative to nurture and empower youth through boxing in Assam. 
            With professional coaches, a fully equipped gym, and a strong vision, we aim to create champions from the remotest corners.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">
              A DREAM <span className="bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">TURNED REALITY</span>
            </h3>
            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
              Inspired by her Tokyo 2021 Olympic journey, Lovlina Borgohain founded the academy to give back to her community. 
              It is a platform for young athletes, especially from rural Assam, to access structured training and dream big.
            </p>
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              With a mission to train 150+ students by 2027 and encourage 60% female participation, 
              the academy is more than just a training center—it’s a movement to transform lives through sports.
            </p>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-1 bg-gradient-to-r from-red-500 to-blue-600 rounded-full"></div>
              <span className="text-2xl font-black text-gray-800">EST. 2025</span>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-r from-red-500/20 to-blue-600/20 rounded-3xl transform rotate-3"></div>
            <img 
              src="https://images.pexels.com/photos/4754146/pexels-photo-4754146.jpeg?auto=compress&cs=tinysrgb&w=800" 
              alt="Boxing Training" 
              className="relative rounded-3xl shadow-2xl w-full h-96 object-cover"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 border border-gray-100"
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.color} text-white rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300`}>
                {feature.icon}
              </div>
              <h4 className="text-xl font-bold text-gray-900 mb-4">{feature.title}</h4>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
