import { Home } from "./Components/Home";
import { Sidebar } from "./Components/Sidebar";
import { Widgets } from "./Components/Widgets";
import GlobalStyles from "./styles/StylesGlobal";

function App() {
  return (
    <>
      <div className="App">
        {/* sidebar */}
        <Sidebar />
        {/*Home */}
        <Home />
        {/*widgets */}
        <Widgets />
        <GlobalStyles />
      </div>
    </>
  );
}

export default App;
