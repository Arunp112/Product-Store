import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { useState } from "react";

const MainLayout = () => {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <div className="min-h-screen flex flex-col dark:bg-gray-900 dark:text-white">
      <Header onSearch={setSearchTerm} />

      <main className="flex-grow">
        <Outlet context={{ searchTerm }} />
      </main>
      <Footer />
    </div>
  );
};

export default MainLayout;
