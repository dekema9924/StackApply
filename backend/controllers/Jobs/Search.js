
const axios = require('axios');


const SearchJobs = (req, res, next) => {
    const { query } = req.body

    let options = {
        method: 'GET',
        url: `${process.env.API_BASE_URL}/search`,
        params: {
            query: query,
            page: 1,
            num_pages: 20,
            country: 'us',
            language: 'en',
            date_posted: 'week'
        },
        headers: {
            'x-rapidapi-key': process.env.API_KEY,
            'x-rapidapi-host': process.env.API_HOST
        }
    };

    async function fetchData() {
        try {
            const response = await axios.request(options);
            if (response.data) return res.status(200).json(response.data)
            return res.status(400).json({ message: "API error" })
        } catch (error) {
            if (error.response && error.response.status === 429) {
                // API limit exceeded
                return next({
                    statusCode: 429,
                    message: "API limit reached. Please try again later."
                });
            }

            // Other errors
            return next({
                statusCode: error.response?.status || 500,
                message: error.message || "Server error"
            });
        }
    }
    fetchData()
}


module.exports = SearchJobs