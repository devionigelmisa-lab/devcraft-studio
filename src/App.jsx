import { Routes, Route, Navigate } from "react-router-dom";
import { CartProvider } from "./utils/CartContext";
import MainLayout from "./layouts/mainlayout";
import AdminLayout from "./layouts/AdminLayout";
import Dashboard from "./pages/frontpages/dashboard";
import Cart from "./pages/frontpages/cart";
import Checkout from "./pages/frontpages/checkout";
import ProductDetail from "./pages/frontpages/productdetail";
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