import React from 'react';
import loadingScreenImage1 from './../../public/loading1.png';
// import loadingScreenImage2 from './path/to/image2.jpg';

const LoadingScreen = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-200">
      <div className="flex justify-center space-x-8">
        <img src={loadingScreenImage1} alt="Loading Screen 1" className="max-h-80" />
      </div>
    </div>
  );
};

export default LoadingScreen;
