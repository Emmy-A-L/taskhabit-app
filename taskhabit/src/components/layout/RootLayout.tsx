import { useState } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "react-hot-toast";
import LoginModal from "../auth/LoginModal";

export default function RootLayout() {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar onLoginClick={() => setIsLoginModalOpen(true)} />
      {isLoginModalOpen && (
        <LoginModal onClose={() => setIsLoginModalOpen(false)} isOpen={isLoginModalOpen} />
      )}

      <main className="flex-grow">
        <Outlet />
      </main>

      <Footer />

      <Toaster
        position="top-center"
        toastOptions={{
          duration: 3000,
          className: "bg-white dark:bg-gray-800 text-gray-900 dark:text-white",
        }}
      />
    </div>
  );
}
