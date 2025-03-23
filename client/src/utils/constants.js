
export const HOST = import.meta.env.VITE_SERVER_URL

export const AI_ROUTES = `${HOST}/api/ai`
export const INVESTMENT_AI_ROUTE = `${AI_ROUTES}/investmentRecommendation`;

export const AUTH_ROUTES_REGISTRAION = `${HOST}/api/register/register`;

export const CUSTOMER_ROUTES_REGISRATION = `${HOST}/api/consumer/cregister`;
export const CUSTOMER_ROUTES_LOGIN = `${HOST}/api/consumer/clogin`;

export const CONFIRM_PAYMENT = `${HOST}/api/cart/checkout`

export const GET_ALL_CROPS = `${HOST}/api/crop/search`;
export const LIST_CROP_ROUTE = `${HOST}/api/crop/listingcrops`;

export const GET_ALL_LISTING = `${HOST}/api/product/all-products`
export const GET_MORE_FROM_FARMER = `${HOST}/api/product/seller`

export const GET_ALL_FARMERS = `${HOST}/api/pre-orders/allFarmerDatas`

export const CROP_TYPES = ["Fruit", "Vegetable", "Grain", "Herb", "Dry Fruit"];
export const PRICE_RANGES = [
  [0, 100],
  [101, 500],
  [501, 1000],
  [1001, 5000]
];
export const QUANTITIES_TYPES = [1, 5, 10, 20, 50];