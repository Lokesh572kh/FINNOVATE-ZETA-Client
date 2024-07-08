import React, { useState } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const SoundToggle = ({ text }) => {
  const [speakerOn, setSpeakerOn] = useState(true);

  const toggleSpeaker = () => {
    setSpeakerOn(!speakerOn);
    if (!speakerOn) {
      speakText(text);
    }
  };

  const speakText = (text) => {
    if ('speechSynthesis' in window) {
      const speechMsg = new SpeechSynthesisUtterance(text);
      speechMsg.lang = 'hi-IN'; // Set Indian English accent

      window.speechSynthesis.speak(speechMsg);
    } else {
      console.log('Speech synthesis not supported');
    }
  };

  return (
    <div
      className="p-3 rounded-full fixed text-[30px] m-10 bottom-0 z-50 bg-primary text-white cursor-pointer"
      onClick={toggleSpeaker}
    >
      {speakerOn ? <FaVolumeUp /> : <FaVolumeMute />}
    </div>
  );
};

export default SoundToggle;
