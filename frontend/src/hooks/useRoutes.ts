import { useLocation } from "react-router";

export const useRoutes = () => {
  const location = useLocation();

  const routes = [
    {
      label: "Home",
      href: "/",
      active: location.pathname === "/",
    },
    {
      label: "Flashcards",
      href: "/flashcards",
      active: location.pathname === "/flashcards",
    },
    {
      label: "Features",
      href: "/",
      active: location.pathname === "#features",
    },
  ];

  return routes;
};
