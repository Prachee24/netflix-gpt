import Login from "./Login";
import Browse from "./Browse";
import { BrowserRouter as Router, Routes, Route, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addItem, removeItem } from "../utils/authSlice";

const Body = () => {

  

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/browse" element={<Browse />} />
      </Routes>
    </Router>
  );
};

export default Body;
