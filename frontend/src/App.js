import "./App.css";
import { Footer } from "./components/Footer";
import { SideBar } from "./components/SideBar";
import { HomePage } from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <SideBar />
      <HomePage />
      {/* <Footer/> */}
    </div>
  );
}

export default App;
