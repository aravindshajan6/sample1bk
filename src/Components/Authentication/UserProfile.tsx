import React, { useState } from "react";

import Typography from "../Common/Typography";

interface UserProfile {
  id: string;
  role: string;
  name: string;
  profilePicUrl?: string;
}

interface UserCredentialsProps {
  setSelectedUser: React.Dispatch<React.SetStateAction<any>>;
  recentUsers: UserProfile[];
}

const UserCredentials: React.FC<UserCredentialsProps> = ({
  setSelectedUser,
  recentUsers,
}) => (
  <div className="flex w-1/2 justify-center items-center">
    <div className="w-full pt-4 px-16">
      <div className="grid grid-cols-4 gap-4">
        {recentUsers.map(user => (
          <div
            key={user.id}
            className="border w-full border-gray-300 bg-gray-100 p-1 rounded-lg flex flex-col items-center cursor-pointer"
            onClick={() => setSelectedUser(user)}
          >
            {user.profilePicUrl ? (
              <img
                src={user.profilePicUrl}
                alt={user.name}
                className="w-full h-16 rounded-full mb-2"
              />
            ) : (
              <div className="w-full h-16 bg-gray-300 rounded-lg mb-2" />
            )}
            <Typography
              style="medium"
              type="regular"
              className="flex justify-center"
            >
              {user?.name}
            </Typography>
            <Typography
              style="medium"
              type="regular"
              className="flex justify-center"
            >
              {user?.role}
            </Typography>
            <Typography style="h6" className="flex justify-center">
              {user?.id}
            </Typography>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export default UserCredentials;
