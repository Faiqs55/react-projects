const appwriteURL = import.meta.env.VITE_APPWRITE_URL;
const appwriteID = import.meta.env.VITE_APPWRITE_PROJECT_ID;
const databaseID = import.meta.env.VITE_APPWRITE_DATABASE_ID;
const reviewsID = import.meta.env.VITE_APPWRITE_REVIEWS_ID;
const productsID = import.meta.env.VITE_APPWRITE_PRODUCTS_ID;
const categoriesID = import.meta.env.VITE_APPWRITE_CATEGORIES_ID;

export const envVARS = {appwriteURL, appwriteID, databaseID, reviewsID, productsID, categoriesID}