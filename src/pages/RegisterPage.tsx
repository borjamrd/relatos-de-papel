import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from 'react-router-dom';

const RegisterPage = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-8 rounded-md shadow-md w-96">
                <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Registrarse</h2>
                <form>
                  
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Correo Electrónico
                        </label>
                        <Input
                            type="email"
                            id="email"
                            placeholder="Tu correo electrónico"
                        />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="password" className="block text-gray-700 text-sm font-bold mb-2">
                            Contraseña
                        </label>
                        <Input
                            type="password"
                            id="password"
                            placeholder="Tu contraseña"
                        />
                    </div>
                    <div className="flex items-center justify-between">
                        <Button
                            type="button"
                            onClick={() => alert('Simulando registro')}
                        >
                            Registrarse
                        </Button>
                        <Link to="/login" className="inline-block align-baseline font-semibold text-sm text-blue-500 hover:text-blue-800">
                            ¿Ya tienes cuenta? Inicia sesión
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
