import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import LayersIcon from '@mui/icons-material/Layers';
import { useState } from 'react';
import HomeFilledIcon from '@mui/icons-material/HomeFilled';
import PersonAddAltIcon from '@mui/icons-material/PersonAddAlt';
import PersonIcon from '@mui/icons-material/Person';
import Person2Icon from '@mui/icons-material/Person2';
import NotificationsIcon from '@mui/icons-material/Notifications';
import WorkIcon from '@mui/icons-material/Work';
import LogoutIcon from '@mui/icons-material/Logout';
import DashboardIcon from '@mui/icons-material/Dashboard';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../Store/Store';
import { logOff } from '../features/UserSlice';
import axios from 'axios';
import { Config } from '../config/Config';
import toast from 'react-hot-toast';




const Header = () => {

    const [isMenu, setMenuClicked] = useState(false)
    const [isProfileClicked, setProfileClicked] = useState(false)
    const [isLgScreenProfile, setLgScreenProfile] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((state: RootState) => state.user.value)

    //hanele Menu clicked
    function HandleMenuClicked() {
        setMenuClicked((prev) => !prev)
        setProfileClicked(false)
        setLgScreenProfile(false)
    }

    //smscreen profile dropdown
    function HandleProfileClicked() {
        setProfileClicked(!isProfileClicked)
        setMenuClicked(false)
    }

    //lg-screen profile dropwdown
    function HandleLgProfileClicked() {
        setLgScreenProfile(!isLgScreenProfile)
        setProfileClicked(false)

    }

    //handle logoff
    async function HandleLogOff() {
        try {
            const response = await axios.get(`${Config.apiUrl}/logoff`, {
                withCredentials: true
            });

            if (response.status === 200) {
                toast.success(response.data.message);
                dispatch(logOff());
                navigate('/signin');
            }
        } catch (error: any) {
            toast.error('Logoff failed');
            console.error(error.response?.data || error.message);
        }
    }



    return (
        <>
            <header className='flex h-17 items-center justify-between mt-4'>
                <div className='flex items-center md:ml-10 gap-1 ml-3'>
                    <LayersIcon style={{ fontSize: 40 }} />
                    <h1 className='font-bold md:text-2xl'>StackApply <span className='text-sm w-14 pl-2 rounded-2xl bg-[#693efe] block md:inline-block'>STEM</span></h1>
                </div>
                <nav className="flex items-center md:mr-10 gap-4 mr-3 relative">
                    <div className='md:flex hidden items-center  gap-4'>
                        <Link to={'/'} className='cursor-pointer'>Home</Link>
                        {user.isAuth ? <p className='cursor-pointer' onClick={() => navigate('/dashboard')}>Dashboard</p> : ""}

                        {/* //lg screen profile */}
                        {
                            user.isAuth ? <p onClick={HandleLgProfileClicked} className='cursor-pointer '>Profile<ArrowDropDownIcon className={`${isLgScreenProfile ? "rotate-180 " : ""} transition-all duration-500`} /></p> : <Link className='underline' to={'/signup'}>SignUp</Link>
                        }

                        <div className={`${isLgScreenProfile ? " h-76 p-2" : "h-0 p-0 "} absolute rounded-md overflow-hidden bg-[#2c2c2c] ${!user.isAuth ? "hidden" : ""} transition-all duration-500 left-0 top-12 w-full  justify-center flex flex-col gap-4 z-44`}>
                            <div onClick={() => navigate('/profile')} className='hover:bg-[#4A4A4A] rounded-md p-2 cursor-pointer'>
                                <p className=''>Profile</p>
                                <p className='gray-text text-xs '>View <span>{user.username}</span>s profile</p>
                            </div>
                            <div onClick={() => navigate('/notifications')} className='hover:bg-[#4A4A4A] rounded-md p-2 cursor-pointer'>
                                <p className=''>Notifications</p>
                                <p className='gray-text text-xs '>See your Notifications</p>
                            </div>
                            <div onClick={() => navigate('/myjobs')} className='hover:bg-[#4A4A4A] rounded-md p-2 cursor-pointer'>
                                <p className=''>My Jobs</p>
                                <p className='gray-text text-xs '>See your saved jobs here</p>
                            </div>
                            <span onClick={HandleLogOff} className='bg-red-800 w-11/12 text-xs mt-4  h-7 flex items-center m-auto justify-center  rounded-md text-center font-bold cursor-pointer'><LogoutIcon style={{ fontSize: 22 }} />LogOut</span>
                        </div>



                    </div>
                    {
                        !user.isAuth ?
                            <div className='flex gap-4 items-center '>
                                <button onClick={() => navigate('/signin')} className=' w-22 h-10 rounded-md'>Login</button>
                            </div>

                            : ""
                    }

                    {/* //small screen Profile */}
                    <div className={`relative md:hidden ${!user.isAuth ? "h-0 w-0 overflow-hidden" : "block"}`}>
                        <span onClick={() => HandleProfileClicked()} className='card border-2 font-bold rounded-full w-10 h-10 text-center flex items-center justify-center cursor-pointer uppercase'>{user.username.slice(0, 1)}</span>
                        {/* //profile dropdown */}
                        <nav className={` w-60 absolute right-0 top-[45px] rounded-md ${isProfileClicked ? "card h-fit p-4" : "h-0 overflow-hidden p-0"}`}>
                            <div className='my-2 '>
                                <p>{user.username}</p>
                                <p className='text-xs text-[#A1A1A1]'>{user.email}</p>
                            </div>
                            <hr className='border-gray-500 border-t-1 border-0 my-2' />
                            <div className='text-sm'>
                                <Link to={'/profile'} className='flex gap-2 items-center cursor-pointer h-8 hover:bg-[#4A4A4A] rounded-md'><Person2Icon style={{ fontSize: 22 }} />Profile</Link>
                                <Link to={'/notifications'} className='flex gap-2 items-center cursor-pointer h-8 hover:bg-[#4A4A4A] rounded-md '><NotificationsIcon style={{ fontSize: 22 }} />Notifications</Link>
                                <Link to={'/myjobs'} className='flex gap-2 items-center cursor-pointer h-8 hover:bg-[#4A4A4A] rounded-md '><WorkIcon style={{ fontSize: 22 }} />My Jobs</Link>
                            </div>
                            <hr className='border-gray-500 border-t-1 border-0 my-2' />
                            <span onClick={HandleLogOff} className='bg-red-800 w-11/12 text-xs mt-4  h-7 flex items-center justify-center  rounded-md text-center font-bold cursor-pointer'><LogoutIcon style={{ fontSize: 22 }} />LogOut</span>

                        </nav>

                    </div>

                    <div className='realtive'>
                        {/* //hamburger menu */}
                        <div onClick={HandleMenuClicked} className='md:hidden card  w-9 h-7 flex flex-col gap-1 justify-center cursor-pointer mr-3 rounded-md z-50'>
                            <span className={`border-t-2 block w-8/12 mx-auto transition-all duration-500 ${isMenu ? "rotate-45 translate-y-[5px]" : ""}`}></span>
                            <span className={`border-t-2 block w-8/12 mx-auto transition-all duration-500 ${isMenu ? "hidden" : "block"}`}></span>
                            <span className={`border-t-2 block w-8/12 mx-auto transition-all duration-500  ${isMenu ? "-rotate-45 -translate-y-[1.5px]" : ""}`}></span>
                        </div>
                        {/* //dropdown */}
                        <nav className={`${isMenu ? " h-44 p-4 card  " : "h-0 p-0 overflow-hidden"} absolute w-50 right-4 top-12  justify-center  flex flex-col gap-2  text-sm rounded-lg `}>
                            <Link to={'/'} className=' hover:bg-[#4A4A4A] rounded-md cursor-pointer py-1'><HomeFilledIcon className='mx-2' />Home</Link>
                            {
                                !user.isAuth ?
                                    <div className='flex flex-col gap-1'>
                                        <Link to={'/signin'} className=' hover:bg-[#4A4A4A] rounded-md cursor-pointer py-1'><PersonIcon className='mx-2' />Log In</Link>
                                        <Link to={'/signup'} className=' hover:bg-[#4A4A4A] rounded-md cursor-pointer py-1'> <PersonAddAltIcon className='mx-2' />Signup</Link>
                                    </div>

                                    : ""
                            }
                            <Link to={'/dashboard'} className=' hover:bg-[#4A4A4A] rounded-md cursor-pointer py-1'> <DashboardIcon className='mx-2' />Dashboard</Link>

                        </nav>
                    </div>
                </nav>
            </header>
        </>
    )
}


export default Header;
