import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Home } from "@/pages/Home";

function App() {
  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-brand-dark text-brand-light flex flex-col items-center overflow-x-hidden">
        <div className="w-full shrink-0 relative flex flex-col items-start">
          <Home />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;