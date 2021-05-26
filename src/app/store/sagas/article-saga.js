import * as actions from "../actions";
import { put, takeLatest } from "redux-saga/effects";

const mockArticleList = [
	{
		id: "1",
		name: "Dairy Milk silk",
		category: "food",
		status: "success",
		statusMessage: "good",
		ean: "123",
		sapDescription:
			"Cadbury Dairy Milk Chocolate is for those everyday moments of joy that you want to share with your near and dear ones with something sweet. Just one bite will take you into the world of warmth, happiness, and spontaneous fun. Rich, smooth and creamy, this Classic Chocolate will give you more joy in every bite. Buy this product online now!",
		assortmentType: "assort",
		categoryL1: "L1",
		categoryL2: "L2",
		categoryL3: "L3",
		sapBrandName: "sap its good",
		ecommerceBrandName: "Cadbury",
		packVariety: "green",
		quantity: "1",
		unit: "1",
		totalShelfLife: "24 months",
		priceType: "rupees",
		isApproved: false,
		isRejected: false,
		images: [
			{
				id: "1",
				name: "cadbury_1",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/490000241/cadbury-dairy-milk-chocolate-bar-12-g-0-20210120.jpg",
			},
			{
				id: "2",
				name: "cadbury_2",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/490000241/cadbury-dairy-milk-chocolate-bar-12-g-1-20210120.jpg",
			},
			{
				id: "3",
				name: "cadbury_3",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/490000241/cadbury-dairy-milk-chocolate-bar-12-g-2-20200621.jpeg",
			},
			{
				id: "4",
				name: "cadbury_4",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/490000241/cadbury-dairy-milk-chocolate-bar-12-g-13-20210120.jpg",
			},
			{
				id: "5",
				name: "cadbury_5",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/490000241/cadbury-dairy-milk-chocolate-bar-12-g-14-20210120.jpg",
			},
			{
				id: "6",
				name: "cadbury_6",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/490000241/cadbury-dairy-milk-chocolate-bar-12-g-15-20210120.jpg",
			},
			{
				id: "7",
				name: "cadbury_7",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/490000241/cadbury-dairy-milk-chocolate-bar-12-g-16-20210120.jpg",
			},
		],
		timeStamp: "",
		errorImageId: [],
	},
	{
		id: "2",
		name: "Whole wheat",
		category: "food",
		status: "failure",
		statusMessage: "good",
		ean: "456",
		sapDescription:
			"Aashirvaad Whole Wheat Atta provides the goodness of health in every bite. This product incorporates many benefits of wheat and lets your body maintain a nutrient balance. It is made of nutritious wheat grains. Also, it has a sweet taste that gives you fuller and softer rotis, every single time. Buy Aashirvaad Whole Wheat Atta online now.Despite our attempts to provide you with the most accurate information possible, the actual packaging, ingredients and color of the product may sometimes vary.",
		sortmentType: "assort",
		categoryL1: "L1",
		categoryL2: "L2",
		categoryL3: "L3",
		sapBrandName: "sap its good",
		ecommerceBrandName: "Ashirvaad",
		packVariety: "green",
		quantity: "1",
		unit: "1",
		totalShelfLife: "3 months",
		priceType: "rupees",
		isApproved: true,
		isRejected: false,
		images: [
			{
				id: "1",
				name: "cadbury_1",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/490000041/aashirvaad-whole-wheat-atta-10-kg-0-20201117.jpg",
			},
			{
				id: "2",
				name: "cadbury_2",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/490000041/aashirvaad-whole-wheat-atta-10-kg-1-20201117.jpg",
			},
			{
				id: "3",
				name: "cadbury_3",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/490000041/aashirvaad-whole-wheat-atta-10-kg-13-20201117.jpg",
			},
			{
				id: "4",
				name: "cadbury_4",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/490000041/aashirvaad-whole-wheat-atta-10-kg-14-20201117.jpg",
			},
			{
				id: "5",
				name: "cadbury_5",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/490000041/aashirvaad-whole-wheat-atta-10-kg-15-20201117.jpg",
			},
			{
				id: "6",
				name: "cadbury_6",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/490000041/aashirvaad-whole-wheat-atta-10-kg-16-20201117.jpg",
			},
		],
		timeStamp: "",
		errorImageId: ["2"],
	},
	{
		id: "3",
		name: "rusk",
		category: "food",
		status: "success",
		statusMessage: "good",
		ean: "123",
		sapDescription:
			"Start your day with a punch of flavors that taste best when soaked in the goodness of milk or tea by choosing to buy Parle Real Elaichi Premium Rusk. Take a bite of this crunchy rusk for an energy-filled time. This rusk is a healthy snack that makes you feel light and active the whole day. It is best enjoyed with a cup of hot tea or coffee.",
		assortmentType: "assort",
		categoryL1: "L1",
		categoryL2: "L2",
		categoryL3: "L3",
		sapBrandName: "sap its good",
		ecommerceBrandName: "Parle",
		packVariety: "green",
		quantity: "1",
		unit: "1",
		totalShelfLife: "4 months",
		priceType: "rupees",
		isApproved: false,
		isRejected: false,
		images: [
			{
				id: "1",
				name: "cadbury_1",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/491107999/parle-real-elaichi-premium-rusk-200-g-0-20201113.jpg",
			},
			{
				id: "2",
				name: "cadbury_2",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/491107999/parle-real-elaichi-premium-rusk-200-g-1-20201113.jpg",
			},
			{
				id: "3",
				name: "cadbury_3",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/491107999/parle-real-elaichi-premium-rusk-200-g-2-20201113.jpg",
			},
			{
				id: "4",
				name: "cadbury_4",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/491107999/parle-real-elaichi-premium-rusk-200-g-3-20201113.jpg",
			},
			{
				id: "5",
				name: "cadbury_5",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/491107999/parle-real-elaichi-premium-rusk-200-g-13-20201113.jpg",
			},
			{
				id: "6",
				name: "cadbury_6",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/491107999/parle-real-elaichi-premium-rusk-200-g-15-20201113.jpg",
			},
			{
				id: "7",
				name: "cadbury_7",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/491107999/parle-real-elaichi-premium-rusk-200-g-16-20201113.jpg",
			},
		],
		timeStamp: "",
		errorImageId: [],
	},
	{
		id: "4",
		name: "Basmati Rice",
		category: "food",
		status: "success",
		statusMessage: "good",
		ean: "123",
		sapDescription:
			"India Gate Dubar Basmati Rice is everyday rice that makes each meal memorable. It is ideal for people who like to include rice in their daily meal consumption. Aromatic, flavorful, and defined by its distinctly long and slender grains, India Gate Dubar Basmati Rice turns every meal into comfort food. No matter what you’re in the mood for, India Gate Dubar Basmati Rice leaves you feeling satisfied and nourished. Buy India Gate Dubar Basmati Rice online today.",
		assortmentType: "assort",
		categoryL1: "L1",
		categoryL2: "L2",
		categoryL3: "L3",
		sapBrandName: "sap its good",
		ecommerceBrandName: "India gate",
		packVariety: "green",
		quantity: "1",
		unit: "1",
		totalShelfLife: "24 months",
		priceType: "rupees",
		isApproved: false,
		isRejected: false,
		images: [
			{
				id: "1",
				name: "cadbury_1",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/490007361/india-gate-dubar-basmati-rice-5-kg-0-20200904.jpg",
			},
			{
				id: "2",
				name: "cadbury_2",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/490007361/india-gate-dubar-basmati-rice-5-kg-1-20200904.jpg",
			},
			{
				id: "3",
				name: "cadbury_3",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/490007361/india-gate-dubar-basmati-rice-5-kg-2-20200904.jpg",
			},
			{
				id: "4",
				name: "cadbury_4",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/490007361/india-gate-dubar-basmati-rice-5-kg-3-20200904.jpg",
			},
			{
				id: "5",
				name: "cadbury_5",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/490007361/india-gate-dubar-basmati-rice-5-kg-4-20200904.jpg",
			},
			{
				id: "6",
				name: "cadbury_6",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/490007361/india-gate-dubar-basmati-rice-5-kg-5-20200904.jpg",
			},
			{
				id: "7",
				name: "cadbury_7",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/490007361/india-gate-dubar-basmati-rice-5-kg-13-20200904.jpg",
			},
			{
				id: "8",
				name: "cadbury_8",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/490007361/india-gate-dubar-basmati-rice-5-kg-15-20200904.jpg",
			},
			{
				id: "9",
				name: "cadbury_9",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/490007361/india-gate-dubar-basmati-rice-5-kg-16-20200904.jpg",
			},
		],
		timeStamp: "",
		errorImageId: [],
	},
	{
		id: "5",
		name: "Vegetable Oil",
		category: "food",
		status: "success",
		statusMessage: "good",
		ean: "123",
		sapDescription:
			"Fortune Vivo Pro Sugar Conscious Blended Vegetable Oil has unique health benefits than other vegetable oils. It helps in the reduction of bad Cholesterol and balances our eating habits. Buy Fortune Vivo Pro Sugar Conscious Blended Vegetable Oil online now!Despite our attempts to provide you with the most accurate information possible, the actual packaging, ingredients and color of the product may sometimes vary. Please read the label, directions and warnings carefully before use.",
		assortmentType: "assort",
		categoryL1: "L1",
		categoryL2: "L2",
		categoryL3: "L3",
		sapBrandName: "sap its good",
		ecommerceBrandName: "fortune",
		packVariety: "green",
		quantity: "1",
		unit: "1",
		totalShelfLife: "9 months",
		priceType: "rupees",
		isApproved: false,
		isRejected: false,
		images: [
			{
				id: "1",
				name: "cadbury_1",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/491276494/fortune-vivo-pro-sugar-conscious-bledned-vegetable-oil-5-l-can-0-20200921.jpg",
			},
			{
				id: "2",
				name: "cadbury_2",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/491276494/fortune-vivo-pro-sugar-conscious-bledned-vegetable-oil-5-l-can-1-20200921.jpg",
			},
			{
				id: "3",
				name: "cadbury_3",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/491276494/fortune-vivo-pro-sugar-conscious-bledned-vegetable-oil-5-l-can-2-20200921.jpg",
			},
			{
				id: "4",
				name: "cadbury_4",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/491276494/fortune-vivo-pro-sugar-conscious-bledned-vegetable-oil-5-l-can-3-20200921.jpg",
			},
			{
				id: "5",
				name: "cadbury_5",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/491276494/fortune-vivo-pro-sugar-conscious-bledned-vegetable-oil-5-l-can-13-20200921.jpg",
			},
			{
				id: "6",
				name: "cadbury_6",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/491276494/fortune-vivo-pro-sugar-conscious-bledned-vegetable-oil-5-l-can-14-20200921.jpg",
			},
			{
				id: "7",
				name: "cadbury_7",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/491276494/fortune-vivo-pro-sugar-conscious-bledned-vegetable-oil-5-l-can-15-20200921.jpg",
			},
			{
				id: "8",
				name: "cadbury_8",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/491276494/fortune-vivo-pro-sugar-conscious-bledned-vegetable-oil-5-l-can-16-20200921.jpg",
			},
		],
		timeStamp: "",
		errorImageId: [],
	},
	{
		id: "6",
		name: "Brown Bread",
		category: "food",
		status: "success",
		statusMessage: "good",
		ean: "123",
		sapDescription:
			"Make delicious Pizza with Muffets And Tuffets White Bread. This bread is made from finest ingredients that are baked to perfection to make this soft & spongy bread. Go ahead, buy this product online now!",
		assortmentType: "assort",
		categoryL1: "L1",
		categoryL2: "L2",
		categoryL3: "L3",
		sapBrandName: "sap its good",
		ecommerceBrandName: "muffet and tuffets",
		packVariety: "green",
		quantity: "1",
		unit: "1",
		totalShelfLife: "1 day",
		priceType: "rupees",
		isApproved: false,
		isRejected: false,
		images: [
			{
				id: "1",
				name: "cadbury_1",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/491614745/muffets-tuffets-brown-bread-400-g-0-20210210.jpg",
			},
			{
				id: "2",
				name: "cadbury_2",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/491614745/muffets-tuffets-brown-bread-400-g-1-20210210.jpg",
			},
			{
				id: "3",
				name: "cadbury_3",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/491614745/muffets-tuffets-brown-bread-400-g-2-20210210.jpg",
			},
			{
				id: "4",
				name: "cadbury_4",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/491614745/muffets-tuffets-brown-bread-400-g-3-20210210.jpg",
			},
			{
				id: "5",
				name: "cadbury_5",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/491614745/muffets-tuffets-brown-bread-400-g-13-20210210.jpg",
			},
			{
				id: "6",
				name: "cadbury_6",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/491614745/muffets-tuffets-brown-bread-400-g-14-20210210.jpg",
			},
			{
				id: "7",
				name: "cadbury_7",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/491614745/muffets-tuffets-brown-bread-400-g-15-20210210.jpg",
			},
			{
				id: "8",
				name: "cadbury_8",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/491614745/muffets-tuffets-brown-bread-400-g-16-20210210.jpg",
			},
			{
				id: "9",
				name: "cadbury_9",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/491614745/muffets-tuffets-brown-bread-400-g-18-20210210.jpg",
			},
		],
		timeStamp: "",
		errorImageId: [],
	},
	{
		id: "7",
		name: "Choco chip cookies",
		category: "food",
		status: "success",
		statusMessage: "good",
		ean: "123",
		sapDescription:
			"Give in to your sweet cravings with Parle Platina Hide & Seek Chocolate Chip Biscuits. These biscuits are crunchy yet delicate in texture. They are a perfect accompaniment to your tea or coffee. They are prepared using the finest ingredients and its hygienic packaging ensure that it remains fresh over a long period of time. So go ahead, buy Parle Platina Hide & Seek Chocolate Chip Biscuits online today!",
		assortmentType: "assort",
		categoryL1: "L1",
		categoryL2: "L2",
		categoryL3: "L3",
		sapBrandName: "sap its good",
		ecommerceBrandName: "Parle",
		packVariety: "green",
		quantity: "1",
		unit: "1",
		totalShelfLife: "6 months",
		priceType: "rupees",
		isApproved: false,
		isRejected: false,
		images: [
			{
				id: "1",
				name: "cadbury_1",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/491338173/parle-platina-hide-seek-chocolate-chip-cookies-350-g-0-20201118.jpg",
			},
			{
				id: "2",
				name: "cadbury_2",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/491338173/parle-platina-hide-seek-chocolate-chip-cookies-350-g-1-20201118.jpg",
			},
			{
				id: "3",
				name: "cadbury_3",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/491338173/parle-platina-hide-seek-chocolate-chip-cookies-350-g-2-20200621.jpeg",
			},
			{
				id: "4",
				name: "cadbury_4",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/491338173/parle-platina-hide-seek-chocolate-chip-cookies-350-g-3-20200621.jpeg",
			},
			{
				id: "5",
				name: "cadbury_5",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/491338173/parle-platina-hide-seek-chocolate-chip-cookies-350-g-4-20200621.jpeg",
			},
			{
				id: "6",
				name: "cadbury_6",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/491338173/parle-platina-hide-seek-chocolate-chip-cookies-350-g-13-20201118.jpg",
			},
			{
				id: "7",
				name: "cadbury_7",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/491338173/parle-platina-hide-seek-chocolate-chip-cookies-350-g-14-20201118.jpg",
			},
			{
				id: "8",
				name: "cadbury_8",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/491338173/parle-platina-hide-seek-chocolate-chip-cookies-350-g-15-20201118.jpg",
			},
			{
				id: "9",
				name: "cadbury_9",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/491338173/parle-platina-hide-seek-chocolate-chip-cookies-350-g-16-20201118.jpg",
			},
			{
				id: "10",
				name: "cadbury_10",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/491338173/parle-platina-hide-seek-chocolate-chip-cookies-350-g-17-20201118.jpg",
			},
			{
				id: "11",
				name: "cadbury_11",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/491338173/parle-platina-hide-seek-chocolate-chip-cookies-350-g-18-20201118.jpg",
			},
		],
		timeStamp: "",
		errorImageId: [],
	},
	{
		id: "8",
		name: "Amul butter",
		category: "dairy",
		status: "failure",
		statusMessage: "good",
		ean: "123",
		sapDescription:
			"Who doesn't like a chunk of creamy, velvety, smooth and mouth-watering butter? Made with fresh ingredients, Amul Butter is a multi-purpose butter that can be used as a spread on bread, paratha, roti, naan and sandwiches. It also makes an excellent topping for Pav-bhaji, dal, soups, salads, rice as well as a great cooking medium for Paneer Butter Masala, Dal Makhni and a variety of delightful recipes. So what are you waiting for? Buy this product online today!",
		categoryL1: "L1",
		categoryL2: "L2",
		categoryL3: "L3",
		sapBrandName: "sap its good",
		ecommerceBrandName: "amul",
		packVariety: "green",
		quantity: "1",
		unit: "1",
		totalShelfLife: "12 months",
		priceType: "rupees",
		isApproved: false,
		isRejected: false,
		images: [
			{
				id: "1",
				name: "cadbury_1",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/490001392/amul-pasteurised-butter-500-g-carton-0-20210208.jpg",
			},
			{
				id: "2",
				name: "cadbury_2",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/490001392/amul-pasteurised-butter-500-g-carton-1-20210208.jpg",
			},
			{
				id: "3",
				name: "cadbury_3",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/490001392/amul-pasteurised-butter-500-g-carton-2-20210208.jpg",
			},
			{
				id: "4",
				name: "cadbury_4",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/490001392/amul-pasteurised-butter-500-g-carton-3-20210208.jpg",
			},
			{
				id: "5",
				name: "cadbury_5",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/490001392/amul-pasteurised-butter-500-g-carton-4-20210208.jpg",
			},
			{
				id: "6",
				name: "cadbury_6",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/490001392/amul-pasteurised-butter-500-g-carton-5-20210208.jpg",
			},
			{
				id: "7",
				name: "cadbury_7",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/490001392/amul-pasteurised-butter-500-g-carton-13-20210208.jpg",
			},
			{
				id: "8",
				name: "cadbury_8",
				imageUrl:
					"https://www.jiomart.com/images/product/420x420/490001392/amul-pasteurised-butter-500-g-carton-14-20210208.jpg",
			},
		],
		timeStamp: "",
		errorImageId: ["3"],
	},
];

const mockArticleInformation = {
	nutritionalFacts: {
		title: "Nutritional Facts",
		value: {
			energy: "503 kcal",
			protin: "7.8 g",
			carbohydrate: "58.2 g",
			fat: "29.7 g",
			transFat: "0.1 g",
			Sodium: "127 mg",
			dietaryFiber: "15.6 g",
		},
		type: "table",
		imageUrl:
			"https://www.jiomart.com/images/product/420x420/490000241/cadbury-dairy-milk-chocolate-bar-12-g-0-20210120.jpg",
	},
	ingredients: {
		title: "Ingredients",
		value: [
			"Wheat Flour",
			"Chocolate",
			"Edible Vegetable Oil (Palm Oil)",
			" Invert Sugar Syrup",
			"Raising Agents",
			"Cocoa Solids",
			"Edible Common Salt",
			"Emulsifier",
		],
		missingItems: ["Sugar", "Maltodextrin"],
		noMatchFound: ["Raising Agents", "Cocoa Solids"],
		type: "cards",
		imageUrl:
			"https://www.jiomart.com/images/product/420x420/490000241/cadbury-dairy-milk-chocolate-bar-12-g-0-20210120.jpg",
	},
	manufacturerDetails: {
		title: "Manufacturer Details",
		value: {
			name: "Cadbury products",
		},
		type: "table",
		imageUrl:
			"https://www.jiomart.com/images/product/420x420/490000241/cadbury-dairy-milk-chocolate-bar-12-g-0-20210120.jpg",
	},
	contact: {
		title: "Contact",
		value: {
			phone: "1234567890",
			email: "abc@gmail.com",
			website: "http://abc.com",
		},
		type: "table",
		imageUrl:
			"https://www.jiomart.com/images/product/420x420/490000241/cadbury-dairy-milk-chocolate-bar-12-g-0-20210120.jpg",
	},
};

const message = {
	status: "SUCCESS",
};

export function* articleCountSaga(action) {
	try {
		// api call here
		yield put({
			type: actions.GET_ARTICLE_COUNT_RESPONSE,
			data: {
				totalUploaded: 100,
				totalSuccessful: 50,
				totalFailures: 25,
				totalContentExtracted: 15,
			},
		});
	} catch (error) {
		console.log("error", error);
	}
}

export function* articleListSaga(action) {
	const { articleId, category, status, dateRange } = action.data;
	console.log("filterdata", action.data);
	// data filters
	// initial call on view uploads and view contents
	const filterBody = {
		articleId: articleId || [],
		category: category || "",
		status: status || "",
		dateRange: dateRange || "",
	};
	console.log("filterBody", filterBody);
	try {
		// api call here for uploads and content both(differ by url end point) with api data
		// switch ()
		yield put({
			type: actions.GET_ARTICLE_FILTER_RESPONSE,
			data: mockArticleList,
		});
	} catch (error) {
		console.log("error", error);
	}
}

export function* articleInformationSaga(action) {
	const { articleId } = action.data;
	const body = {
		articleId,
	};
	console.log("body", body);
	try {
		yield put({
			type: actions.GET_ARTICLE_INFORMATION_RESPONSE,
			data: mockArticleInformation,
		});
	} catch (error) {
		console.log("error", error);
	}
}

export function* approveAndDeleteArticleSaga(action) {
	const { articleId, approvedStatus } = action.data;
	const body = {
		articleId,
		approvedStatus,
	};
	console.log("body", body);
	try {
		// approve and delete api call
		console.log("approveAndDeleteArticleSaga success");
	} catch (error) {
		console.log("error", error);
	}
}

export function* uploadSaga(action) {
	console.log(action.data);
	const { selectedFile } = action.data;
	console.log(new Date());
	const body = {
		date: new Date(),
		files: selectedFile,
	};
	console.log("body", body);
	try {
		yield put({
			type: actions.UPLOAD_IMAGE_RESPONSE,
			data: message,
		});
	} catch (error) {
		console.log("error", error);
	}
}

export function* articleWatcher() {
	yield takeLatest(actions.GET_ARTICLE_COUNT_REQUEST, articleCountSaga);
	yield takeLatest(actions.GET_ARTICLE_FILTER_REQUEST, articleListSaga);
	yield takeLatest(
		actions.GET_ARTICLE_INFORMATION_REQUEST,
		articleInformationSaga
	);
	yield takeLatest(actions.UPLOAD_IMAGE_REQUEST, uploadSaga);
}
