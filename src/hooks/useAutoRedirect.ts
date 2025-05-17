import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface UseAutoRedirectOptions {
  delay: number;  
  to: string;      
}

export const useAutoRedirect = ({ delay, to }: UseAutoRedirectOptions): void => {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate(to);
    }, delay);

    return () => clearTimeout(timeout); 
  }, [delay, to, navigate]);
};