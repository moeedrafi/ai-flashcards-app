import { Link } from "react-router";

export const Footer = () => {
  return (
    <footer className="bg-custom-black text-custom-white">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-12 px-8 md:px-16 lg:px-32">
        {/* COMPANY INFO */}
        <div className="space-y-4">
          <h3 className="text-3xl font-bold">Brand</h3>
          <p className="text-gray-300 text-sm">
            Helping students learn more effectively with AI-powered flashcards
            and study tools.
          </p>
        </div>

        {/* LINKS */}
        <div className="space-y-4">
          <h3 className="text-3xl font-semibold">Links</h3>

          <div className="flex flex-col gap-2">
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Home
            </Link>
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Features
            </Link>
            <Link
              to="/"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Pricing
            </Link>
            <Link
              to="/flashcards"
              className="text-gray-300 hover:text-white transition-colors text-sm"
            >
              Generate Flashcards
            </Link>
          </div>
        </div>

        {/* CONTACT US */}
        <div className="space-y-4">
          <h3 className="text-3xl font-semibold">Contact</h3>
          <ul className="space-y-3">
            <li className="flex gap-2">
              <img
                src="/telephone.svg"
                alt="telephone"
                className="h-5 w-5 mt-1"
              />
              <span className="text-gray-400">+1 (555) 123-4567</span>
            </li>
            <li className="flex gap-2">
              <img src="/email.svg" alt="email" className="w-5 h-5 mt-1" />
              <span className="text-gray-400">support@flashcardai.com</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-gray-800 py-8 md:px-16 lg:px-32 flex flex-col md:flex-row justify-between items-center">
        <p className="text-gray-400">
          &copy; {new Date().getFullYear()} FlashcardAI. All rights reserved
        </p>

        <div className="flex space-x-6 mt-4 md:mt-0">
          <Link
            to="#"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            Privacy Policy
          </Link>
          <Link
            to="#"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            Terms of Service
          </Link>
          <Link
            to="#"
            className="text-gray-400 hover:text-white transition-colors text-sm"
          >
            Cookie Policy
          </Link>
        </div>
      </div>
    </footer>
  );
};
