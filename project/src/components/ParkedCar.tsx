import React, { useEffect, useState, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

const ParkedCar = () => {
  const containerRef = useRef(null);
  const [occupiedSpot, setOccupiedSpot] = useState(1);
  
  // Use the container as the scroll target
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });
  
  const springConfig = {
    stiffness: 100,
    damping: 20,
    restDelta: 0.001
  };

  // Define specific positions for each parking spot
  const parkingPositions = [10, 114, 218]; // Left position values for each parking spot

  // Transform scroll progress to car's x position with more precise positioning
  const carX = useSpring(
    useTransform(scrollYProgress, 
      [0, 0.4, 0.8, 1], 
      [parkingPositions[0], parkingPositions[1], parkingPositions[2], parkingPositions[2] + 20]
    ),
    springConfig
  );

  // More precise thresholds for color changes
  useEffect(() => {
    const unsubscribe = carX.onChange(value => {
      // Determine which spot is occupied based on car's actual position
      if (value < parkingPositions[0] + 45) {
        setOccupiedSpot(1);
      } else if (value < parkingPositions[1] + 45) {
        setOccupiedSpot(2);
      } else {
        setOccupiedSpot(3);
      }
    });
    
    return () => unsubscribe();
  }, [carX]);

  return (
    <div 
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-gray-100 p-4 rounded-lg flex flex-col justify-center items-center"
    >
      {/* <h2 className="text-xl font-bold mb-8">Smart Parking System</h2> */}
      
      <div className="relative w-full max-w-lg">
        {/* Parking spots */}
        <div className="flex justify-center items-center space-x-8 relative">
          {[1, 2, 3].map((index) => (
            <div 
              key={index} 
              className={`h-40 w-32 border-4 rounded-md flex items-center justify-center transition-colors duration-300 ${
                occupiedSpot === index ? 'border-red-500' : 'border-green-500'
              }`}
            >
              <div className="text-sm font-bold text-gray-500">
                P{index}
              </div>
            </div>
          ))}
          
          {/* Car positioned with absolute positioning */}
          <motion.div
            style={{ 
              x: carX,
              y: 0
            }}
            className="absolute top-1/2 transform -translate-y-1/2 left-0 w-24 h-20 z-10"
          >
            <svg 
              viewBox="0 0 100 70" 
              fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              className="w-full h-full"
            >
              <rect x="10" y="30" width="80" height="20" rx="5" fill="#3b82f6" />
              <rect x="20" y="10" width="50" height="25" rx="5" fill="#3b82f6" />
              <circle cx="25" cy="50" r="8" fill="#111827" />
              <circle cx="75" cy="50" r="8" fill="#111827" />
              <rect x="30" y="18" width="10" height="8" rx="1" fill="#a5f3fc" />
              <rect x="50" y="18" width="10" height="8" rx="1" fill="#a5f3fc" />
              <rect x="90" y="35" width="10" height="3" rx="1" fill="#ef4444" />
              <rect x="90" y="40" width="10" height="3" rx="1" fill="#ef4444" />
            </svg>
          </motion.div>
        </div>
      </div>
      
      <div className="mt-8 text-sm text-gray-500">
      </div>
    </div>
  );
};

export default ParkedCar;