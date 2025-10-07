import React, { useEffect, useState } from "react";
import Sidebar from "./components/Sidebar";
import Dashboard from "./pages/Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import Investment from "./pages/Investment";
import WithdrawPage from "./pages/WithdrawPage";
import { Toaster } from "react-hot-toast";
import SignupPage from "./pages/SignupPage";
import { useLocation } from "react-router-dom";
import Header from "./components/Header";
import SigninPage from "./pages/SigninPage";
import ForgotPasswordPage from "./pages/ForgotPassword";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import FaqPage from "./pages/FaqPage";
import Testimonies from "./pages/Testimonies";
import ContactPage from "./pages/ContactPage";

import LoadingSpinner from "./components/LoadingSpinner";

import { useAuthStore } from "./store/authStore";

// protect routes that require authentication
const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useAuthStore();

  if (!isAuthenticated) {
    return <Navigate to="/signin" replace />;
  }

  return children;
};

// redirect authenticated users to the home page
const RedirectAuthenticatedUser = ({ children }) => {
  const { isAuthenticated } = useAuthStore();

  if (isAuthenticated) {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
};

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return null;
};

function App() {
  const [isExpanded, setIsExpanded] = useState(false);
  const { isCheckingAuth, checkAuth } = useAuthStore();

  const location = useLocation();

  const isDashboard =
    location.pathname === "/dashboard" ||
    location.pathname === "/investments" ||
    location.pathname === "/withdraw";

  useEffect(() => {
    setIsExpanded(false);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    console.log('change')
  }, [location.pathname]);

  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  if (isCheckingAuth) return <LoadingSpinner />;

  return (
    <div
      className={`${
        isDashboard && "flex"
      } relative h-screen overflow-hidden`}
    >
      {(isDashboard && (
        <Sidebar isExpanded={isExpanded} setIsExpanded={setIsExpanded} />
      )) || <Header />}

      <div
        className={`overflow-y-auto w-full h-screen bg-white transition-all duration-300 ease-in-out ${
          isDashboard && "pl-13 lg:pl-0"
        }`}
      >
        {isExpanded && isDashboard && (
          <div className="absolute block lg:hidden inset-0 bg-black/60 z-40"></div>
        )}

        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/faq" element={<FaqPage />} />
          <Route path="/testimonies" element={<Testimonies />} />
          <Route path="/contact" element={<ContactPage />} />

          <Route
            path="/signup"
            element={
              <RedirectAuthenticatedUser>
                <SignupPage />
              </RedirectAuthenticatedUser>
            }
          />
          <Route
            path="/signin"
            element={
              <RedirectAuthenticatedUser>
                <SigninPage />
              </RedirectAuthenticatedUser>
            }
          />
          <Route
            path="/forgot-password"
            element={
              <RedirectAuthenticatedUser>
                <ForgotPasswordPage />
              </RedirectAuthenticatedUser>
            }
          />

          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/investments"
            element={
              <ProtectedRoute>
                <Investment />
              </ProtectedRoute>
            }
          />
          <Route
            path="/withdraw"
            element={
              <ProtectedRoute>
                <WithdrawPage />
              </ProtectedRoute>
            }
          />

          {/* Catch all unmatched routes */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </div>

      <Toaster />
    </div>
  );
}

export default App;
