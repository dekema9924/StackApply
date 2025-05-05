import axios from "axios";
import { Config } from "../config/Config";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../features/UserSlice";


const UseGetUser = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        axios.get(`${Config.apiUrl}/profile`, { withCredentials: true }).then((response) => {
            console.log(response)
            if (response) {
                dispatch(getUser({
                    email: response.data.user.email,
                    username: response.data.user.username,
                    isAuth: true,
                    id: response.data.user._id
                }))
            }
        })
    }, [dispatch])
}

export default UseGetUser