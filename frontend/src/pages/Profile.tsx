import KeyIcon from '@mui/icons-material/Key';
// import EditIcon from '@mui/icons-material/Edit';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../Store/Store';
import toast from 'react-hot-toast';
import axios from 'axios';
import { Config } from '../config/Config';

const Profile = () => {
    const [showBox, setShowBox] = useState(false)
    const user = useSelector((state: RootState) => state.user.value)
    const [isInput, setInput] = useState({
        current_password: "",
        new_password: "",
        confirm_new_password: ""
    })


    //handle input
    function HandleInput(e: React.ChangeEvent<HTMLInputElement>) {
        setInput({
            ...isInput, [e.target.name]: e.target.value
        })
    }


    //submit form
    function HandleForm(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()

        if (isInput.new_password !== isInput.confirm_new_password) {
            toast.error('passwords do not match')
        } else {
            axios.post(`${Config.apiUrl}/updatepassword`, {
                current_password: isInput.current_password,
                new_password: isInput.new_password
            }, {
                withCredentials: true
            })
                .then((response) => {
                    console.log(response);
                    if (response.status === 200) {
                        toast.success(response.data.message);
                        setShowBox(false);
                    }
                })
                .catch((error) => {
                    console.error(error);
                    if (error.response && error.response.data && error.response.data.message) {
                        toast.error(error.response.data.message);
                    } else {
                        toast.error("An unexpected error occurred.");
                    }
                });
        }



    }

    return (
        <>

            <div className={`flex md:flex-row flex-col gap-4 md:items-center justify-between  ${showBox ? 'opacity-15 pointer-events-none' : ''}`}>
                <div className="flex items-center gap-4">
                    <span className="card border-2 w-16 flex uppercase items-center justify-center font-bold h-16 rounded-full text-2xl">{user.username.slice(0, 1)}</span>
                    <div>
                        <p className='capitalize font-bold'>{user.username}</p>
                        <p className='gray-text'>{user.email}</p>
                    </div>
                </div>

                <div>
                    <div className='flex items-center '>
                        <p onClick={() => setShowBox(true)} className='border border-gray-500 w-fit px-4  text-sm rounded-md cursor-pointer hover:bg-gray-700'><KeyIcon />Change Password</p>
                        {/* <EditIcon style={{ fontSize: 30, padding: 4 }} className='rounded-md cursor-pointer hover:bg-gray-700' /> */}
                    </div>
                </div>
            </div>
            {
                showBox && (
                    <form onSubmit={(e) => HandleForm(e)} className='card w-96 h-96 rounded-md p-4 m-auto '>
                        <div className='flex items-center justify-between'>
                            <h1 className='text-2xl font-bold my-4'>Chanage Password</h1>
                            <p onClick={() => setShowBox(false)} className='text-xl cursor-pointer'>🆇</p>
                        </div>
                        <p className='text-sm text-gray-400'>Enter your current password and choose a new one.</p>

                        <div className='flex flex-col gap-1 my-4'>
                            <label className='text-sm' htmlFor="current_password">Current password</label>
                            <input onChange={HandleInput} className='border border-gray-500 rounded-md pl-4' type="text" name='current_password' />
                        </div>
                        <div className='flex flex-col gap-1 my-4'>
                            <label className='text-sm' htmlFor="new_password">New password</label>
                            <input onChange={HandleInput} className='border border-gray-500 rounded-md pl-4' type="text" name='new_password' />
                        </div>
                        <div className='flex flex-col gap-1 my-4'>
                            <label className='text-sm' htmlFor="confirm_new_password">Confirm new password</label>
                            <input onChange={HandleInput} className='border border-gray-500 rounded-md pl-4' type="text" name='confirm_new_password' />
                        </div>

                        <div className=' text-end'>
                            <button type='button' onClick={() => setShowBox(false)} className='!bg-transparent w-24 mx-2 border h-9 rounded-lg'>Cancel</button>
                            <button className=' w-34 h-9 rounded-lg text-sm'>Change Password</button>
                        </div>
                    </form>
                )
            }


        </>
    )
}

export default Profile