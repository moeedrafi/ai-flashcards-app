import { useParams } from "react-router";
import { useEffect, useState } from "react";

import { Navbar } from "@/components/Navbar";
import { Flashcard } from "@/features/flashcards/components/Flashcard";
import { getFlashcards } from "@/features/flashcards/service/flashcardService";
import { Flashcard as FlashcardType } from "@/features/flashcards/types";

const FlashcardDeckPage = () => {
  const { deckId } = useParams();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [flashcards, setFlashcards] = useState<FlashcardType[]>([]);

  useEffect(() => {
    const fetchFlashcards = async () => {
      const response = await getFlashcards(deckId as string);
      if (response?.data) {
        setFlashcards(response.data);
      }
      setIsLoading(false);
    };

    fetchFlashcards();
  }, [deckId]);

  if (isLoading) {
    return <p>LOADING...</p>;
  }

  console.log(flashcards);

  return (
    <section className="min-h-screen space-y-8">
      <Navbar />

      <div className="container mx-auto py-12 px-4">
        {/* HEADER */}
        <div className="bg-custom-ascent/20 rounded-lg p-6 text-center mb-12">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Biology 101
          </h1>
          <p className="text-lg max-w-2xl mx-auto text-gray-500 font-light">
            Basic concepts in biology including cells, genetics, and evolution
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {flashcards.map((flashcard) => (
            <Flashcard key={flashcard._id} flashcard={flashcard} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FlashcardDeckPage;
