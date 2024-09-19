import React from 'react';
import { Home } from "./Components/Home";
import { Sidebar } from "./Components/Sidebar";
import { Widgets } from "./Components/Widgets";
import GlobalStyles from "./styles/StylesGlobal";

const MainPage = () => {
  return (
    <div className="App">
      {/* Sidebar */}
      <Sidebar />
      {/* Home */}
      <Home />
      {/* Widgets */}
      <Widgets />
      {/* Global Styles */}
      <GlobalStyles />
    </div>
  );
};

export default MainPage;