import { Outlet } from "react-router-dom"
import { Navigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { RootState } from "../Store/Store"


const PrivateRoutes = () => {
    const user = useSelector((state: RootState) => state.user.value)

    return (
        user.isAuth ? <Outlet /> : <Navigate to='/' />
    )

}

export default PrivateRoutes