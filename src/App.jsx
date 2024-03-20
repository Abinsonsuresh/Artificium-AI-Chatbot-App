import { useState } from "react"
import Header from "./Components/Header"
import SideBar from "./Components/SideBar"
import Artificium from "./Sections/Artificium"
import Library from "./Sections/Library"
import Chat from "./Sections/Chat"
import Share from "./Components/Share"
import { PiArrowFatLinesRight } from "react-icons/pi"
import Page from "./Sections/Page"
import { Routes, Route } from "react-router-dom"
import Test from "./Sections/Test"

function App() {


  return (
    <>
      <div className="flex w-full justify-between md:gap-5 md:h-screen md:max-h-screen md:p-6">
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

      <Routes>
        <Route path="/test" element={<Test/>}></Route>
      </Routes>
    </>
  )
}

export default App
