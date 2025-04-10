import { Route, BrowserRouter as Router, Routes, Navigate } from "react-router-dom";
import Login from './Page/Login';
import Register from './Page/Register';
// import { Nav } from "./components/Nav"; 
import Main from "./Layout/Main";
import Dashboard from "./Page/Dashboard";
import Teachers from "./Page/Teachers";
import { AddTeacher } from "./Page/AddTeacher";
import DynamicTeacher from "./Page/DinamicTeacher";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Main/>}>
          <Route path="/Dashboard" element={<Dashboard />} />
          <Route path="/Teachers" element={<Teachers />} />
          <Route path="/AddTeacher" element={<AddTeacher />} />
          <Route path="/Teacher1" element={<Teachers />} />
          <Route path="/DynamicTeacher/:id" element={<DynamicTeacher />} />

        </Route>
        <Route path="/" element={<Login />} />
        <Route path="/Register" element={<Register />} />
       
      </Routes>
    </Router>
  );
}

export default App;
