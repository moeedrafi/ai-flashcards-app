import { useState } from "react";
import { Flashcard as FlashcardType } from "@/features/flashcards/types/index";

interface FlashcardProps {
  flashcard: FlashcardType;
}

export const Flashcard = ({ flashcard }: FlashcardProps) => {
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

  return (
    <div className="h-64" onClick={() => setIsFlipped((prev) => !prev)}>
      <div
        className={`relative h-full transition-transform duration-500 transform-3d ${
          isFlipped ? "rotate-y-180" : ""
        }`}
      >
        <div className="absolute w-full h-full backface-hidden bg-custom-white rounded-lg shadow-md p-6 flex flex-col rotate-y-180">
          <p className="text-gray-500 text-sm mb-2">Answer</p>
          <div className="flex-1 flex items-center justify-center">
            <h3 className="text-custom-black text-lg font-medium">
              {flashcard.answer}
            </h3>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            Click to flip
          </p>
        </div>

        <div className="absolute w-full h-full backface-hidden bg-custom-white rounded-lg shadow-md p-6 flex flex-col">
          <p className="text-gray-500 text-sm mb-2">Question</p>
          <div className="flex-1 flex items-center justify-center">
            <h3 className="text-custom-black text-lg font-medium">
              {flashcard.question}
            </h3>
          </div>

          <p className="mt-4 text-center text-xs text-gray-400">
            Click to flip
          </p>
        </div>
      </div>
    </div>
  );
};
