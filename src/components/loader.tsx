import React from 'react';
import { Cpu, BrainCircuit as Circuit, Wifi } from 'lucide-react';

const Loader = () => {
  return (
    <div className="relative w-full h-full">
      {/* Hexagonal Grid Background */}
      <div className="absolute inset-0 opacity-20bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MCIgaGVpZ2h0PSI0MyI+PHBhdGggZD0iTTI1IDQzbC0yNS00M2g1MHoiIGZpbGw9IiMwMGZmMDAiLz48L3N2Zz4=')] bg-repeat animate-[pulse_4s_ease-in-out_infinite]" />
      
      {/* Main Loader Container */}
      <div className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-emerald-950 via-green-900 to-emerald-950">
        {/* Central Hexagon */}
        <div className="relative">
          <div className="w-40 h-40 relative">
            {/* Rotating Outer Ring */}
            <div className="absolute inset-0 animate-[spin_8s_linear_infinite]">
              {[...Array(6)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-2 h-2 bg-emerald-400 rounded-full"
                  style={{
                    transform: `rotate(${i * 60}deg) translateY(-72px)`,  // Fixed template literal syntax
                    boxShadow: '0 0 20px 2px rgba(52, 211, 153, 0.5)',
                    animation: `pulse 2s ease-in-out ${i * 0.3}s infinite`  // Fixed template literal syntax
                  }}
                />
              ))}
            </div>

            {/* Middle Ring with Icons */}
            <div className="absolute inset-0 animate-[spin_6s_linear_infinite_reverse]">
              <Cpu className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 text-emerald-400" />
              <Circuit className="absolute top-1/2 -right-4 -translate-y-1/2 w-8 h-8 text-emerald-400" />
              <Wifi className="absolute top-1/2 -left-4 -translate-y-1/2 w-8 h-8 text-emerald-400" />
              
            </div>

            {/* Central Hexagon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-24 h-24 bg-emerald-900/50 relative animate-[pulse_2s_ease-in-out_infinite]"
                   style={{
                     clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)',
                     boxShadow: '0 0 30px rgba(52, 211, 153, 0.3)'
                   }}>
                <div className="absolute inset-1 bg-emerald-400/20"
                     style={{
                       clipPath: 'polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%)'
                     }} />
              </div>
            </div>
          </div>

          {/* Data Stream Lines */}
          <div className="absolute inset-0">
            {[...Array(8)].map((_, i) => (
              <div
                key={i}
                className="absolute w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent opacity-50"
                style={{
                  transform: `rotate(${i * 45}deg)`,  // Fixed template literal syntax
                  animation: `streamLine 3s linear ${i * 0.5}s infinite`  // Fixed template literal syntax
                }}
              />
            ))}
          </div>
        </div>

        {/* Loading Text */}
        <div className="mt-16 text-center">
          <h2 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300 animate-pulse">
            Initializing Smart City
          </h2>
          <div className="flex gap-2 mt-4 justify-center">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="w-3 h-3 rounded-full bg-emerald-400"
                style={{
                  animation: `bounce 1s ease-in-out ${i * 0.2}s infinite`,
                  boxShadow: '0 0 10px rgba(52, 211, 153, 0.5)'
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loader;