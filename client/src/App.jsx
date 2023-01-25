import React, { useState, useEffect } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import { logo, sun, moon } from "./assets";
import { Home, CreatePost } from "./pages/index.js";
import alanBtn from "@alan-ai/alan-sdk-web";

const alanKey =
  "f4d76622983eb78a57d0f1ae245cdaf82e956eca572e1d8b807a3e2338fdd0dc/stage";

const App = () => {
  const [themeToggle, setThemeToggle] = useState(false);

  useEffect(() => {
    alanBtn({
      key: alanKey,
      onCommand: ({ command, searchedres, generateline }) => {
        switch (command) {
          case "searchtext":
            console.log(searchedres.value);
            break;
          case "generate":
            console.log(generateline.value);
            break;
          default:
            break;
        }
      },
    });
  }, []);

  const handleThemeToggler = () => {
    setThemeToggle(themeToggle === true ? false : true);
    if (localStorage.theme === "dark" || themeToggle === true) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };
  return (
    <BrowserRouter>
      <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-4 border-b border-b-[#e6ebf4] dark:bg-black dark:text-white">
        <Link to="/">
          <img
            src={logo}
            alt="logo"
            className="w-28 object-contain dark:invert"
          />
        </Link>
        <div className="flex items-center justify-between">
          <input
            type="checkbox"
            id="check-theme"
            className="mr-6 absolute top-[-1000px] left[-1000px]"
          />
          <label
            htmlFor="check-theme"
            className="w-[40px] h-[40px] bg-gray-200 mr-5 rounded-full flex justify-center items-center cursor-pointer transition-all dark:bg-gray-700"
            onClick={handleThemeToggler}
          >
            <img src={themeToggle ? sun : moon} className="h-8 w-8" />
          </label>
          <Link
            to="create-post"
            className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md"
          >
            Create
          </Link>
        </div>
      </header>
      <main className="sm:p-8 px-4 py-8 w-full bg-[#f9fafe] min-h-[calc(100vh-73px)] dark:bg-gray-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create-post" element={<CreatePost />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
};

export default App;
