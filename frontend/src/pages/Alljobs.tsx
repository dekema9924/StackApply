import { useState } from "react"
import { Link } from "react-router-dom"
import Loading from "../components/Loading"


interface jobsData {
    job_title: string
    job_employment_type: string
    job_id: string
    job_benefits: string[]
    job_posted_human_readable: string
    job_apply_link: string

}

function Alljobs() {
    const [isLoading, setisLoading] = useState(false)
    const [jobsData, setJobsData] = useState<jobsData[]>([
        {
            job_title: "Sales Manager",
            job_employment_type: "Remote",
            job_id: "VnVsqdlLW-S4XAiNAAAAAA==",
            job_benefits: ["Healthcare", "Insurance", "Education"],
            job_posted_human_readable: "2 month ago ",
            job_apply_link: ""
        },
        {
            job_title: "WebDeveloper",
            job_employment_type: "Fulltime",
            job_id: "VnVsqdlLW-S4XAiNAAAAAA==",
            job_benefits: ["Healthcare", "Insurance",],
            job_posted_human_readable: "2 days ago ",
            job_apply_link: ""
        }
    ])


    return (
        <>
            <div className='flex flex-col gap-4'>
                {
                    !isLoading ?
                        jobsData.map((job) => {
                            return (
                                <>
                                    <Link to={`/jobs/:${job.job_id}`} className='flex flex-col gap-2 p-2'>
                                        <h1 className='font-bold text-lg'>{job.job_title}</h1>
                                        <div className='flex gap-2 md:text-sm items-center capitalize w-full text-xs'>
                                            <span>{job.job_employment_type} •</span>
                                            <span>{job.job_posted_human_readable}      •</span>
                                            <span className='text-green-600'></span>
                                            <span className='text-green-600'>$65,000-$70,000/year       •</span>
                                        </div>
                                        <div className='flex gap-4 items-center  w-fit '>
                                            {
                                                job.job_benefits.map((benefits) => {
                                                    return (
                                                        <>
                                                            <p className='border-3 rounded-md  text-sm text-[#b2a5e1] px-2 border-[#4725c2] bg-[#36227f]'>{benefits}</p>

                                                        </>
                                                    )
                                                })
                                            }
                                        </div>
                                    </Link>
                                </>
                            )
                        })
                        : <Loading />
                }


            </div>
        </>
    )
}

export default Alljobs