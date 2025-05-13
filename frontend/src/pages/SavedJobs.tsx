import { Link } from "react-router-dom"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSelector } from "react-redux";
import { RootState } from "../Store/Store";
import { useState } from "react";
import Loading from "../components/Loading";

interface myjobsInterface {
    employer_name: string
    employer_logo: string | null
    job_id: string;
    job_location: string
    job_title: string

}
const SavedJobs = () => {
    const user = useSelector((state: RootState) => state.user.value)
    const [isLoading, setIsLoading] = useState(false)
    const [savedJobs, setSavedJobs] = useState<myjobsInterface[]>([
        {
            "employer_name": "TechNova Inc.",
            "employer_logo": "https://placehold.co/600x400",
            "job_id": "JOB12345",
            "job_location": "San Francisco, CA",
            "job_title": "Software Engineer"
        },
        {
            "employer_name": "CodeCraft Labs",
            "employer_logo": null,
            "job_id": "JOB12346",
            "job_location": "New York, NY",
            "job_title": "Frontend Developer"
        },
        {
            "employer_name": "Pixel Perfect Studio",
            "employer_logo": "https://placehold.co/600x400",
            "job_id": "JOB12347",
            "job_location": "Austin, TX",
            "job_title": "UI/UX Designer"
        },
        {
            "employer_name": "Stackline Systems",
            "employer_logo": "https://placehold.co/600x400",
            "job_id": "JOB12348",
            "job_location": "Remote",
            "job_title": "DevOps Engineer"
        },
    ])

    if (isLoading) return <Loading />

    return (
        <>
            <div>
                <h1 className='text-[3em] capitalize'>Hello, {user.username}!</h1>
                <div className='flex items-center'>
                    <Link to={'/'}>Home <ArrowForwardIosIcon style={{ fontSize: 14 }} /></Link>
                    <p className='gray-text ml-1'>My Jobs</p>
                </div>


                <div className="mt-24">
                    {/* //saved jobs */}
                    {
                        savedJobs.map((job) => {
                            return (
                                <Link key={job.job_id} to={`/jobs/${job.job_id}`} className="flex items-center my-6  gap-4">
                                    <img className="w-20 rounded-md h-14 object-cover" src={job.employer_logo ? job.employer_logo : "https://placehold.co/600x400"} alt="company_logo" />
                                    <div>
                                        <p className="font-bold">{job.job_title}</p>
                                        <p className="text-sm font-thin">{job.employer_name}</p>
                                        <p className="text-sm gray-text">{job.job_location}</p>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}


export default SavedJobs