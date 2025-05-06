import { Link } from "react-router";

export const FlashcardDeck = () => {
  return (
    <Link
      to="/flashcards/1"
      className="p-6 bg-custom-primary/30 border border-custom-primary rounded-lg duration-300 transition-all hover:shadow-md hover:-translate-y-1"
    >
      <div className="flex flex-col justify-between h-full gap-5">
        <div className="space-y-2">
          <h3 className="text-custom-black text-2xl font-semibold">Biology</h3>
          <p className="text-sm text-gray-600">
            Basic concepts in biology including cells, Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Voluptatem, Lorem ipsum
          </p>
        </div>
        <p className="text-sm text-gray-500">24 Cards</p>
      </div>
    </Link>
  );
};
