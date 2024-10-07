import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Send } from 'lucide-react';

const ChatWindow: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [messages, setMessages] = useState<{ text: string; sender: 'user' | 'other' }[]>([
    { text: 'Hi there!', sender: 'other' },
    { text: 'Hello! How can I help you today?', sender: 'user' },
  ]);
  const [inputText, setInputText] = useState('');

  const suggestedResponses = [
    'That sounds interesting!',
    'Could you tell me more?',
    'I\'m not sure I understand.',
  ];

  const handleSend = (text: string) => {
    setMessages([...messages, { text, sender: 'user' }]);
    setInputText('');
    // Simulate AI response
    setTimeout(() => {
      setMessages(prev => [...prev, { text: 'This is a simulated AI response.', sender: 'other' }]);
    }, 1000);
  };

  return (
    <div className="flex flex-col h-screen bg-gray-100">
      <div className="bg-white shadow-md p-4 flex items-center">
        <button onClick={() => navigate('/')} className="mr-4">
          <ArrowLeft size={24} />
        </button>
        <h1 className="text-xl font-semibold">Chat with User {id}</h1>
      </div>
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((message, index) => (
          <div key={index} className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-xs p-3 rounded-lg ${message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-300'}`}>
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="p-4 bg-white">
        <div className="flex space-x-2 mb-2">
          {suggestedResponses.map((response, index) => (
            <button
              key={index}
              onClick={() => handleSend(response)}
              className="px-3 py-1 bg-gray-200 rounded-full text-sm"
            >
              {response}
            </button>
          ))}
        </div>
        <div className="flex items-center">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            className="flex-1 border rounded-l-lg p-2"
            placeholder="Type a message..."
          />
          <button
            onClick={() => handleSend(inputText)}
            className="bg-blue-500 text-white p-2 rounded-r-lg"
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWindow;