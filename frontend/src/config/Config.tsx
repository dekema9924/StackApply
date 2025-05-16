
if (import.meta.env.MODE === 'production') {
    console.log({ prod: import.meta.env.VITE_PROD_API_URL })
} else {
    console.log({ prod: import.meta.env.VITE_DEV_API_URL })

}


export const Config = {
    apiUrl: import.meta.env.DEV
        ? import.meta.env.VITE_DEV_API_URL
        : import.meta.env.VITE_PROD_API_URL
};

console.log("MODE:", import.meta.env.MODE);
console.log("DEV:", import.meta.env.DEV);
console.log("PROD URL:", import.meta.env.VITE_PROD_API_URL);
console.log("All env vars:", import.meta.env);


