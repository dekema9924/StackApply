import axios from "axios";
import { Config } from "../config/Config";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { getUser } from "../features/UserSlice";
import { useSelector } from "react-redux";
import { RootState } from "../Store/Store";



const useGetUser = () => {
    const dispatch = useDispatch()
    const user = useSelector((state: RootState) => state.user.value)
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);




    useEffect(() => {

        axios.get(`${Config.apiUrl}/profile`, { withCredentials: true }).then((response) => {
            console.log(response)
            setData(response.data)
            setLoading(false);
            if (response) {
                dispatch(getUser({
                    email: response.data.user.email,
                    username: response.data.user.username,
                    isAuth: true,
                    id: response.data.user._id
                }))
            }
        })
            .catch((err) => {
                console.error("Error fetching user:", err);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [dispatch])
    return { data, loading }

}

export default useGetUser