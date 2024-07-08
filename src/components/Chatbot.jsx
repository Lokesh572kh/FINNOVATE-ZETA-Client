import React, { useState, useEffect } from "react";
import axios from "axios";
import { SiChatbot } from "react-icons/si";
import { AiOutlineSend } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import image from "../../public/Money stress-rafiki.svg";

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [speaking, setSpeaking] = useState(false); // State to manage speech synthesis

  useEffect(() => {
    // Initialize speech synthesis on component mount
    if ("speechSynthesis" in window) {
      window.speechSynthesis.onvoiceschanged = () => {
        const voices = window.speechSynthesis.getVoices();
        // Set Indian English voice if available
        const indianEnglishVoice = voices.find(
          (voice) => voice.lang === "en-IN"
        );
        setVoice(indianEnglishVoice || voices[0]); // Fallback to default voice if not found
      };
    }
  }, []);

  const toggleChatbot = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e) => {
    setInput(e.target.value);
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const newMessage = { sender: "user", text: input };
    setInput("");
    setMessages([...messages, newMessage]);

    try {
      const response = await axios.post(
        "https://mag-pipes-rl-id.trycloudflare.com/query",
        {
          query: input,
          background_key: "back_1_m",
        }
      );

      const botMessage = { sender: "bot", text: response.data.response };
      setMessages((prevMessages) => [...prevMessages, botMessage]);

      // Speak the bot's response
      speakText(response.data.response);
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  const speakText = (text) => {
    if ("speechSynthesis" in window && !speaking) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.voice = voice; // Set the selected voice
      setSpeaking(true);
      window.speechSynthesis.speak(utterance);
      utterance.onend = () => {
        setSpeaking(false);
      };
    }
  };

  const [voice, setVoice] = useState(null); // State to manage speech synthesis voice

  return (
    <>
      <div
        className="fixed bottom-0 right-0 p-3 text-[30px] m-10 bg-gray-600 cursor-pointer text-white z-50  rounded-full  shadow-lg hover:text-blue-700"
        onClick={toggleChatbot}
      >
        {isOpen ? <IoMdClose /> : <SiChatbot />}
      </div>
      {isOpen && (
        <div className="fixed bottom-0 top-0 my-auto z-50 left-0 right-0 mx-auto w-96 md:w-3/5 max-h-[500px] bg-white border border-gray-300 font-mont font-medium rounded-lg shadow-xl flex flex-col overflow-hidden">
          <div className="primbg text-white p-3 flex justify-between items-center">
            <h2 className="text-lg text-center font-poppins font-semibold">
              Smart Financial Advisor
            </h2>
            <button
              className="text-sm bg-white text-blue-500 rounded px-2 py-1"
              onClick={toggleChatbot}
            >
              Close
            </button>
          </div>
          <div className="p-3 flex-1 overflow-y-auto">
            {messages.length ? (
              messages.map((msg, index) => (
                <div
                  key={index}
                  className={`mb-2 ${
                    msg.sender === "user" ? "text-right" : "text-left"
                  }`}
                >
                  <span
                    className={`inline-block py-2 px-4 text-justify mx-4 rounded-lg ${
                      msg.sender === "user" ? "bg-blue-100" : "bg-gray-200"
                    }`}
                  >
                    {msg.text}
                  </span>
                </div>
              ))
            ) : (
              <div className="flex justify-center items-center w-full">
                <img src={image} className=" object-contain h-[350px]" alt="" />
              </div>
            )}
          </div>
          <form className="p-3 bg-gray-100 flex">
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded-lg p-2"
              value={input}
              onChange={handleInputChange}
              placeholder="Type your message..."
            />
            <button
              type="submit"
              className="ml-2 bg-blue-500 text-white rounded-lg px-4 py-2"
              onClick={handleSend}
            >
              <AiOutlineSend className="font-bold" />
            </button>
          </form>
        </div>
      )}
    </>
  );
};

export default Chatbot;