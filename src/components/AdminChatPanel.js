import React, { useEffect, useState, useRef } from "react";
import { io } from "socket.io-client";
import moment from "moment";

const SOCKET_URL = process.env.REACT_APP_API_BASE_URL || "http://localhost:5000";
const socket = io(SOCKET_URL, {
  withCredentials: true,
});

const AdminChatPanel = () => {
  const [messages, setMessages] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [input, setInput] = useState("");
  const [typingUser, setTypingUser] = useState(null);
  const messagesEndRef = useRef(null);

  // Load chat history from backend
  useEffect(() => {
      fetch(`${SOCKET_URL}/api/chat/`)
      .then((res) => res.json())
      .then(setMessages)
      .catch((err) => console.error("Failed to load messages:", err));
  }, []);

  // Setup socket listeners
  useEffect(() => {
    socket.on("chat_message", ({ sender, receiver, message, createdAt }) => {
      // ✅ Accept all messages including admin
      setMessages((prev) => [
        ...prev,
        { sender, receiver, message, createdAt },
      ]);
    });

    socket.on("typing", ({ sender }) => {
      if (sender !== "Admin") {
        setTypingUser(sender);
        setTimeout(() => setTypingUser(null), 2000);
      }
    });

    return () => {
      socket.off("chat_message");
      socket.off("typing");
    };
  }, []);

  // Auto-scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages, selectedUser]);

  // Group messages by user
  const grouped = messages.reduce((acc, msg) => {
    const user = msg.sender !== "Admin" ? msg.sender : msg.receiver;
    if (user && user !== "Admin") {
      acc[user] = acc[user] || [];
      acc[user].push(msg);
    }
    return acc;
  }, {});

  // Handle send
  const sendReply = () => {
    if (!input.trim() || !selectedUser) return;

    const message = {
      sender: "Admin",
      receiver: selectedUser,
      message: input,
      createdAt: new Date().toISOString(),
    };

    socket.emit("chat_message", message);
    setInput(""); // Let socket.on handle message update
  };

  return (
    <div className="p-4 flex gap-6">
      {/* User List */}
      <div className="w-1/4 border-r">
        <h2 className="font-bold mb-2">Users</h2>
        {Object.keys(grouped).map((user) => (
          <div
            key={user}
            className={`cursor-pointer p-2 rounded ${
              selectedUser === user ? "bg-blue-100" : ""
            }`}
            onClick={() => setSelectedUser(user)}
          >
            <b>{user}</b>
          </div>
        ))}
      </div>

      {/* Chat Section */}
      <div className="flex-1">
        <h2 className="font-bold mb-2">
          Chat with: {selectedUser || "None"}
        </h2>
        <div className="h-96 overflow-y-auto border p-2 bg-gray-50 rounded">
          {(grouped[selectedUser] || []).map((msg, i) => (
            <div
              key={i}
              className={`flex ${
                msg.sender === "Admin" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`max-w-xs px-3 py-2 rounded-lg text-sm shadow mb-1 ${
                  msg.sender === "Admin"
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-900"
                }`}
              >
                {msg.message}
                <div className="text-[10px] text-right opacity-70 mt-1">
                  {moment(msg.createdAt).format("h:mm A")}
                </div>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>

        {/* Typing Indicator */}
        {typingUser === selectedUser && (
          <div className="text-xs italic text-gray-400 mt-1">Typing...</div>
        )}

        {/* Input Box */}
        {selectedUser && (
          <div className="mt-4 flex items-center gap-2">
            <input
              className="flex-1 border px-3 py-1 rounded"
              placeholder="Type reply..."
              value={input}
              onChange={(e) => {
                setInput(e.target.value);
                socket.emit("typing", { sender: "Admin" });
              }}
              onKeyDown={(e) => e.key === "Enter" && sendReply()}
            />
            <button
              className="bg-blue-600 text-white px-4 py-1 rounded"
              onClick={sendReply}
            >
              Send
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AdminChatPanel;
