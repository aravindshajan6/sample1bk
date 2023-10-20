import { useEffect, useContext, createContext, useReducer } from "react";
import { BrowserRouter, Route, Routes, useNavigate } from "react-router-dom";
import Login from "./Components/Authentication/Login";
import { reducer, initialState } from "./reducers/userReducer";
import NavBar from "./Components/Navbar";

import Inventory from "./Components/Screens/Inventory";
import AddItem from "./Components/Screens/Inventory/AddItem";
import InventorySettings from "./Components/Screens/Inventory/Settings";

export const UserContext = createContext();

const Routing = () => {
  const navigate = useNavigate();
  const { dispatch } = useContext(UserContext);
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch({ type: "USER", payload: user });
    } else {
      if (!navigate("/signin")) {
        console.error("Navigation to /signin failed.");
      }
    }
  }, [dispatch, navigate]);
  return (
    <Routes>
      <Route path="/signin" element={<Login />} />
      <Route path="/" element={<div>Home</div>} />
      <Route path="/inventory" element={<Inventory />} />
      <Route path="/inventory/add-item" element={<AddItem />} />
      <Route path="/inventory/manage-settings" element={<InventorySettings />} />
    </Routes>
  );
};
const App = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <UserContext.Provider value={{ state, dispatch }}>
      <BrowserRouter>
        <div className="font-poppins" >
          <NavBar />
          <Routing />
        </div>
      </BrowserRouter>
    </UserContext.Provider>
  );
};

export default App;
