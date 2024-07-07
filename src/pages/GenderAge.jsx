import React, { useState, useEffect } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import backgroundImage from '../assets/images.jpg'; // Adjust path to your image file

const GenderAge = () => {
  const [audioData, setAudioData] = useState(null);
  const { transcript, resetTranscript } = useSpeechRecognition();

  useEffect(() => {
    speakTranscript("AAPKA LING AUR UMAR KYA HAI");
  }, [1]); // Empty dependency array ensures this effect runs only once on mount

  const startRecording = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopRecording = () => {
    SpeechRecognition.stopListening();
    setAudioData(transcript);
    speakTranscript(transcript); // Speak the transcript after stopping recording
  };

  const handleSubmit = () => {
    // Simulate saving to database
    console.log('Saving to database:', audioData);
    // Here you would typically send `audioData` to your backend for storage
    resetTranscript();
    setAudioData(null);
  };

  const speakTranscript = (text) => {
    if ('speechSynthesis' in window) {
      const speechMsg = new SpeechSynthesisUtterance(text);
      
      // Set the language to Hindi (India)
      speechMsg.lang = 'hi-IN';
      
      // Optionally, you can set other properties such as voice and rate
      // Example:
      // speechMsg.voice = speechSynthesis.getVoices().find(voice => voice.lang === 'hi-IN');
      // speechMsg.rate = 0.9; // Adjust speech rate as needed

      speechSynthesis.speak(speechMsg);
    } else {
      alert('Text-to-speech is not supported in this browser.');
    }
  };

  const handleReset = () => {
    resetTranscript();
    setAudioData(null);
  };

  return (
    <div
      className="audio-recorder min-h-screen flex flex-col items-center justify-center text-white"
      style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover' }}
    >
      <div className="bg-black bg-opacity-50 p-8 rounded-lg shadow-lg text-center max-w-md w-full">
        <h2 className="text-4xl mb-4">What is your Gender and Age?</h2>
        <button
          onClick={startRecording}
          className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-full mb-4"
        >
          Start Recording
        </button>
        <button
          onClick={stopRecording}
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded-full mb-4"
        >
          Stop Recording
        </button>
        <button
          onClick={handleSubmit}
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-full"
          disabled={!audioData}
        >
          Submit
        </button>

        {audioData && (
          <div className="mt-4">
            <h3 className="text-2xl mb-2">Recorded Audio:</h3>
            <p className="bg-gray-800 p-4 rounded-lg">{audioData}</p>
            <div className="flex justify-center mt-4">
              {/* <button
                onClick={() => speakTranscript(transcript)}
                className="bg-purple-500 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded-full mr-4"
              >
                Speak Transcript
              </button> */}
              <button
                onClick={handleReset}
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded-full"
              >
                Re-record
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GenderAge;
