import { Navbar } from "@/components/Navbar";
import { Heading } from "@/components/Heading";
import { FileUpload } from "@/components/flashcards/FileUpload";
import { FlashcardDeck } from "@/components/flashcards/FlashcardDeck";

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

        {/* CARDS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <FileUpload />
          <FlashcardDeck />
        </div>
      </div>
    </section>
  );
};

export default Flashcards;
