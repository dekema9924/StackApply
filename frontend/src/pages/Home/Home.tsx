
// import { Search } from '@mui/icons-material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import About from './About';
import useGetUser from '../../hooks/useGetUser';
import Jobs from './Jobs';
import Info from './Info';
import Accordian from './Accordian'
import { Link } from 'react-router-dom';




function Home() {
    useGetUser()


    return (
        <>
            <main className=' bg-gradient-to-b from-[#1A1A1A] via-[#2f1e5c] to-[#1A1A1A] m-auto '>
                {/* //left side */}
                <section className='w-full flex flex-col items-center justify-center gap-6  '>
                    <div className=' border-1 border-gray-700 w-fit px-6 h-9 rounded-2xl flex items-center'>
                        <p className='border-r-1 h-7/12 border-gray-500 flex items-center justify-center px-2'>The best job seekers</p>
                        <Link to={'/jobs'} className='px-3 text-[#693efe] hover:text-white cursor-pointer hover:translate-x-4 transition-all duration-300'>Expore<ArrowForwardIcon /></Link>
                    </div>
                    <h1 className='text-[2.5em] w-96 text-center leading-12 '>Find your <span className='text-gray-400'>dream job with Stack Apply</span></h1>
                    <p className='w-11/12 text-center'>Get recent job post from company sites at your disposal.</p>

                    {/* //form search jobs */}
                    {/* <form className='md:w-5/12 m-auto  ' action="">
                        <div className='border-2 h-13 rounded-2xl relative flex items-center px-1 w-11/12 m-auto '>
                            <input className='pl-14 outline-none  w-full h-full' type="text" placeholder='Job title' />
                            <Search className='absolute left-4' />
                            <button className='w-55 h-8/12 rounded-2xl font-bold '>Search</button>
                        </div>
                    </form> */}
                </section>
                <About />
                <Jobs />
                <Info />
                <Accordian />
            </main>
        </>
    )
}

export default Home