import { Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./utils/CartContext";
import MainLayout from "./layouts/MainLayout";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/frontpages/Dashboard";
import Cart from "./pages/frontpages/Cart";
import Checkout from "./pages/frontpages/Checkout";
import ProductDetail from "./pages/frontpages/ProductDetail";
import CustomRequest from "./pages/frontpages/CustomRequest";

import AdminDashboard from "./pages/adminpages/AdminDashboard";
import AboutPage from "./pages/adminpages/AboutPage";

export default function App() {
  return (
    <CartProvider>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="cart" element={<Cart />} />
          <Route path="checkout" element={<Checkout />} />
          
  
          <Route path="product/:id" element={<ProductDetail />} />
          
          <Route path="custom-request" element={<CustomRequest />} />
          <Route path="custom-request/:id" element={<CustomRequest />} />
        </Route>

   
        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<Navigate to="/admin/dashboard" replace />} />
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="about" element={<AboutPage />} />
        </Route>

  
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </CartProvider>
  );
}