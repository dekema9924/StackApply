const defaultDevApi = 'http://localhost:3000';
const defaultProdApi = 'https://api.production.com';

export const Config = {
    apiUrl: import.meta.env.DEV
        ? import.meta.env.VITE_DEV_API_URL || defaultDevApi
        : import.meta.env.VITE_PROD_API_URL || defaultProdApi
};