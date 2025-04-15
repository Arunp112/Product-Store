import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./pages/Home";
// import ProductDetail from "./pages/ProductDetail";
import ProductDetail from "./components/ProductDetail";
import MainLayout from "./layouts/MainLayout";

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/product/:id" element={<ProductDetail />} />
          </Route>
        </Routes>
      </Router>
    </ThemeProvider>
  );
}

export default App;
