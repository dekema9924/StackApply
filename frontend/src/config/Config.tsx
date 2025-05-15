

export const Config = {
    apiUrl: import.meta.env.DEV
        ? import.meta.env.VITE_DEV_API_URL
        : import.meta.env.VITE_PROD_API_URL
};