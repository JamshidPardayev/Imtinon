import { Route, BrowserRouter as Router, Routes, Navigate, useNavigate } from "react-router-dom";
import Login from './Page/Login';
import Register from './Page/Register';
// import { Nav } from "./components/Nav"; 
import Main from "./Layout/Main";
import Dashboard from "./Page/Dashboard";
import Teachers from "./Page/Teachers";
import { AddTeacher } from "./Page/AddTeacher";
import DynamicTeacher from "./Page/DinamicTeacher";
import NotFound from "./Page/NotFound";
import { useEffect } from "react";

function App() {
  function ProtectedRoute({ children }) {
    const navigate = useNavigate();
  
    useEffect(() => {
      if (!isAuth()) {
        navigate('/');
      }
    }, [navigate]);
  
    return isAuth() ? children : null;

  }
  function isAuth() {
    return localStorage.getItem("token") !== null;
  }
  return (
    <Router>
      <Routes>
        <Route element={<Main/>}>
          <Route path="/Dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path="/Teachers" element={<ProtectedRoute><Teachers /></ProtectedRoute>} />
          <Route path="/AddTeacher" element={<ProtectedRoute><AddTeacher /></ProtectedRoute>} />
          <Route path="/Teacher1" element={<ProtectedRoute><Teachers /></ProtectedRoute>} />
          <Route path="/DynamicTeacher/:id" element={<ProtectedRoute><DynamicTeacher /></ProtectedRoute>} />
        </Route>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
        <Route path="*" element={<NotFound />} /> 
      </Routes>
    </Router>
  );
}

export default App;
