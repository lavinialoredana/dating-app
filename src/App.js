
import './App.css';
import ChatPage from "./ChatPage";
import Header from "./Header";
import Profile from "./Profile";
import { BrowserRouter, Route } from "react-router-dom";




function App() {
  return (
    <BrowserRouter> 
    <Header/>
    <Route exact path="/"> 
    <Profile/>
    </Route>
    <Route exact path="/chatpage"> 
      <ChatPage/>
    </Route>
   
    
    
    </BrowserRouter>
  );
}

export default App;
