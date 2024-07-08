import { useEffect, useState } from 'react';
import loadingScreenImage1 from './../../public/loading1.png';
import loadingScreenImage2 from './../../public/loading2.png';

const LoadingScreen = ({ onLoadingComplete }) => {
    const [opacity, setOpacity] = useState(0);
    const [currentImage, setCurrentImage] = useState(0);
    const images = [loadingScreenImage1, loadingScreenImage2];
  
    useEffect(() => {
      // Fade in
      const fadeInTimer = setTimeout(() => setOpacity(1), 100);
  
      // Switch to second image
      const switchImageTimer = setTimeout(() => setCurrentImage(1), 3000);
  
      // Fade out
      const fadeOutTimer = setTimeout(() => {
        setOpacity(0);
        setTimeout(onLoadingComplete, 1000); // Call onLoadingComplete after fade out
      }, 5000);
  
      return () => {
        clearTimeout(fadeInTimer);
        clearTimeout(switchImageTimer);
        clearTimeout(fadeOutTimer);
      };
    }, [onLoadingComplete]);
  
    return (
      <div className="loading-screen relative h-screen w-full overflow-hidden">
        <div className="spinner absolute z-10"></div>
        {images.map((src, index) => (
          <img 
            key={index}
            src={src} 
            alt={`Loading Screen ${index + 1}`} 
            className="absolute top-0 left-0 h-full w-full object-cover transition-opacity duration-1000 ease-in-out"
            style={{ 
              opacity: index === currentImage ? opacity : 0,
              zIndex: index === currentImage ? 1 : 0
            }}
          />
        ))}
      </div>
    );
  };

export default LoadingScreen;