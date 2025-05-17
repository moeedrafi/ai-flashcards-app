import { Navbar } from "@/components/Navbar";
import { Heading } from "@/components/Heading";

import { useDeck } from "@/context/DeckContext";
import { DeckLists } from "@/features/flashcards/components/DeckLists";
import { FlashcardForm } from "@/features/flashcards/components/FlashcardForm";

const FlashcardDecks = () => {
  const { decks, isLoading } = useDeck();

  if (isLoading) {
    return <p>LOADING....</p>;
  }

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

        {/* LIST */}
        <DeckLists decks={decks} />
      </div>
    </section>
  );
};

export default FlashcardDecks;
