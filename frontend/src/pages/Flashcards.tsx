import { useEffect, useState } from "react";
import { apiClient } from "@/utils/api";

import { Navbar } from "@/components/Navbar";
import { Heading } from "@/components/Heading";
import { Deck, GetResponse } from "@/features/flashcards/types";
import { FlashcardDeck } from "@/features/flashcards/components/FlashcardDeck";
import { FlashcardForm } from "@/features/flashcards/components/FlashcardForm";

const Flashcards = () => {
  const [decks, setDecks] = useState<Deck[]>([]);

  useEffect(() => {
    const fetchDeck = async () => {
      const res = await apiClient<unknown, GetResponse>("/api/v1/deck", "GET");
      setDecks(res.data);
    };

    fetchDeck();
  }, []);

  return (
    <section className="min-h-screen space-y-8">
      <Navbar />

      <div className="container mx-auto py-12 px-4">
        {/* HEADER */}
        <Heading
          heading="Flashcard Decks"
          subHeading="Select a deck to start studying or create your own"
        />

        <div className="mb-12">
          <FlashcardForm />
        </div>

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {decks.map((deck) => (
            <FlashcardDeck
              key={deck._id}
              title={deck.title}
              description={deck.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flashcards;
