import Navbar from "./components/ui/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Credentials from "./sections/Credentials";
import Projects from "./sections/Projects";
import Skills from "./sections/Skills";

function App() {
    return (
        <>
            <Navbar />
            <About />
            <Projects />
            <Skills />
            <Credentials />
            <Contact />
        </>
    );
}

export default App;
