import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import axios from "axios";
import { Config } from "../config/Config";
import toast from "react-hot-toast";

interface JobData {
    job_title: string;
    job_employment_type: string;
    job_id: string;
    job_benefits: string[];
    job_posted_at: string;
    job_apply_link: string;
    job_salary: string | null;
}

const jobsPerPage = 8;

function Alljobs() {
    const [isLoading, setIsLoading] = useState(false);
    const [jobsData, setJobsData] = useState<JobData[]>([
        {
            job_title: "Frontend Developer",
            job_employment_type: "Full-time",
            job_id: "JID-9f827b1c-d8b2-4af6-b214-0031",
            job_benefits: ["Health Insurance", "401(k)", "Remote Work", "Stock Options"],
            job_posted_at: "2 weeks ago",
            job_apply_link: "https://jobs.devcompany.com/apply/frontend-developer",
            job_salary: null,
        },
        {
            job_title: "Backend Engineer",
            job_employment_type: "Part-time",
            job_id: "JID-bc21fa45-1c34-472b-bd6d-9940",
            job_benefits: ["Flexible Hours", "Paid Time Off"],
            job_posted_at: "5 days ago",
            job_apply_link: "https://jobs.devcompany.com/apply/backend-engineer",
            job_salary: null,
        },
        {
            job_title: "UX Designer",
            job_employment_type: "Contract",
            job_id: "JID-4a6112d3-ffa0-49d3-83fd-218a",
            job_benefits: ["Remote Work", "Wellness Programs"],
            job_posted_at: "1 month ago",
            job_apply_link: "https://jobs.devcompany.com/apply/ux-designer",
            job_salary: null,
        },
        {
            job_title: "DevOps Engineer",
            job_employment_type: "Remote",
            job_id: "JID-12345678-1234-1234-1234-abcdef",
            job_benefits: ["Stock Options", "Paid Training"],
            job_posted_at: "3 days ago",
            job_apply_link: "https://jobs.devcompany.com/apply/devops-engineer",
            job_salary: "$60/h",
        },

    ]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        // setIsLoading(true);
        axios
            .get(`${Config.apiUrl}/api/jobs`)
            .then((response) => {
                setJobsData(response.data.data || []);
                setIsLoading(false);
            })
            .catch((error) => {
                const msg = error.response?.data?.error || "Api Limit reached";
                toast.error(msg);
                setIsLoading(false);
            });
    }, []);

    const totalPages = Math.ceil(jobsData.length / jobsPerPage);
    const indexOfLastJob = currentPage * jobsPerPage;
    const indexOfFirstJob = indexOfLastJob - jobsPerPage;
    const currentJobs = jobsData.slice(indexOfFirstJob, indexOfLastJob);

    if (isLoading) {
        return <Loading />;
    }

    if (jobsData.length === 0) {
        return <p className="text-center mt-8">No jobs found.</p>;
    }

    return (
        <div className="flex flex-col gap-4 p-4">
            {currentJobs.map((job, indx) => (
                <Link
                    key={indx}
                    to={`/jobs/${job.job_id}`}
                    className="block rounded border border-gray-700 p-4 hover:shadow-lg transition"
                >
                    <h1 className="font-bold text-lg">{job.job_title}</h1>
                    <div className="flex flex-wrap gap-2 text-xs text-gray-500 mt-1 capitalize">
                        <span>{job.job_employment_type} •</span>
                        <span>{job.job_posted_at} •</span>
                        <span className="text-green-600">
                            {job.job_salary ? job.job_salary : "not provided"} •
                        </span>
                    </div>
                    <div className="flex flex-wrap gap-2 mt-2">
                        {job.job_benefits.length > 0 ? (
                            job.job_benefits.map((benefit, idx) => (
                                <p
                                    key={idx}
                                    className="rounded-md text-sm text-[#b2a5e1] px-2 border-2 border-[#4725c2] bg-[#36227f]"
                                >
                                    {benefit}
                                </p>
                            ))
                        ) : (
                            <p className="text-sm text-gray-400">No benefits listed</p>
                        )}
                    </div>
                </Link>
            ))}

            {/* Pagination Controls */}
            <div className="flex justify-center mt-6 gap-2 flex-wrap">
                <button
                    onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
                    disabled={currentPage === 1}
                    className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50"
                >
                    Previous
                </button>

                {Array.from({ length: totalPages }, (_, index) => (
                    <button
                        key={index + 1}
                        onClick={() => setCurrentPage(index + 1)}
                        className={`px-3 py-1 rounded ${currentPage === index + 1
                            ? "bg-purple-700 text-white"
                            : "bg-gray-200 text-black hover:bg-gray-300"
                            }`}
                    >
                        {index + 1}
                    </button>
                ))}

                <button
                    onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
                    disabled={currentPage === totalPages}
                    className="px-4 py-2 bg-gray-800 text-white rounded disabled:opacity-50"
                >
                    Next
                </button>
            </div>
        </div>
    );
}

export default Alljobs;
