import { useState } from "react";
import { apiFileClient } from "@/utils/api";

export const FileUpload = () => {
  const [filename, setFilename] = useState("");

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const formData = new FormData();
    if (e.target.files) {
      const file = e.target.files[0];
      setFilename(file.name);
      formData.append("file", e.target.files[0]);
    }

    await apiFileClient("/api/v1/flashcard/generate", formData);
  };

  return (
    <label className="flex flex-col items-center h-full justify-center w-full border-2 border-gray-400 border-dashed rounded-lg cursor-pointer bg-gray-200 hover:bg-gray-100">
      <div className="flex flex-col items-center justify-center pt-5 pb-6">
        <svg
          className="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 16"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
          />
        </svg>
        <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
          <span className="font-semibold">Click to upload</span> or drag and
          drop
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-400">PDF</p>
        {filename && (
          <p className="mt-2 text-sm text-green-600 font-medium">{filename}</p>
        )}
      </div>
      <input
        id="dropzone-file"
        accept=".pdf"
        onChange={handleFileChange}
        type="file"
        className="hidden"
      />
    </label>
  );
};
