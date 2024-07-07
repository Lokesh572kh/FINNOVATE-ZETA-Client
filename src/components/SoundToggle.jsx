// SoundToggle.jsx
import React, { useState } from 'react';
import { FaVolumeUp, FaVolumeMute } from 'react-icons/fa';

const SoundToggle = () => {
  const [speakerOn, setSpeakerOn] = useState(true);

  const toggleSpeaker = () => {
    setSpeakerOn(!speakerOn);
    // Implement your sound toggle functionality here
  };

  return (
    <div className="sound-toggle" onClick={toggleSpeaker}>
      {speakerOn ? <FaVolumeUp /> : <FaVolumeMute />}
    </div>
  );
};

export default SoundToggle;
