import Header from "./components/Header";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Certification from "./components/Certification";
import Certificate from "./components/Certificate";

function App() {
  return (
    <div className="bg-white text-black transition-colors duration-500">
      <div className="min-h-screen flex items-center justify-center w-full antialiased">
        <main className="min-h-screen flex flex-col space-y-10 max-w-3xl py-10 px-5 sm:py-20 sm:px-10">
          <Header />
          <About />
          <Experience />
          <Education />
          <Certification />
          <Certificate />
          <Contact />
          <Navbar />
        </main>
      </div>
    </div>
  );
}

export default App;