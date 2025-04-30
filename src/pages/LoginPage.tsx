import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from 'react-router-dom';

const LoginPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-md shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Iniciar Sesión</h2>
                <form>
                    <div className="mb-4">
                        <Label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Correo Electrónico
                        </Label>
                        <Input
                            type="email"
                            id="email"
                            placeholder="Tu correo electrónico"
                        />
                    </div>
                    <div className="mb-6">
                        <Label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
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
                            onClick={() => alert('Simulando inicio de sesión')}
                        >
                            Iniciar Sesión
                        </Button>
                        <Link to="/register" className="inline-block align-baseline font-semibold text-sm text-blue-500 hover:text-blue-800">
                            ¿No tienes cuenta? Regístrate
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;