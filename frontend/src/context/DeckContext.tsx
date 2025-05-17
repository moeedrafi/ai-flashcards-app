import { useContext, useState, createContext, useEffect } from "react";
import { Deck } from "@/features/flashcards/types";
import { fetchDecks } from "@/features/flashcards/service/flashcardService";

type DeckContextType = {
  decks: Deck[];
  isLoading: boolean;
  setDecks: React.Dispatch<React.SetStateAction<Deck[]>>;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
};

const DeckContext = createContext<DeckContextType | undefined>(undefined);

export const DeckProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [decks, setDecks] = useState<Deck[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    const getDecks = async () => {
      const decks = await fetchDecks();
      if (!decks?.data) return;
      setDecks(decks.data);
    };
    setIsLoading(false);

    getDecks();
  }, []);

  const value = {
    decks,
    isLoading,
    setDecks,
    setIsLoading,
  };

  return <DeckContext.Provider value={value}>{children}</DeckContext.Provider>;
};

export const useDeck = () => {
  const context = useContext(DeckContext);
  if (context === undefined) {
    throw new Error("useDeck must be used within a AuthProvider.");
  }
  return context;
};
