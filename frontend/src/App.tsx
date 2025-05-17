import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";

import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import NotFound from "@/pages/NotFound";
import Flashcards from "@/pages/Flashcards";
import FlashcardDecks from "@/pages/FlashcardDecks";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/flashcards" element={<FlashcardDecks />} />
        <Route path="/flashcards/:flashcardId" element={<Flashcards />} />
      </Routes>

      <ToastContainer />
    </div>
  );
};

export default App;
