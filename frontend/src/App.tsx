import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";

import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import NotFound from "@/pages/NotFound";
import FlashcardDecks from "@/pages/FlashcardDecks";
import FlashcardDeckPage from "@/pages/FlashcardDeckPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/flashcards" element={<FlashcardDecks />} />
        <Route path="/flashcards/:deckId" element={<FlashcardDeckPage />} />
      </Routes>

      <ToastContainer />
    </div>
  );
};

export default App;
