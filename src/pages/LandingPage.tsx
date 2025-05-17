import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const handleSearch = () => {
    navigate("/collection");
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onSearch={handleSearch} />

      <main className="flex-grow flex flex-col">
        <section className="hero-section flex-1 flex flex-col items-center justify-center px-4 py-20 bg-cream-50">
          <div className="max-w-4xl text-center">
            <h1 className="font-serif text-5xl md:text-6xl font-bold text-primary mb-6 animate-fade-in">
              Relatos de papel
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-fade-in">
              Descubre mundos infinitos a través de nuestra cuidadosa selección
              de libros para todos los gustos y edades
            </p>
            <div className="animate-fade-in">
              <Button
                onClick={handleSearch}
                size="lg"
                className="bg-primary text-primary-foreground hover:bg-primary/90 text-lg px-8 py-6 h-auto"
              >
                Explorar nuestra colección
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
