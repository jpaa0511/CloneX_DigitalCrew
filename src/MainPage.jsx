import React from "react";
import { Home } from "./Components/Home";
import { Sidebar } from "./Components/Sidebar";
import { Widgets } from "./Components/Widgets";
import GlobalStyles from "./styles/StylesGlobal";

const MainPage = () => {
  return (
    <>
      <GlobalStyles />
      <div className="App">
        <Sidebar />
        <Home />
        <Widgets />
      </div>
    </>
  );
};

export default MainPage;
