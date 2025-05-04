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





const Header = () => {
    const [isMenu, setMenuClicked] = useState(false)
    const [isProfileClicked, setProfileClicked] = useState(false)
    const [isLgScreenProfile, setLgScreenProfile] = useState(false)

    //hanele Menu clicked
    function HandleMenuClicked() {
        setMenuClicked((prev) => !prev)
        console.log(isMenu)
        setProfileClicked(false)
    }

    //smscreen profile dropdown
    function HandleProfileClicked() {
        setProfileClicked(!isProfileClicked)
        setMenuClicked(false)
    }

    //lg-screen profile dropwdown
    function HandleLgProfileClicked() {
        setLgScreenProfile(!isLgScreenProfile)
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
                        <p className='cursor-pointer'>Home</p>
                        <p>Dashboard</p>

                        {/* //lg screen profile */}
                        <p onClick={HandleLgProfileClicked} className='cursor-pointer '>Profile<ArrowDropDownIcon className={`${isLgScreenProfile ? "rotate-180 " : ""} transition-all duration-500`} /></p>

                        <div className={`${isLgScreenProfile ? " h-76 p-2" : "h-0 p-0 "} absolute overflow-hidden bg-[#2c2c2c] transition-all duration-500 left-0 top-12 w-full  justify-center flex flex-col gap-4 -z-1`}>
                            <div className='hover:bg-[#4A4A4A] rounded-md p-2 cursor-pointer'>
                                <p className=''>Profile</p>
                                <p className='gray-text text-xs '>View <span>bens</span> profile</p>
                            </div>
                            <div className='hover:bg-[#4A4A4A] rounded-md p-2 cursor-pointer'>
                                <p className=''>Notifications</p>
                                <p className='gray-text text-xs '>See your Notifications</p>
                            </div>
                            <div className='hover:bg-[#4A4A4A] rounded-md p-2 cursor-pointer'>
                                <p className=''>My Jobs</p>
                                <p className='gray-text text-xs '>See your saved jobs here</p>
                            </div>
                            <span className='bg-red-800 w-11/12 text-xs mt-4  h-7 flex items-center justify-center  rounded-md text-center font-bold cursor-pointer'><LogoutIcon style={{ fontSize: 22 }} />LogOut</span>
                        </div>



                    </div>
                    <button className=' w-22 h-10 rounded-md'>Login</button>

                    {/* //small screen Profile */}
                    <div className='relative md:hidden'>
                        <span onClick={HandleProfileClicked} className='card border-2 font-bold rounded-full w-10 h-10 text-center flex items-center justify-center cursor-pointer uppercase'>D</span>
                        {/* //profile dropdown */}
                        <nav className={` w-60 absolute right-0 top-[45px] rounded-md ${isProfileClicked ? "card h-fit p-4" : "h-0 overflow-hidden p-0"}`}>
                            <div className='my-2 '>
                                <p>Ben</p>
                                <p className='text-xs text-[#A1A1A1]'>ben@gmail.com</p>
                            </div>
                            <hr className='border-gray-500 border-t-1 border-0 my-2' />
                            <div className='text-sm'>
                                <p className='flex gap-2 items-center cursor-pointer h-8 hover:bg-[#4A4A4A] rounded-md'><Person2Icon style={{ fontSize: 22 }} />Profile</p>
                                <p className='flex gap-2 items-center cursor-pointer h-8 hover:bg-[#4A4A4A] rounded-md '><NotificationsIcon style={{ fontSize: 22 }} />Notifications</p>
                                <p className='flex gap-2 items-center cursor-pointer h-8 hover:bg-[#4A4A4A] rounded-md '><WorkIcon style={{ fontSize: 22 }} />My Jobs</p>
                            </div>
                            <hr className='border-gray-500 border-t-1 border-0 my-2' />
                            <span className='bg-red-800 w-11/12 text-xs mt-4  h-7 flex items-center justify-center  rounded-md text-center font-bold cursor-pointer'><LogoutIcon style={{ fontSize: 22 }} />LogOut</span>

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
                        <nav className={`${isMenu ? " h-44 p-4 card  " : "h-0 p-0 overflow-hidden"} absolute w-50 right-4 top-20  flex flex-col gap-2  text-sm rounded-lg `}>
                            <p className=' hover:bg-[#4A4A4A] rounded-md cursor-pointer py-1'><HomeFilledIcon className='mx-2' />Home</p>
                            <p className=' hover:bg-[#4A4A4A] rounded-md cursor-pointer py-1'><PersonIcon className='mx-2' />Log In</p>
                            <p className=' hover:bg-[#4A4A4A] rounded-md cursor-pointer py-1'> <PersonAddAltIcon className='mx-2' />Signup</p>
                            <p className=' hover:bg-[#4A4A4A] rounded-md cursor-pointer py-1'> <DashboardIcon className='mx-2' />Dashboard</p>

                        </nav>
                    </div>
                </nav>
            </header>
        </>
    )
}


export default Header;
