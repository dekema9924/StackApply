


export const Config = {
    apiUrl: import.meta.env.DEV
        ? 'http://localhost:3000'
        : 'https://stackapply.onrender.com'
};

console.log({ url: Config.apiUrl })


console.log({ prod: import.meta.env.MODE })
console.log({ url: Config.apiUrl })


