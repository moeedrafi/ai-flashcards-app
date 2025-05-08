import fs from "fs";
import { PDFLoader } from "@langchain/community/document_loaders/fs/pdf";

import { AI } from "../utils/gemini.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import { asyncHandler } from "../utils/asyncHandler.js";

const getFlashcard = asyncHandler(async (req, res) => {});

const createFlashcard = asyncHandler(async (req, res) => {
  const filePath = req.file?.path;
  if (!filePath) {
    throw new ApiError(400, "File is missing");
  }

  const loader = new PDFLoader(filePath);
  const docs = await loader.load();
  console.log("Page two: ", docs[1].pageContent);

  fs.unlinkSync(filePath);

  return res.status(201).json(new ApiResponse(200, {}, "AI WORKING"));
});

const editFlashcard = asyncHandler(async (req, res) => {});

export { getFlashcard, createFlashcard, editFlashcard };

// const response = await AI.models.generateContent({
//   model: "gemini-2.0-flash",
//   contents: prompt,
// });
