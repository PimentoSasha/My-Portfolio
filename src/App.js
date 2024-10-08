import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import SocialLinks from "./components/SocialLinks";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio";
import Experience from "./components/Experience";

function App() {

  return (
    <div>
      <NavBar/>
      <Home/>
      <About/>
      <Experience/>
      <Portfolio/>
      <Contact/>
      <SocialLinks/>
    </div>
  );
}

export default App;
