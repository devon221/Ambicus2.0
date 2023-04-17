import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Navbar from './shared/components/navbar'
import Chat from "./shared/pages/chat"
import Notes from "./shared/pages/notes"
import About from "./shared/pages/aboutus"
import Register from "./shared/pages/register"
import Signin from "./shared/pages/signin"
import { useContext } from 'react';
import { AuthContext } from './shared/hooks/Authcontext';
function App() {

  const ProtectedRoute = ({ children }) => {
    const currentUser = useContext(AuthContext)
    if (!currentUser) {
      return <Navigate to="/register" />
    }
    return children
  }
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path="/register" element={
          <Register />} />
          <Route path="/login" element={
          <Signin/>} />
        <Route path="/about" element={<About />} />
        <Route path="/chat" element={<ProtectedRoute><Chat /></ProtectedRoute>} />
        <Route path="/notes" element={<ProtectedRoute><Notes /></ProtectedRoute>} />

      </Routes>

    </div>
  );
}

export default App;
