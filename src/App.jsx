import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import DetailPage from './pages/DetailPage';
import GalleryPage from './pages/GalleryPage';
import ResourcesPage from './pages/ResourcesPage';
import AdminLayout from './pages/admin/AdminLayout';
import AdminLogin from './pages/admin/AdminLogin';
import DashboardOverview from './pages/admin/DashboardOverview';
import AnalyticsDash from './pages/admin/AnalyticsDash';
import ManageProducts from './pages/admin/ManageProducts';
import ManageGallery from './pages/admin/ManageGallery';
import ManageResources from './pages/admin/ManageResources';
import './index.css';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/item/:slug" element={<DetailPage />} />
        <Route path="/gallery" element={<GalleryPage />} />
        <Route path="/resources" element={<ResourcesPage />} />
        <Route path="/resources/:slug" element={<ResourcesPage />} />
        
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<DashboardOverview />} />
          <Route path="analytics" element={<AnalyticsDash />} />
          <Route path="products" element={<ManageProducts />} />
          <Route path="gallery" element={<ManageGallery />} />
          <Route path="resources" element={<ManageResources />} />
        </Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;