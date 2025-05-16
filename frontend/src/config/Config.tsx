


export const Config = {
    apiUrl: import.meta.env.DEV
        ? 'http://localhost:3000'
        : 'https://stackapply.onrender.com'
};

console.log({ url: Config.apiUrl })


