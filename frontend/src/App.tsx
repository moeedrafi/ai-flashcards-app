import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";

import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import NotFound from "@/pages/NotFound";
import Flashcards from "@/pages/Flashcards";
import Generate from "@/pages/Generate";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/generate" element={<Generate />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/flashcards" element={<Flashcards />} />
      </Routes>

      <ToastContainer />
    </div>
  );
};

export default App;
