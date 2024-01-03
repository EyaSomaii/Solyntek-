import { useState } from 'react'
import { ChakraProvider } from "@chakra-ui/react";
import LoginForm from './Components/LoginForm';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Register from './Components/Register';
import ListUsers from "./Components/ListUsers";


function App() {

  return (
    <Routes>
      <Route path="/login" element={<LoginForm />} />
      <Route path="/Register" element={<Register />} />
      <Route path="/listUsers" element={<ListUsers />} />
    </Routes>
  );
}

export default App
