import React, { useContext, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../App";
import { Logout } from "./Common/icons";

const NavBar = () => {
  const searchModal = useRef(null);
  const [search, setSearch] = useState("");
  const [userDetails, setUserDetails] = useState([]);
  const { state, dispatch } = useContext(UserContext);
  const navigate = useNavigate();
  const renderList = () => {
    if (state) {
      return [
        <div className="flex flex-row items-center space-x-11 bg-gray-100 p-4 ">
          <div className="flex flex-row space-x-2">
            <div className="bg-gray-200  border-gray-300 rounded-lg w-12"></div>
            <div className="flex flex-col ">
              <span className="font-semibold text-md">{state?.name}</span>
              <span className="text-sm">{state?.role}</span>
            </div>
          </div>
          <Logout
            onClick={() => {
              localStorage.clear();
              dispatch({ type: "CLEAR" });
              navigate("/signin");
            }}
            size={30}
          />
        </div>,
      ];
    }
  };

  const fetchUsers = query => {
    setSearch(query);
    fetch("/search-users", {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
      }),
    })
      .then(res => res.json())
      .then(results => {
        setUserDetails(results.user);
      });
  };
  return (
    <div className="fixed top-0 left-0 right-0 bg-white z-10 shadow-md flex flex-row gap-4 justify-end">{renderList()}</div>
  );
};

export default NavBar;
