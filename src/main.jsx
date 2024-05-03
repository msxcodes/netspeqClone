import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import {
  BrowserRouter,
  RouterProvider,
  createBrowserRouter,
} from "react-router-dom";
import LoginPage from "./Pages/LoginPage.jsx";
import HomePage from "./Pages/HomePage.jsx";
import IndustryPage from "./Pages/IndustryPage.jsx";
import ContactUsPage from "./Pages/ContactUsPage.jsx";
import AboutUsPage from "./Pages/AboutUsPage.jsx";
import CareerPage from "./Pages/CareerPage.jsx";
import Education from "./industries/Education.jsx";
import HealthCare from "./industries/HealthCare.jsx";
import IT from "./industries/IT.jsx";
import EGovernance from "./industries/EGovernance.jsx";
import Telecommunication from "./industries/Telecommunication.jsx";
import IndustryDetails from "./industries/IndustryDetails.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        element: <IndustryPage />,
        children: [
          {
            path: "/industries",
            element: <Education />,
          },
          {
            path: "/industries/health",
            element: <HealthCare />,
          },
          {
            path: "/industries/it",
            element: <IT />,
          },
          {
            path: "/industries/governance",
            element: <EGovernance />,
          },
          {
            path: "/industries/telecommunication",
            element: <Telecommunication />,
          },
        ],
      },
      {
        path: "/contactus",
        element: <ContactUsPage />,
      },
      {
        path: "/aboutus",
        element: <AboutUsPage />,
      },
      {
        path: "/career",
        element: <CareerPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App />
    </RouterProvider>
  </React.StrictMode>
);
