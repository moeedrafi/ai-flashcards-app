import { Link } from "react-router";
import { Deck } from "@/features/flashcards/types/index";

interface DeckListsProps {
  decks: Deck[];
}

export const DeckLists = ({ decks }: DeckListsProps) => {
  if (decks.length === 0) {
    return <p>No Decks Avaialble</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {decks.map(({ _id, description, title }) => (
        <Link
          key={_id}
          to={`/flashcards/${_id}`}
          className="p-6 bg-custom-primary/30 border border-custom-primary rounded-lg duration-300 transition-all hover:shadow-md hover:-translate-y-1"
        >
          <div className="flex flex-col justify-between h-full gap-5">
            <div className="space-y-2">
              <h3 className="text-custom-black text-2xl font-semibold">
                {title}
              </h3>
              <p className="text-sm text-gray-600">{description}</p>
            </div>
            <p className="text-sm text-gray-500">24 Cards</p>
          </div>
        </Link>
      ))}
    </div>
  );
};
