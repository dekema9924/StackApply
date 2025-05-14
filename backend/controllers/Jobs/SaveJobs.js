const Myjobdb = require('../../models/MyjobsModel')

const SavedJobs = (req, res, next) => {

    const { id } = req.body;

    const options = {
        method: 'GET',
        url: `${process.env.API_BASE_URL}/job-details`,
        params: {
            job_id: id,
            country: 'us'
        },
        headers: {
            'x-rapidapi-key': process.env.API_KEY,
            'x-rapidapi-host': process.env.API_HOST
        }
    };


    async function fetchData() {
        try {
            const response = await axios.request(options);
            if (response.data) {
                //add bookmark data to db
                await Myjobdb.findOne({ id: id }).then(async (jobExist) => {
                    if (jobExist) return res.status(400).json({ message: 'job already exist' })
                    const saveJob = await Myjobdb.create({
                        job_id: response.data.job_id,
                        job_title: response.data.job_title,
                        employer_name: response.data.employer_name,
                        employer_logo: response.data.employer_logo,
                        job_location: response.data.job_location,
                        user: req.user.id

                    })
                    await saveJob.save().then(() => {
                        res.status(200).json({ message: 'job saved.' })
                    })
                })
            }
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


module.exports = SavedJobs