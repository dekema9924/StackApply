import { useState } from "react"
import { Link } from "react-router-dom"


interface jobsInterface {
    job_Title: string
    location: string
    pay: number
    link: string
    type: string
    job_id: string
    job_apply_link: string

}


const Jobs = () => {
    const [isLoading, setIsLoading] = useState(false)
    const [jobs, setJobs] = useState<jobsInterface[]>([

        {
            job_Title: "Frontend Developer",
            location: "New York, NY",
            pay: 95000,
            link: "https://company.com/jobs/frontend",
            type: "Full-time",
            job_id: "",
            job_apply_link: ""
        },
        {
            job_Title: "Backend Engineer",
            location: "San Francisco, CA",
            pay: 110000,
            link: "https://company.com/jobs/backend",
            type: "Full-time",
            job_id: "",
            job_apply_link: ""


        },
        {
            job_Title: "DevOps Engineer",
            location: "Remote",
            pay: 105000,
            link: "https://company.com/jobs/devops",
            type: "Remote",
            job_id: "",
            job_apply_link: ""


        },
        {
            job_Title: "Data Analyst",
            location: "Austin, TX",
            pay: 85000,
            link: "https://company.com/jobs/data-analyst",
            type: "Contract",
            job_id: "",
            job_apply_link: ""


        },
        {
            job_Title: "Software Tester",
            location: "Seattle, WA",
            pay: 78000,
            link: "https://company.com/jobs/tester",
            type: "Part-time",
            job_id: "",
            job_apply_link: ""


        },
        {
            job_Title: "Mobile App Developer",
            location: "Denver, CO",
            pay: 92000,
            link: "https://company.com/jobs/mobile",
            type: "Full-time",
            job_id: "",
            job_apply_link: ""


        },
        {
            job_Title: "AI Research Intern",
            location: "Boston, MA",
            pay: 30000,
            link: "https://company.com/jobs/ai-intern",
            type: "Internship",
            job_id: "",
            job_apply_link: ""


        },
        {
            job_Title: "Cybersecurity Specialist",
            location: "Washington, DC",
            pay: 115000,
            link: "https://company.com/jobs/security",
            type: "Full-time",
            job_id: "",
            job_apply_link: ""


        },

    ])
    return (
        <>
            <section className="border-2 w-11/12 m-auto h-96 mt-14 border-gray-700 bg-[#1c1c1c] rounded-md   ">
                <div className="flex items-center justify-between p-4">
                    <p className="text-gray-400">Jobs</p>
                    <Link to={'/jobs'}>All Jobs</Link>
                </div>
                <hr className="w-11/12 m-auto border-gray-500" />

                <div className="flex items-start flex-wrap gap-6 p-6 mt-5 overflow-hidden overflow-y-scroll justify-center  h-55 ">
                    {
                        !isLoading ?
                            jobs.map((jobsdata) => {
                                return (
                                    <div className="bg-[#2c2c2c] rounded-lg flex  items-center justify-between p-4 lg:w-4/10 md:w-80 lg:ml-22 w-96  hover:border-1 border-gray-800 hover:border-[#693efe] transitona-all duration-500 cursor-pointer">
                                        <Link to={`jobs/${jobsdata.job_id}`} className="flex flex-col items-center gap-1">
                                            <h1 className="font-bold">{jobsdata.job_Title}</h1>
                                            <div className="flex items-center gap-4">
                                                <p>{jobsdata.location}</p>
                                                <p>{jobsdata.type}</p>
                                            </div>
                                        </Link>
                                        <div>
                                            <p className="mx-2" >${jobsdata.pay}k</p>
                                            <a href={jobsdata.job_apply_link} className="bg-[#693efe] px-4 h-6 flex items-center justify-center rounded-md text-sm my-2">Apply</a>
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