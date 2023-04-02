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
import Signup from "../pages/Signup/Signup";
import Wishlist from "../pages/Wishlists/Wishlist";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import { AdminLogin } from "../admin/pages/AdminLog";
import { AdminSignup } from "../admin/pages/AdminSignup";
import { AdminPrivateRoute } from "../admin/component/AdminPrivateRoute";

export const AllRoutes = () => {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/products/:id" element={<AllProducts />} />
			<Route path="/login" element={<Login />} />
			<Route path="/Signup" element={<Signup />} />
			<Route path="/productdetails/:id" element={<ProductDetails />} />
			<Route
				path="/admin"
				element={
					<AdminPrivateRoute>
						<Dashboard />
					</AdminPrivateRoute>
				}
			/>
			<Route path="/admin/signup" element={<AdminSignup />} />
			<Route
				path="/admin/product"
				element={
					<AdminPrivateRoute>
						<Product />
					</AdminPrivateRoute>
				}
			/>
			<Route path="/admin/login" element={<AdminLogin />} />

			<Route
				path="/admin/product/add"
				element={
					<AdminPrivateRoute>
						<AddProduct />
					</AdminPrivateRoute>
				}
			/>

			<Route
				path="/admin/product/edit/:id"
				element={
					<AdminPrivateRoute>
						<EditProduct />
					</AdminPrivateRoute>
				}
			/>

			<Route path="/search" element={<Search />} />

			<Route path="/wishlist" element={<Wishlist />} />
			<Route path="/cart" element={<Cart />}></Route>
			<Route path="/checkout" element={<Checkout />}></Route>
			<Route path="*" element={<NotFoundImage />} />
		</Routes>
	);
};
