import React, { useState } from 'react';

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;
    sendMessage(inputValue);
    setInputValue('');
  };

  const sendMessage = (message) => {
    setMessages([...messages, { text: message, sender: 'user' }]);
    // Here you can implement logic to send the message to a backend or process it
    // with your chatbot logic
    // For now, let's just simulate a reply
    setTimeout(() => {
      receiveMessage('This is a reply from the bot');
    }, 500);
  };

  const receiveMessage = (message) => {
    setMessages([...messages, { text: message, sender: 'bot' }]);
  };

  return (
    <div>
      <div className="chat-window">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.sender}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <form onSubmit={handleSubmit} className="input-form">
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Type a message..."
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Chat;
