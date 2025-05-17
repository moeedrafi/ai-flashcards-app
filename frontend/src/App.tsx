import { Route, Routes } from "react-router";
import { ToastContainer } from "react-toastify";

import Home from "@/pages/Home";
import Login from "@/pages/Login";
import Register from "@/pages/Register";
import NotFound from "@/pages/NotFound";
import Flashcards from "@/pages/Flashcards";
import FlashcardDecks from "@/pages/FlashcardDecks";

import { useEffect, useState } from "react";
import { Deck, DecksResponse } from "./features/flashcards/types";
import { apiClient } from "./utils/api";

const App = () => {
  const [decks, setDecks] = useState<Deck[]>([]);

  useEffect(() => {
    const fetchDeck = async () => {
      const res = await apiClient<unknown, DecksResponse>(
        "/api/v1/deck",
        "GET"
      );
      setDecks(res.data);
    };

    fetchDeck();
  }, []);

  console.log(decks);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<NotFound />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/flashcards" element={<FlashcardDecks decks={decks} />} />
        <Route path="/flashcards/:flashcardId" element={<Flashcards />} />
      </Routes>

      <ToastContainer />
    </div>
  );
};

export default App;
