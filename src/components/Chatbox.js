import React, { useState } from 'react';

function Chatbox() {
  const [messages, setMessages] = useState([]);
  const [inputText, setInputText] = useState('');

  const handleMessageSubmit = () => {
    if (inputText.trim() !== '') {
      const userMessage = inputText.trim();
      setMessages(prevMessages => [...prevMessages, { text: userMessage, isUser: true }]);
      // Simulate bot response
      setTimeout(() => {
        const botMessage = "This is a bot response";
        setMessages(prevMessages => [...prevMessages, { text: botMessage, isUser: false }]);
      }, 1000);
      setInputText('');
    }
  };

  return (
    <div className="chatbox">
      <div className="messages">
        {messages.map((message, index) => (
          <div key={index} className={`message ${message.isUser ? 'user' : 'bot'}`}>
            {message.text}
          </div>
        ))}
      </div>
      <div className="input-container">
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          placeholder="Type your message..."
        />
        <button onClick={handleMessageSubmit}>Send</button>
      </div>
    </div>
  );
}

export default Chatbox;
