import { useMemo } from "react";
import { useLocation } from "react-router";

export const useRoutes = () => {
  const location = useLocation();

  const routes = useMemo(
    () => [
      {
        label: "Home",
        href: "/",
        active: location.pathname === "/",
      },
      {
        label: "Generate Flashcards",
        href: "/flashcards",
        active: location.pathname === "/flashcards",
      },
    ],
    [location.pathname]
  );

  return routes;
};
