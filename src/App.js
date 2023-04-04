import { BrowserRouter as Router , Route , Routes } from 'react-router-dom';
import './App.css';
import Navbar from './shared/components/navbar'
import Chat from "./shared/pages/chat"
import Notes from "./shared/pages/notes"
import About from "./shared/pages/aboutus"
function App() {
  return (
    <div className="App">
      <Navbar/>
     
        <Routes>
        <Route path="/aboutUs" element={<About/>}/>
        <Route path="/chat" element={<Chat/>}/>
        <Route path="/notes" element={<Notes/>}/>

        </Routes>
      
    </div>
  );
}

export default App;
