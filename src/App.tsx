import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import BookPage from "./pages/BookPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import HomePage from "./pages/HomePage";
import LandingPage from "./pages/LandingPage";
import GlobalBreadcrumbs from "@/components/navigation/GlobalBreadCrumbs";
import LoginPage from "./pages/LoginPage"; 
import RegisterPage from "./pages/RegisterPage"; 

function App() {
  const location = useLocation();
  const isLandingPage = location.pathname === "/";
  const isRegisterPage = location.pathname === "/register";
  const isLoginPage = location.pathname === "/login";

  return (
    <div className="flex flex-col min-h-svh">
      <Navbar />
      <div className="flex-grow">
        {!isLandingPage && !isRegisterPage && !isLoginPage  && <GlobalBreadcrumbs />}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/books/:bookId" element={<BookPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/login" element={<LoginPage />} />{" "}
          <Route path="/register" element={<RegisterPage />} />{" "}
        </Routes>
      </div>
    </div>
  );
}

export default App;
