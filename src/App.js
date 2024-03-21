import Home from "./components/Home";
import Contact from "./components/Contact";
import { Footer } from "./components/Footer";
import Navbar from "./components/Navbar";
import Work from "./components/Work";
import { About } from "./components/About";


function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
