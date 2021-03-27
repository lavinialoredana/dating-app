import logo from './logo.svg';
import './App.css';
import ChatPage from "./ChatPage";
import Header from "./Header";
import Profile from "./Profile";
import { BrowserRouter, Route } from "react-router-dom";

function App() {
  return (
    <Header/>
    <Profile/>
      <ChatPage/>
  );
}

export default App;
