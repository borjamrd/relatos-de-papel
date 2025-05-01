import Navbar from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow page-container flex flex-col items-center justify-center">
        <div className="mb-8 w-full max-w-md p-6 bg-white rounded-lg shadow-md min-w-[300px]">
          <h1 className="font-serif text-3xl font-bold text-primary mb-2">
            Inicia sesión
          </h1>
          <form>
            <div className="mb-4">
              <Label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Correo Electrónico
              </Label>
              <Input
                type="email"
                id="email"
                placeholder="Tu correo electrónico"
              />
            </div>
            <div className="mb-6">
              <Label
                htmlFor="password"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Contraseña
              </Label>
              <Input
                type="password"
                id="password"
                placeholder="Tu contraseña"
              />
            </div>
            <div className="flex items-center justify-between">
              <Button
                type="button"
                onClick={() => alert("Simulando inicio de sesión")}
              >
                Iniciar Sesión
              </Button>
            </div>
            <Link
              to="/register"
              className="inline-block align-baseline font-semibold text-sm mt-3"
            >
              ¿No tienes cuenta? Regístrate
            </Link>
          </form>
        </div>
      </main>
    </div>
  );
};

export default LoginPage;
