import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';

const AudioRecorder = () => {
  const [audioData, setAudioData] = useState(null);
  const [inputText, setInputText] = useState('');
  const { transcript, resetTranscript } = useSpeechRecognition();

  const startRecording = () => {
    SpeechRecognition.startListening({ continuous: true });
  };

  const stopRecording = () => {
    SpeechRecognition.stopListening();
    setAudioData(transcript);
  };

  const handleInputChange = (e) => {
    setInputText(e.target.value);
  };

  const handleSubmit = () => {
    // Simulate saving to database
    console.log('Saving to database:', audioData);
    // Here you would typically send `audioData` to your backend for storage
    resetTranscript();
    setAudioData(null);
  };

  return (
    <div className="audio-recorder">
      <h2>What is your name?</h2>
      <p>{inputText}</p>
      <button onClick={startRecording}>Start Recording</button>
      <button onClick={stopRecording}>Stop Recording</button>
      <button onClick={handleSubmit} disabled={!audioData}>Submit</button>

      {audioData && (
        <div>
          <h3>Recorded Audio:</h3>
          <p>{audioData}</p>
        </div>
      )}
    </div>
  );
};

export default AudioRecorder;
