import React, { useState, useContext } from "react";

import { Navigate, useNavigate } from "react-router-dom";
import UserProfile from "./UserProfile";
import LoginForm from "./LoginForm";
import { userProfiles, UserCredentials } from "./constants";

import { UserContext } from "../../App";


const Login = () => {
  const [selectedUser, setSelectedUser] = useState<any>(undefined);
  const navigate = useNavigate();
  const { state } = useContext(UserContext);

  if (state?.mobile_no) {
    return <Navigate to="/" replace />;
  }
  const handleLogin = (credentials: UserCredentials) => {
    localStorage.setItem("user", JSON.stringify({...credentials, name: "John", role: "Manager"}));
    console.log("Logging in with credentials:", credentials);
    navigate("/");
  };

  return (
    <div className="flex justify-center items-center pt-2 py-4 min-h-screen">
      <div className="container mx-auto flex justify-center space-y-4">
        <UserProfile
          recentUsers={userProfiles}
          setSelectedUser={setSelectedUser}
        />
        <LoginForm user={selectedUser} onLogin={handleLogin} />
      </div>
    </div>
  );
};

export default Login;
