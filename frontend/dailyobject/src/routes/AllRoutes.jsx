import React from "react";
import { Routes, Route } from "react-router-dom";
import { AddProduct } from "../admin/pages/AddProduct";
import { AllProduct } from "../admin/pages/AllProduct";
import { Dashboard } from "../admin/pages/Dashboard";
import { EditProduct } from "../admin/pages/EditProduct";
import { Home } from "../pages/Home";
export const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />

			<Route path="/admin/dashboard" element={<Dashboard />} />
			<Route path="/admin/product" element={<AllProduct />} />
			<Route path="/admin/product/add" element={<AddProduct />} />
			<Route path="/admin/product/edit/:id" element={<EditProduct />} />
		</Routes>
	);
};
