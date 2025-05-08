import Header from "./components/Header"
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import { Toaster } from 'react-hot-toast';
import useGetUser from "./hooks/useGetUser"
import Footer from "./components/Footer"
import Alljobs from "./pages/Alljobs"
import JobDetails from "./pages/JobDetails"





function App() {
  //get user profile
  useGetUser()


  return (
    <>
      <Toaster />
      <Header />
      <div className=" md:mt-10 mt-22 w-11/12 m-auto  ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/jobs" element={<Alljobs />} />
          <Route path="/jobs/:id" element={<JobDetails />} />



        </Routes>
        <Footer />

      </div>

    </>
  )
}

export default App
