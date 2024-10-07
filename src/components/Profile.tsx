import React from 'react';
import { User, DollarSign, Users } from 'lucide-react';

const Profile: React.FC = () => {
  return (
    <div className="flex-1 p-4">
      <h1 className="text-2xl font-bold mb-6">Profile</h1>
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex items-center justify-center mb-6">
          <div className="w-24 h-24 bg-blue-500 rounded-full flex items-center justify-center text-white">
            <User size={48} />
          </div>
        </div>
        <h2 className="text-xl font-semibold text-center mb-6">John Doe</h2>
        <div className="space-y-4">
          <div className="flex items-center">
            <DollarSign className="text-green-500 mr-2" size={24} />
            <span className="font-semibold">Balance:</span>
            <span className="ml-2">$1,000</span>
          </div>
          <div className="flex items-center">
            <Users className="text-blue-500 mr-2" size={24} />
            <span className="font-semibold">Friends:</span>
            <span className="ml-2">42</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;