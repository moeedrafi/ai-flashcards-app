import { useState } from "react";
import { useParams } from "react-router";

import { Navbar } from "@/components/Navbar";

const Flashcards = () => {
  const { flashcardId } = useParams();
  const [isFlipped, setIsFlipped] = useState<boolean>(false);

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
          {/* Flashcard */}
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
                    Mitocondria
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
                    What is powerhouse of the cell?
                  </h3>
                </div>

                <p className="mt-4 text-center text-xs text-gray-400">
                  Click to flip
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Flashcards;
