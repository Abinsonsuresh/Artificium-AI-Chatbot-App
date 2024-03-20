import { useState } from "react"
import Header from "./Components/Header"
import SideBar from "./Components/SideBar"
import Artificium from "./Sections/Artificium"
import Library from "./Sections/Library"
import Chat from "./Sections/Chat"


import Share from "./Components/Share"
import { PiArrowFatLinesRight } from "react-icons/pi"
import Page from "./Sections/Page"


function App() {


  return (
    <>
      <div className="flex w-full justify-between md:gap-5 h-screen md:max-h-screen max-h-[90vh]  p-6">
        <div className="">
          <SideBar />
        </div>
        <div className="w-full h-full flex flex-col">
        <Page/>
        </div>

        {/* {
          share && (
            <div className="absolute centered-axis-x">
              <Share />
            </div>
          )
        } */}


      </div>
    </>
  )
}

export default App
