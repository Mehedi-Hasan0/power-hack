import { useState } from "react";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Routes/Routes";

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;