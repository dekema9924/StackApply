import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { Config } from "../../config/Config"
import toast from "react-hot-toast"
import { trackUserAction } from "../../api/Track"


interface jobsInterface {
    job_title
    : string
    job_location: string
    link: string

    job_employment_type
    : string
    job_id: string
    job_apply_link: string
    job_salary: string | null


}



const Jobs = () => {
    const [isLoading, setIsLoading] = useState(true)
    const [jobs, setJobs] = useState<jobsInterface[]>([

        {
            job_title
                : "Frontend Developer",

            job_location: "New York, NY",
            link: "https://company.com/jobs/frontend",

            job_employment_type
                : "Full-time",
            job_id: "",
            job_apply_link: "",
            job_salary: ""

        },
        {
            job_title
                : "Frontend Developer",

            job_location: "New York, NY",
            link: "https://company.com/jobs/frontend",

            job_employment_type
                : "Full-time",
            job_id: "",
            job_apply_link: "",
            job_salary: ""

        },
        {
            job_title
                : "Frontend Developer",

            job_location: "New York, NY",
            link: "https://company.com/jobs/frontend",

            job_employment_type
                : "Full-time",
            job_id: "",
            job_apply_link: "",
            job_salary: ""

        },
        {
            job_title
                : "Frontend Developer",

            job_location: "New York, NY",
            link: "https://company.com/jobs/frontend",

            job_employment_type
                : "Full-time",
            job_id: "",
            job_apply_link: "",
            job_salary: ""

        },


    ])
    useEffect(() => {
        axios.get(`${Config.apiUrl}/api/jobs`)
            .then((response) => {
                setJobs(response.data.data || []);
            })
            .catch((error) => {
                console.error("API error:", error);
                const msg = error.response?.data?.error || "Api Limit reached";
                toast.error(msg);
            })
            .finally(() => {
                setIsLoading(false);
            });
    }, [])
    return (
        <>
            <section className="border-2 w-11/12 m-auto h-96 mt-14 border-gray-700 bg-[#1c1c1c] rounded-md   ">
                <div className="flex items-center justify-between p-4">
                    <p className="text-gray-400">Jobs</p>
                    <Link to={'/jobs'}>All Jobs</Link>
                </div>
                <hr className="w-11/12 m-auto border-gray-500" />

                <div className="flex items-start flex-wrap gap-6 p-6 mt-5 overflow-hidden overflow-y-scroll justify-center   h-55 ">
                    {
                        !isLoading ?
                            jobs.slice(0, 10).map((jobsdata) => {
                                console.log({ alljobs: jobs })
                                return (
                                    <div className="bg-[#2c2c2c] rounded-lg flex  items-center justify-between p-4 lg:w-4/10 w-96  hover:border-1 border-gray-800 hover:border-[#693efe] transitona-all duration-500 cursor-pointer">
                                        <Link onClick={() => trackUserAction('view')} to={`jobs/${jobsdata.job_id}`} className="flex flex-col  gap-1">
                                            <h1 className="font-bold">{jobsdata.job_title
                                            }</h1>
                                            <div className="flex items-center gap-4">
                                                <p>{jobsdata.
                                                    job_location}</p>
                                                <p>{jobsdata.
                                                    job_employment_type
                                                }</p>
                                            </div>
                                        </Link>
                                        <div>
                                            <p className="mx-2" >${jobsdata.job_salary !== null ? jobsdata.job_salary : ""}k</p>
                                            <a onClick={() => trackUserAction('apply')} href={jobsdata.job_apply_link} className="bg-[#693efe] px-4 h-6 flex items-center justify-center rounded-md text-sm my-2">Apply</a>
                                        </div>
                                    </div>
                                )
                            })
                            : ""
                    }
                </div>



            </section>


        </>
    )
}

export default Jobs