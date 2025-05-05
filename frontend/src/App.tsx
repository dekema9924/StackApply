import Header from "./components/Header"
import { Routes, Route } from 'react-router-dom'
import Home from "./pages/Home/Home"
import SignUp from "./pages/SignUp"
import SignIn from "./pages/SignIn"

function App() {

  return (
    <>
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
