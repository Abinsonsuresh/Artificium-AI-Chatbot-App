import { useState } from "react"
import Header from "./Components/Header"
import SideBar from "./Components/SideBar"
import Artificium from "./Sections/Artificium"
import Share from "./Components/Share"

function App() {
  const [share, setShare] = useState(true)
  return (
    <>
      <div className="flex p-4 gap-5 max-h-screen relative">
        <SideBar setShare={setShare} />
        <div className="flex flex-col">
          <Header />
          <Artificium />
        </div>

        {
          share && (
            <div className="absolute top-[10%] ">
              <Share />
            </div>
          )
        }


      </div>
    </>
  )
}

export default App
