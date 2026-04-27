import React, { useState, useEffect, useRef } from "react";
import { io } from "socket.io-client";
import { X } from "lucide-react";
import moment from "moment";

const SOCKET_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
const socket = io(SOCKET_URL, { withCredentials: true });

const ChatBox = ({ currentUser }) => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);
  const [typing, setTyping] = useState(false);
  const messagesEndRef = useRef(null);

  // Scroll to latest message
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  useEffect(() => {
    if (!currentUser?.name) return;

    socket.on("chat_message", ({ sender, receiver, message, createdAt }) => {
      setMessages((prev) => [...prev, { sender, receiver, message, createdAt }]);
    });

    socket.on("typing", ({ sender }) => {
      if (sender !== currentUser.name) {
        setTyping(true);
        setTimeout(() => setTyping(false), 2000);
      }
    });

    return () => {
      socket.off("chat_message");
      socket.off("typing");
    };
  }, [currentUser?.name]);

  useEffect(() => {
    if (isOpen && currentUser?.name) {
      fetch(`http://localhost:5000/api/chat/${currentUser.name}`)
        .then((res) => res.json())
        .then((data) => {
          if (Array.isArray(data)) setMessages(data);
        })
        .catch((err) => console.error("Chat load failed:", err));
    }
  }, [isOpen, currentUser?.name]);

  const sendMessage = () => {
    if (!input.trim()) return;

    const newMsg = {
      sender: currentUser.name,
      receiver: "Admin",
      message: input,
      createdAt: new Date().toISOString(),
    };

    socket.emit("chat_message", newMsg); // ✅ backend will echo it
    setInput(""); // ✅ just clear input
  };

  if (!currentUser?.name) {
    return (
      <div className="fixed bottom-5 right-5 bg-white px-4 py-2 rounded-lg shadow text-gray-600 flex gap-2 items-center">
        <span className="animate-spin text-blue-600">⏳</span>
        <span className="text-sm">Loading chat...</span>
      </div>
    );
  }

  return (
    <>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-5 right-5 bg-blue-600 text-white p-4 rounded-full shadow-xl hover:bg-blue-700 z-50"
        title="Live Chat"
      >
        💬
      </button>

      {isOpen && (
        <div className="fixed bottom-40 right-6 w-[26rem] h-96 bg-white rounded-2xl shadow-xl flex flex-col overflow-hidden z-[9999] animate-fade-in">
          <div className="bg-blue-600 text-white px-4 py-3 flex justify-between items-center">
            <span className="font-semibold text-base">Live Chat</span>
            <button onClick={() => setIsOpen(false)} className="hover:text-gray-300">
              <X size={18} />
            </button>
          </div>

          {typing && (
            <div className="text-sm text-gray-500 italic px-3 py-1">Admin is typing...</div>
          )}

          <div className="flex-1 overflow-y-auto px-3 py-2 bg-gray-50 space-y-2">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex ${msg.sender === currentUser.name ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-xs px-3 py-2 rounded-lg text-sm shadow ${
                    msg.sender === currentUser.name
                      ? "bg-blue-500 text-white"
                      : "bg-gray-200 text-gray-800"
                  }`}
                >
                  <div>{msg.message}</div>
                  <div className="text-[10px] mt-1 text-right opacity-70">
                    {moment(msg.createdAt).format("h:mm A")}
                  </div>
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="flex items-center p-3 border-t bg-white">
            <input
              type="text"
              className="flex-1 border border-gray-300 rounded-full px-3 py-1 text-sm focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Type your message..."
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                if (currentUser?.name) {
                  socket.emit("typing", { sender: currentUser.name });
                }
              }}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              className="ml-2 bg-blue-600 hover:bg-blue-700 text-white px-3 py-1 rounded-full text-sm"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatBox;
