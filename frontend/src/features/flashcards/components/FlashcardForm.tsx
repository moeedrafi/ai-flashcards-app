import { FileUpload } from "@/features/flashcards/components/FileUpload";

export const FlashcardForm = () => {
  return (
    <form className="p-6 bg-custom-white rounded-lg border border-gray-200 shadow-sm mb-5 max-w-xl mx-auto">
      <h1 className="text-xl text-custom-black text-center font-semibold mb-4">
        Create Flashcard Deck
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Deck Title
          </label>
          <input
            id="title"
            placeholder="e.g., Biology 101"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <input
            id="description"
            placeholder="e.g., Basic concepts in biology"
            className="w-full px-3 py-2 rounded-md border border-gray-300 focus:ring-2 focus:outline-none"
          />
        </div>
      </div>

      <div className="mb-6">
        <label
          htmlFor="file"
          className="block text-sm text-gray-700 font-medium mb-1"
        >
          Upload PDF
        </label>
        <FileUpload />
      </div>

      <button
        type="submit"
        className="w-full px-4 py-2 bg-custom-black text-custom-white rounded-md hover:bg-custom-black/90 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
      >
        Create Deck
      </button>
    </form>
  );
};
