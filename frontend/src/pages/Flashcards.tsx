import { Navbar } from "@/components/Navbar";
import { Heading } from "@/components/Heading";
import { FlashcardDeck } from "@/features/flashcards/components/FlashcardDeck";
import { FlashcardForm } from "@/features/flashcards/components/FlashcardForm";

const Flashcards = () => {
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
          <FlashcardDeck />
        </div>
      </div>
    </section>
  );
};

export default Flashcards;
