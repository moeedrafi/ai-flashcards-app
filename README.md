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

- Responsive Layout: Fully optimized for desktop and mobile devices.
- Home Page: Dynamic and interactive user feed.
- Stories: Stories: Create, view, and manage stories in real-time using Optimistic UI.
- Story Visibility: Control who can view specific stories.
- Post Management: Add, update, and delete posts with images.
- Post Interactions: Like and comment on posts in real-time using Optimistic UI.
- Commenting System: Nested comments and threaded replies in real-time using Optimistic UI.
- User Profile: View and update dynamic user data.
- Friendship Management: Follow, unfollow, and block users in real-time using Optimistic UI.
- Optimistic UI: Instant feedback for user actions without page reload.
- Performance Optimization: Prisma indexes (@@index) on key fields like StoryViews ensure fast and efficient data retrieval.

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
   /backend
   <pre>PORT=8000
      MONGODB_URL=mongodb_url
      CORS_ORIGIN=*
      NODE_ENV=development</pre>
   /frontend
   <pre></pre>
5. Run both frontend and backend:
   <pre>npm run dev</pre>
