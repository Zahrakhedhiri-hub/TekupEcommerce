import { API } from "../config";
import queryString from "query-string";

export const getProducts = (sortBy) => {
	return fetch(`${API}/product/all?sortBy=${sortBy}&order=desc&limit=6`, {
		method: "GET",
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const getCategories = () => {
	return fetch(`${API}/category/all`, {
		method: "GET",
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const getFilteredProducts = (skip, limit, filters = {}) => {
	const data = {
		limit,
		skip,
		filters,
	};
	return fetch(`${API}/product/products/by/search`, {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
		},
		body: JSON.stringify(data),
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => {
			console.log(err);
		});
};

export const list = (params) => {
	const query = queryString.stringify(params);
	console.log("query", query);
	return fetch(`${API}/product/search?${query}`, {
		method: "GET",
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const read = (productId) => {
	return fetch(`${API}/product/${productId}`, {
		method: "GET",
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const listRelated = (productId) => {
	return fetch(`${API}/product/related/${productId}`, {
		method: "GET",
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};

export const getBraintreeClientToken = (userId, token) => {
	return fetch(`${API}/braintree/getToken/${userId}`, {
		method: "GET",
		headers: {
			Accept: "application/json",
			"Content-Type": "application/json",
			Authorization: `Bearer ${token}`,
		},
	})
		.then((response) => {
			return response.json();
		})
		.catch((err) => console.log(err));
};
