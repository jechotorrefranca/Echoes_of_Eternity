import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Gameplay from "./pages/Gameplay";
import Prompting from "./pages/Prompting";
import TitleScreen from "./pages/TitleScreen";

const router = createBrowserRouter([
  {
    path: "/",
    element: <TitleScreen />,
  },
  {
    path: "/game",
    element: <Gameplay />,
  },
  {
    path: "/prompt",
    element: <Prompting />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
