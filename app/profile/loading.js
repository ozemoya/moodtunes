'use client';
import React from 'react';
import Image from 'next/image';

const Loading = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-300 via-sky-200 to-blue-100 flex items-center justify-center">
      <div className="relative animate-float">
        <Image src="/Kumomi_logo.png" alt="Loading Logo" width={150} height={150} />
      </div>
      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
          100% {
            transform: translateY(0px);
          }
        }
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
};

export default Loading;