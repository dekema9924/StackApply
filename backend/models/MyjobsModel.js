const mongoose = require('mongoose');

const MyJobSchema = new mongoose.Schema({
    employer_name: {
        type: String,
        required: true
    },
    employer_logo: {
        type: String,
        default: "https://placehold.co/600x400"
    },
    job_id: {
        type: String,
        required: true
    },
    job_location: {
        type: String,
        required: true
    },
    job_title: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Job', MyJobSchema);
