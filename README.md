# 🧠 AI Flashcards App

This project is an AI-powered flashcard generator built with React.js (frontend) and Express.js (backend). Users can upload PDF learning materials, and the app automatically extracts content, chunks it using LangChain, and sends it to a Gemini Pro model to generate useful flashcards for studying. Perfect for students, self-learners, and educators looking to automate their revision process.

## Tech Stack

- Frontend: React.js, TailwindCSS
- Backend: Node.js, Express.js
- Database: MongoDB, Mongoose
- Document Parsing and Chunking: LangChain
- LLM: Gemini API

## 🚀 Features

- 📄 Upload PDF files
- 🔍 Extract and chunk text using LangChain
- 🤖 Generate flashcards using Gemini LLM
- ⚡ Fast and responsive UI fully optimized for desktop and mobile devices
- 🔐 Authentication: Secure and seamless auth with JWT

## Things I Learned

- Integrating Gemini API
- LangChain for Document Parsing
- Hosting on Vercel and Render

## Pending

- Loading UI
- Email Verification
- Fetching Flashcard Controller
- Deleting Flashcard Controller
- Adding custom Flashcards
- Mode: Study + Quiz Mode

## Installation & Setup

1. Clone the repository:
   <pre>git clone https://github.com/moeedrafi/ai-flashcards-app.git
   cd ai-flashcards-app</pre>
2. Install dependencies:
   <pre>cd frontend 
     npm install</pre>
   <pre>cd backend 
     npm install</pre>
3. Set up environment variables for frontend and backend (create a .env file):

   backend:
   <pre>PORT=8000
      MONGODB_URL=mongodb_url
      CORS_ORIGIN=*
      NODE_ENV=development</pre>
   frontend:
   <pre></pre>
5. Run both frontend and backend:
   <pre>npm run dev</pre>
