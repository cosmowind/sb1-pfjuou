import React from 'react';
import { Link } from 'react-router-dom';
import { User } from 'lucide-react';

const chatData = [
  { id: 1, name: 'Alice', age: 28, lastMessage: 'Hey, how are you?' },
  { id: 2, name: 'Bob', age: 32, lastMessage: 'Did you see the game last night?' },
  { id: 3, name: 'Charlie', age: 25, lastMessage: 'Let\'s grab coffee sometime!' },
  { id: 4, name: 'Diana', age: 30, lastMessage: 'Thanks for your help!' },
  { id: 5, name: 'Ethan', age: 27, lastMessage: 'See you tomorrow!' },
  { id: 6, name: 'Fiona', age: 29, lastMessage: 'Can you send me that file?' },
  { id: 7, name: 'George', age: 31, lastMessage: 'Happy birthday!' },
];

const ChatList: React.FC = () => {
  return (
    <div className="flex-1 overflow-y-auto">
      <h1 className="text-2xl font-bold p-4">Chats</h1>
      <ul>
        {chatData.map((chat) => (
          <li key={chat.id} className="border-b last:border-b-0">
            <Link to={`/chat/${chat.id}`} className="flex items-center p-4 hover:bg-gray-50">
              <div className="w-12 h-12 bg-blue-500 rounded-full flex items-center justify-center text-white mr-4">
                <User size={24} />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-baseline">
                  <h2 className="font-semibold">{chat.name}</h2>
                  <span className="text-sm text-gray-500">{chat.age} years</span>
                </div>
                <p className="text-sm text-gray-600 truncate">{chat.lastMessage}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ChatList;