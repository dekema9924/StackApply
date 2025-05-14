import { Link } from "react-router-dom"
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSelector } from "react-redux";
import { RootState } from "../Store/Store";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";
import axios from 'axios'
import { Config } from "../config/Config";

interface myjobsInterface {
    employer_name: string
    employer_logo?: string | null
    job_id: string;
    job_location: string
    job_title: string

}
const SavedJobs = () => {
    const user = useSelector((state: RootState) => state.user.value)
    const [isLoading, setIsLoading] = useState(true)
    const [savedJobs, setSavedJobs] = useState<myjobsInterface[]>([]);
    useEffect(() => {
        axios.get(`${Config.apiUrl}/api/myjobs`, { withCredentials: true })
            .then((response) => {
                const jobs = response.data?.myJobs;
                if (Array.isArray(jobs)) {
                    setSavedJobs(jobs);
                    setIsLoading(false);
                } else {
                    console.error("myJobs is not an array:", jobs);
                    setSavedJobs([]);
                }
            })
            .catch((error) => {
                console.error("Error fetching jobs:", error);
                setSavedJobs([]);
                setIsLoading(false);
            });
    }, []);


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
                        savedJobs.length == 0 ? <p className="text-2xl capitalize">no jobs saved</p> :
                            <>
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
                            </>
                    }
                </div>
            </div>
        </>
    )
}


export default SavedJobs