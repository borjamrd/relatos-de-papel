import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Relatos de papel
      </h1>
      <p className="text-lg text-gray-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, repellendus? Doloribus non minima quis amet ipsa ut dolor provident. Corrupti cumque assumenda beatae vitae quia tenetur, praesentium debitis fugiat laudantium?</p>
    </div>
  );
};

export default LandingPage;
