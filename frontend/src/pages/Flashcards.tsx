import { Navbar } from "@/components/Navbar";
import { FileUpload } from "@/components/flashcards/FileUpload";
import { FlashcardDeck } from "@/components/flashcards/FlashcardDeck";

const Flashcards = () => {
  return (
    <section className="min-h-screen space-y-8">
      <Navbar />

      <div className="container mx-auto py-12 px-4">
        {/* HEADER */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Flashcard Decks
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-500 font-light">
            Select a deck to start studying or create your own
          </p>
        </div>

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
