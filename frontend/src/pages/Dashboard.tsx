
import { Link } from 'react-router-dom'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import StackedBarChartIcon from '@mui/icons-material/StackedBarChart';
import ApprovalIcon from '@mui/icons-material/Approval';
import CollectionsBookmarkIcon from '@mui/icons-material/CollectionsBookmark';
import { useSelector } from "react-redux";
import { RootState } from "../Store/Store";




function Dashboard() {
    const user = useSelector((state: RootState) => state.user.value)

    return (
        <>
            <div>
                <h1 className='text-[3em] capitalize'>Hello, {user.username}!</h1>
                <div className='flex items-center'>
                    <Link to={'/'}>Home <ArrowForwardIosIcon style={{ fontSize: 14 }} /></Link>
                    <p className='gray-text ml-1'>Dashboard</p>
                </div>

                <div className='mt-22 flex flex-col md:flex-row items-center justify-center md:justify-start  gap-4'>

                    {/* //total jobs */}
                    <div className='md:w-55 w-11/12 rounded-lg border h-55 flex items-center justify-center gap-6'>
                        <div>
                            <p className='text-[3em]'>527 </p>
                            <p className='text-wrap'>Total jobs <br /> Viwed</p>
                        </div>

                        <StackedBarChartIcon style={{ fontSize: 66, opacity: .6 }} />

                    </div>

                    {/* //total Applications */}
                    <div className='md:w-55 w-11/12  rounded-lg border h-55 flex items-center justify-center'>
                        <div>
                            <p className='text-[3em]'>17 </p>
                            <p className='text-wrap'>Total <br />Applications</p>
                        </div>

                        <ApprovalIcon style={{ fontSize: 66, opacity: .6 }} />

                    </div>

                    {/* //total bookmarks*/}
                    <div className='md:w-55 w-11/12 rounded-lg border h-55 flex items-center justify-center'>
                        <div>
                            <p className='text-[3em]'>17 </p>
                            <p className='text-wrap'>Bookmarks</p>
                        </div>

                        <CollectionsBookmarkIcon style={{ fontSize: 66, opacity: .6 }} />

                    </div>
                </div>
            </div>
        </>
    )
}

export default Dashboard