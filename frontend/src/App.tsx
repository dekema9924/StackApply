import Header from "./components/Header"
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"
import { Toaster } from 'react-hot-toast';
import UseGetUser from "./hooks/UseGetUser"


function App() {

  //get user profile
  UseGetUser()

  return (
    <>
      <Toaster />
      <Header />
      <div className=" mt-10  ">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />


        </Routes>
      </div>

    </>
  )
}

export default App
