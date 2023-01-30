import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Layout from "./layout/layout";
import Login from "./Pages/Login/Login";
import SignUp from "./Pages/Login/SignUp";
import UserDetails from "./Pages/Login/userDetails";

function App() {
  const isLoggedIn = window.localStorage.getItem("loggedIn");
  return (
    <Router>
      <div className="App">
        {/* <RouterProvider router={router} /> */}
        <Routes>
          <Route
            exact
            path="/"
            element={isLoggedIn === "true" ? <UserDetails /> : <Login />}
            // element={<Layout />}
          />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/userDetails" element={<UserDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
