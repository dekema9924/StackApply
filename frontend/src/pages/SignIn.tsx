import { useState } from "react"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { Link } from "react-router-dom";
import axios from "axios";
import { Config } from "../config/Config";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";


interface user {
    username: string
    password: string
}

const SignIn = () => {
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState('password')
    const [isInput, setInput] = useState<user>({
        username: "",
        password: ""
    })

    //handleshow password
    function HandleShowPassword() {
        setShowPassword((prev) => (prev === 'password' ? 'text' : 'password'))
    }

    //handler userInput
    function HandleInput(e: React.ChangeEvent<HTMLInputElement>) {
        setInput({
            ...isInput, [e.target.name]: e.target.value
        })
    }

    //submit form
    async function HandleSubmit(e: React.FormEvent<HTMLFormElement>): Promise<void> {
        e.preventDefault();

        try {
            console.log(Config.apiUrl);
            const response = await axios.post(`${Config.apiUrl}/signin`, {
                username: isInput.username,
                password: isInput.password
            }, {
                withCredentials: true
            });

            if (response.status === 200) {
                navigate('/');
                // console.log(response);
                toast.success(response.data.message);
            }
        } catch (error: any) {
            if (error.response) {
                console.error('Backend Error:', error.response.data);
                toast.error(error.response.data.message || 'Login failed');
            } else if (error.request) {
                console.error('No response from server');
                toast.error('No response from server');
            } else {
                // Error setting up request
                console.error('Error:', error.message);
                toast.error('Unexpected error');
            }
        }
    }


    return (
        <>
            <h1 className="w-66 text-center m-auto">Sign In and stay updated on your professional world.</h1>

            {/* //register user form */}
            <form onSubmit={(e) => HandleSubmit(e)} className=" card w-11/12 flex md:w-4/12 m-auto rounded-md flex-col justify-center items-center mt-10 gap-6 py-8" action="">

                {/* //email */}
                <div className="flex w-11/12  flex-col">
                    <label className="text-gray-300" htmlFor="email">Email or Username</label>
                    <input onChange={(e) => HandleInput(e)} className="border-2 w-full h-10 rounded-md pl-4" type="text" placeholder="john@gmail.com" name="username" />
                </div>


                {/* //password */}
                <div className="flex w-11/12 flex-col ">
                    <label className="text-gray-300" htmlFor="password">Password</label>
                    <div className="flex items-center relative w-full">
                        <input onChange={(e) => HandleInput(e)} className="border-2 w-full pl-4 h-10 rounded-md " type={showPassword} placeholder="******" name="password" />
                        {
                            showPassword === 'password' ? <span onClick={HandleShowPassword} className="absolute  mr-5 right-0 cursor-pointer"  ><VisibilityOffIcon /></span> :
                                <span onClick={HandleShowPassword} className="absolute  mr-5 right-0 cursor-pointer"  ><VisibilityIcon /></span>
                        }
                    </div>
                </div>

                <p className="text-xs text-center w-11/12 ">By clicking sign in, you agree to the StackApply User Agreement, Privacy Policy, and Cookie Policy.</p>
                <button className="w-11/12 h-10 rounded-3xl">Sign In</button>
                <p className="text-xs">New to StackApply? <Link className="text-[#997ff9] text-sm underline" to={'/signup'}>Join now</Link></p>
            </form>
        </>
    )
}

export default SignIn