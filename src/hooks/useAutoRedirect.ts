import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface UseAutoRedirectOptions {
    delay: number;  //Tiempo en milisegundos
    to: string;     //Ruta destino a donde
}

export const useAutoRedirect = ({ delay, to }: UseAutoRedirectOptions): number => {
    const navigate = useNavigate();
    const [counter, setCounter] = useState(Math.ceil(delay / 1000));
    
    useEffect(() => {
        if (counter <= 0) {
            navigate(to);
            return;
        }

        const timeout = setTimeout(() => {
            setCounter(counter - 1);
        }, 1000);

        return () => clearTimeout(timeout);
    },  [counter, navigate, to]);
    
    return counter;
};