import React from 'react';
import { ArrowRight, Target, Trophy, Zap } from 'lucide-react';

const Hero = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-red-50 via-white to-blue-50">
      <div className="absolute inset-0 bg-gradient-to-br from-red-500/10 to-blue-600/10"></div>
      
      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-red-500/20 rounded-full animate-pulse"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-blue-600/20 rounded-full animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-4 h-4 bg-red-500 rounded-full animate-ping"></div>
      <div className="absolute top-1/3 right-1/4 w-6 h-6 bg-blue-600 rounded-full animate-pulse"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="mb-8 flex justify-center space-x-4">
            <div className="bg-red-500/20 p-3 rounded-full animate-bounce">
              <Target className="w-8 h-8 text-red-500" />
            </div>
            <div className="bg-blue-600/20 p-3 rounded-full animate-bounce delay-100">
              <Trophy className="w-8 h-8 text-blue-600" />
            </div>
            <div className="bg-red-500/20 p-3 rounded-full animate-bounce delay-200">
              <Zap className="w-8 h-8 text-red-500" />
            </div>
          </div>

          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            <span className="bg-gradient-to-r from-red-500 via-red-600 to-blue-600 bg-clip-text text-transparent">
              LOVLINA BOXING ACADEMY
            </span>
            <br />
            <span className="text-gray-900">WHERE CHAMPIONS ARE MADE</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto font-medium">
            Founded by Olympic Bronze Medalist <span className="text-red-500 font-bold">Lovlina Borgohain</span>, 
            this academy empowers rural youth, nurtures raw talent, and creates champions for India’s future.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <button 
              onClick={scrollToContact}
              className="group bg-gradient-to-r from-red-500 to-red-600 text-white px-8 py-4 rounded-full text-lg font-bold hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex items-center space-x-2"
            >
              <span>JOIN US</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button 
              onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
              className="group border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center space-x-2"
            >
              <span>LEARN MORE</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
