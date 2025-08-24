import React from 'react';
import { Target, Trophy, Zap } from 'lucide-react';

const Founders = () => {
  const founders = [
    {
      name: "Lovlina Borgohain",
      title: "Founder & Olympic Bronze Medalist",
      description: "Olympic Bronze Medalist (Tokyo 2021) and the driving force behind the academy, committed to nurturing grassroots boxing talent in Assam.",
      achievements: ["Olympic Bronze Medalist", "Padma Shri Awardee", "Arjuna Awardee"],
      image: "https://images.pexels.com/photos/4754103/pexels-photo-4754103.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-red-500 to-red-600"
    },
    {
      name: "Tiken Borgohain",
      title: "Board of Directors",
      description: "Plays a key leadership role in guiding the academy’s strategic direction and community involvement.",
      achievements: ["Community Leader", "Sports Promoter"],
      image: "https://images.pexels.com/photos/4754011/pexels-photo-4754011.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-blue-500 to-blue-600"
    },
    {
      name: "Mamoni Borgohain",
      title: "Treasurer",
      description: "Responsible for managing finances, ensuring sustainability, and supporting student scholarships.",
      achievements: ["Treasurer of the Academy", "Community Development Contributor"],
      image: "https://images.pexels.com/photos/4754136/pexels-photo-4754136.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-red-500 to-red-600"
    },
    {
      name: "Jyotishman Lahkar",
      title: "Manager",
      description: "Oversees academy operations, manages events, and ensures smooth coordination among coaches and trainees.",
      achievements: ["Event Coordinator", "Youth Mentor"],
      image: "https://images.pexels.com/photos/4754089/pexels-photo-4754089.jpeg?auto=compress&cs=tinysrgb&w=800",
      gradient: "from-blue-500 to-blue-600"
    }
  ];

  return (
    <section id="founders" className="py-20 bg-gradient-to-br from-red-50 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            <span className="bg-gradient-to-r from-red-500 to-blue-600 bg-clip-text text-transparent">
              OUR TEAM
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Meet the dedicated individuals behind Lovlina Boxing Academy, working together to transform rural youth into champions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {founders.map((founder, index) => (
            <div 
              key={index}
              className="group bg-white rounded-3xl shadow-2xl overflow-hidden hover:shadow-3xl transition-all duration-500 transform hover:scale-105"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={founder.image} 
                  alt={founder.name}
                  className="w-full h-80 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-t ${founder.gradient}/20 to-transparent`}></div>
                <div className="absolute top-4 right-4">
                  <div className={`bg-gradient-to-r ${founder.gradient} p-3 rounded-full`}>
                    {index === 0 ? <Trophy className="w-6 h-6 text-white" /> : <Zap className="w-6 h-6 text-white" />}
                  </div>
                </div>
              </div>
              
              <div className="p-8">
                <h3 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
                  {founder.name}
                </h3>
                <div className={`text-lg font-bold bg-gradient-to-r ${founder.gradient} bg-clip-text text-transparent mb-4`}>
                  {founder.title}
                </div>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {founder.description}
                </p>
                
                <div className="space-y-2">
                  <h4 className="font-bold text-gray-900 mb-3">KEY ACHIEVEMENTS:</h4>
                  {founder.achievements.map((achievement, i) => (
                    <div key={i} className="flex items-center space-x-3">
                      <Target className="w-4 h-4 text-red-500" />
                      <span className="text-gray-700 font-medium">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Founders;
