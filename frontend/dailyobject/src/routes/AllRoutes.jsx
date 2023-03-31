import React from "react";
import { Routes, Route } from "react-router-dom";
import { AddProduct } from "../admin/pages/AddProduct";
import { Product } from "../admin/pages/Product";
import { Dashboard } from "../admin/pages/Dashboard";
import { EditProduct } from "../admin/pages/EditProduct";
import Home from "../pages/Home/Home";
import AllProducts from "../pages/Product/AllProducts";
import { NotFoundImage } from "../components/404/404";
import { ProductDetails } from "../pages/Productdetails";
import { Login } from "../pages/Login/login";
import Search from "../pages/Search/Search";
export const AllRoutes = () => {
	return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/products" element={<AllProducts />} />
            <Route path="/productdetails/:id" element={<ProductDetails />} />
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/product" element={<Product />} />
            <Route path="/admin/product/add" element={<AddProduct />} />
            <Route path="/admin/product/edit/:id" element={<EditProduct />} />
            <Route path="/search" element={<Search />} />
            <Route path="*" element={<NotFoundImage />} />
        </Routes>
    );
};
