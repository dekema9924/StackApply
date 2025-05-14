
const Myjobdb = require('../../models/MyjobsModel')



const getMyJobs = async (req, res) => {

    try {

        // Query all jobs for the user
        const jobs = await Myjobdb.find({ user: req.user.id });

        // Check if jobs are found
        // if (!jobs || jobs.length === 0) {
        //     return res.status(400).json({ message: 'No jobs found for this user' });
        // }

        return res.status(200).json({ myJobs: jobs })
    } catch (error) {
        console.error("Error fetching jobs:", error);
        res.status(500).json({ message: 'Server error' });
    }


}



module.exports = getMyJobs