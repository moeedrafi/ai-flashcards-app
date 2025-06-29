import { PDFLoader } from "@langchain/community/document_loaders/blob/pdf";
import { RecursiveCharacterTextSplitter } from "@langchain/textsplitters";

export const extractChunks = async (buffer) => {
  try {
    const blob = new Blob([buffer], { type: "application/pdf" });
    const loader = new PDFLoader(blob);
    const docs = await loader.load();

    const splitter = new RecursiveCharacterTextSplitter({
      chunkSize: 500,
      chunkOverlap: 100,
    });

    return await splitter.splitDocuments(docs);
  } catch (error) {
    console.log(error);
  }
};
