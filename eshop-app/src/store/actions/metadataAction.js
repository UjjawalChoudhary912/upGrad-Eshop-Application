import {fetchAllProducts} from "../../api/productAPIs";
import {fetchAllCategories} from "../../api/categoryAPIs";

export const setFilter = (category) => {
	return {
		type: "SET_FILTER",
		category: category,
	}
};

export const clearFilter = () => {
	return {
		type: "CLEAR_FILTER",
	}
};

export const initCatalog = (accessToken) => dispatch => {
	Promise.all([fetchAllCategories(accessToken), fetchAllProducts(accessToken)]).then(json => {
		dispatch({
			type: "INIT_CATALOG",
			categories: json[0].data,
			products: json[1].data,
		});
	}).catch(() => {
		dispatch({
			type: "INIT_CATALOG",
			categories: ["ALL"],
			products: [],
		});
	});
};

export const setSortBy = (sortBy) => {
	return {
		type: "SET_SORTING",
		sortBy: sortBy,
	}
};
