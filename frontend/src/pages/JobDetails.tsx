

import { use, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Loading from '../components/Loading'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import Card from '../components/Card';
import { useSelector } from 'react-redux';
import { RootState } from '../Store/Store';
import BookmarkIcon from '@mui/icons-material/Bookmark';

interface jobdetailsInterface {
    employer_name: string
    employer_logo: string | null
    employer_website: string
    job_description: string
    job_highlights: {
        Qualifications: string[]
        Responsibilities: string[]

    }
    job_title: string
}

function JobDetails() {
    const user = useSelector((state: RootState) => state.user.value)

    const { id } = useParams()
    const [isLoading, setisLoading] = useState(false)
    const [jobDetails, setJobDetails] = useState<jobdetailsInterface>({
        employer_name: "TechNova Solutions",
        employer_logo: "https://via.placeholder.com/100x100.png?text=Logo",
        employer_website: "https://www.technova.com",
        job_description:
            "We are seeking a passionate Front-End Developer to join our dynamic team. You will be responsible for developing user-friendly interfaces and optimizing applications for maximum performance.",
        job_highlights: {
            Qualifications: [
                "Bachelor’s degree in Computer Science or related field",
                "2+ years of experience with React or similar frameworks",
                "Proficiency in HTML, CSS, JavaScript/TypeScript",
                "Familiarity with RESTful APIs"
            ],
            Responsibilities: [
                "Develop and maintain front-end features using React",
                "Collaborate with design and back-end teams",
                "Write reusable and maintainable code",
                "Optimize applications for speed and scalability"
            ]
        },
        job_title: "Front-end Developer"
    })
    return (
        <>

            <Link to={'/jobs'} className='gray-text text-sm cursor-pointer'>
                <KeyboardArrowLeftIcon />Back To Search
            </Link>
            <div className=' p-8 md:p-0 mt-22'>

                {
                    !isLoading ?
                        <>
                            {/* jobdetails */}
                            <div key={id} className='flex items-center gap-3'>
                                <img className='w-22' src={jobDetails.employer_logo ? jobDetails.employer_logo : "https://fakeimg.pl/600x400"} alt="company_logo" />
                                <div className='flex gap-2 flex-col'>
                                    <p>{jobDetails.employer_name}</p>
                                    <div className='flex gap-2 text-xs'>
                                        <a className='underline' href="http://">website</a>
                                        <p>Socials</p>
                                    </div>
                                </div>

                            </div>

                            {/* //Bookmark job */}
                            <div className='flex items-center gap-4  my-6'>
                                <button className='text-sm w-44 h-9 rounded-md'>Apply Now <ArrowForwardIcon /></button>
                                <p className='border-1 p-2 cursor-pointer border-gray-600 rounded-md'><BookmarkIcon style={{ fontSize: 33 }} className='text-center' /></p>
                            </div>
                            <hr className='mt-5 border-gray-600' />


                            <p className='text-sm leading-7 my-6  w-10/12'>{jobDetails.job_description}</p>

                            {
                                !user.isAuth ? <Card /> : ""
                            }


                            <p className='gray-text'>The <span className='font-bold text-white'>{jobDetails.job_title}</span> will have responsibilities that include: </p>

                            {/* //responsibilities */}
                            <ul className='flex flex-col gap-4 my-4 text-sm'>
                                {
                                    jobDetails.job_highlights.Qualifications.map((qualifications, index) => {
                                        return (
                                            <>
                                                <li key={index} className='list-inside list-disc'>{qualifications}</li>
                                            </>
                                        )
                                    })
                                }

                            </ul>

                            <h1 className='font-bold text-lg my-2'>Job Requirements</h1>


                            {/* qualifications */}
                            <ul className='flex flex-col gap-4 my-4 text-sm'>
                                {
                                    jobDetails.job_highlights.Responsibilities.map((responsibilities, index) => {
                                        return (
                                            <>
                                                <li key={index} className='list-inside list-disc'>{responsibilities}</li>
                                            </>
                                        )
                                    })
                                }

                            </ul>
                        </>
                        : <Loading />
                }
            </div>
        </>
    )
}

export default JobDetails