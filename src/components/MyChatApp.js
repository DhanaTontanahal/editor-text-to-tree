// App.js
import React, { useState, useEffect } from "react";
import { database } from "../firebase";

const MyChatApp = () => {
  const [conversations, setConversations] = useState([]);
  const [selectedConversation, setSelectedConversation] = useState(null);
  const [newMessage, setNewMessage] = useState("");

  useEffect(() => {
    // Fetch conversations from Firebase
    const conversationsRef = database.ref("conversations");
    conversationsRef.on("value", (snapshot) => {
      const data = snapshot.val();
      if (data) {
        setConversations(Object.values(data));
      }
    });

    // Subscribe to FCM for push notifications
    // messaging
    //   .requestPermission()
    //   .then(() => messaging.getToken())
    //   .then((token) => console.log("FCM Token:", token))
    //   .catch((err) => console.log("Error getting FCM token:", err));

    return () => {
      conversationsRef.off();
    };
  }, []);

  const handleSelectConversation = (conversation) => {
    setSelectedConversation(conversation);
  };

  const handleSendMessage = () => {
    if (selectedConversation) {
      const timestamp = new Date().getTime();
      const message = {
        text: newMessage,
        timestamp,
        sender: "User123", // Replace with actual user authentication
      };

      // Push the new message to the selected conversation in Firebase
      const conversationRef = database.ref(
        `conversations/${selectedConversation.id}/messages`
      );
      conversationRef.push(message);

      // Clear the input field
      setNewMessage("");
    }
  };

  return (
    <div>
      <h1>Messaging App</h1>

      <ul>
        {conversations.map((conversation) => (
          <li
            key={conversation.id}
            onClick={() => handleSelectConversation(conversation)}
          >
            {conversation.title}
          </li>
        ))}
      </ul>

      {/* Chat Interface */}
      {selectedConversation && (
        <div>
          <h2>{selectedConversation.title}</h2>
          <div>
            {selectedConversation.messages.map((message) => (
              <div key={message.text}>
                <p>{message.text}</p>
                <p>Sent by: {message.sender}</p>
              </div>
            ))}
          </div>
          <input
            type="text"
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <button onClick={handleSendMessage}>Send Message</button>
        </div>
      )}
    </div>
  );
};

export default MyChatApp;
