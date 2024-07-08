import SideBar from '../SideBar';
import { useState, useEffect, useRef } from 'react';

function Children_Module_1() {
  const allImages = [
    './../../../../public/c1.png',
    './../../../../public/c2.png',
    './../../../../public/c3.png',
    './../../../../public/c4.png',
    './../../../../public/c5.png',
    './../../../../public/c6.png',
    './../../../../public/c7.png',
    './../../../../public/c8.png',
    './../../../../public/c9.png',
    './../../../../public/c9.1.png', // New image
    './../../../../public/c10.png',
    './../../../../public/c11.png',
    './../../../../public/c12.png',
    './../../../../public/r8.png'
  ];

  const [batchIndex, setBatchIndex] = useState(0);
  const imageBatches = [
    allImages.slice(0, 3),  // Batch 1: c1, c2, c3
    allImages.slice(3, 5),  // Batch 2: c4, c5
    [allImages[5]],         // Batch 3: c6
    [allImages[6]],         // Batch 4: c7
    allImages.slice(7, 9),  // Batch 5: c8, c9
    [allImages[9]],         // Batch 5.1: c9.1
    [allImages[10]],        // Batch 6: c10
    allImages.slice(11, 13),// Batch 7: c11, c12
    [allImages[13]]         // Batch 8: r8
  ];

  const dialogs = [
    "Suppose you want to buy banana",
    "You have Rice",
    "This is called Barter System",
    "Now again want to buy banana",
    "But this time Vendor asks for Shoes",
    "You both didn't agree", // New dialog for Batch 5.1
    "Now again want to buy banana",
    "But this time you have a thing called currency",
    "A currency is a standardization of money in any form, in use or circulation as a medium of exchange"
  ];

  const [dialog, setDialog] = useState(dialogs[0]);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [displayedImages, setDisplayedImages] = useState(imageBatches[0]);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setCurrentImageIndex(prevIndex => {
        if (prevIndex + 1 === displayedImages.length) {
          clearInterval(intervalRef.current);
          return prevIndex;
        }
        return prevIndex + 1;
      });
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(intervalRef.current);
  }, [displayedImages]);

  const handleNextButtonClick = () => {
    const nextBatchIndex = (batchIndex + 1) % imageBatches.length;
    setBatchIndex(nextBatchIndex);
    setDisplayedImages(imageBatches[nextBatchIndex]);
    setCurrentImageIndex(0); // Reset to the first image of the new set
    setDialog(dialogs[nextBatchIndex]);

    clearInterval(intervalRef.current);
    if (imageBatches[nextBatchIndex].length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex(prevIndex => {
          if (prevIndex + 1 === imageBatches[nextBatchIndex].length) {
            clearInterval(intervalRef.current);
            return prevIndex;
          }
          return prevIndex + 1;
        });
      }, 3000); // Change image every 3 seconds
    }
  };

  return (
    <SideBar>
      <div className='flex flex-col p-2 gap-10'>
        <div className='font-poppins text-5xl font-bold text-center'>
          Hi! I'm Money Kumar
        </div>
        <div className='flex justify-center items-center h-full'>
          <img src="./../../../../public/rbi.png" alt="Logo" className='h-4/6 w-4/6 object-contain' />
        </div>
        <div className='font-poppins text-5xl font-bold text-center'>
          Let's play a game
        </div>
        <div className='flex justify-center items-center h-full'>
          <img src={displayedImages[currentImageIndex]} alt="Game Slide" className='h-4/6 w-4/6 object-contain' />
        </div>
        <div className='font-poppins text-2xl text-center'>
          {dialog}
        </div>
        <div className='flex justify-center'>
          <button onClick={handleNextButtonClick} className="text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800 w-2/6 text-center">
            Next
          </button>
        </div>
      </div>
    </SideBar>
  );
}

export default Children_Module_1;