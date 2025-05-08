
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import { useNavigate } from 'react-router-dom';

function Card() {
    const navigate = useNavigate()
    return (
        <>
            <div className='card w-11/12  h-75 rounded-lg p-4 flex flex-col gap-6 mb-10'>
                <h1 className='flex gap-4'><AutoAwesomeIcon />Unlock Personalize Job tools</h1>
                <p className='gray-text text-sm'>Create an account to access job search features.</p>
                <ul className='text-sm list-disc list-inside'>
                    <li>Personal job fit analysis based on your profile</li>
                    <li>Save Jobs</li>
                    <li>Personalized job dashboard</li>
                    <li>Job application tracking</li>
                </ul>
                <div className='flex gap-2'>
                    <button onClick={() => navigate('/signin')} className='w-33 h-9 rounded-md text-black  font-bold !bg-white'>Sign In</button>
                    <button onClick={() => navigate('/signup')} className='!bg-transparent border-2 border-gray-5 w-33 h-9 rounded-md'>Sign Up</button>
                </div>
            </div>
        </>
    )
}

export default Card