import { useState } from "react"
import Header from "./Components/Header"
import SideBar from "./Components/SideBar"
import Artificium from "./Sections/Artificium"
import Library from "./Sections/Library"
import Chat from "./Sections/Chat"
import Share from "./Components/Share"
import { PiArrowFatLinesRight } from "react-icons/pi"
import { Routes, Route } from "react-router-dom"
import Test from "./Sections/Test"
import ChatBox from "./Sections/ChatBox"

function App() {
  const [share, setShare] = useState(false)
  const [section, setSection] = useState("artificium")

  let sectionComponent;

  switch (section) {
    case "artificium":
      sectionComponent = <Artificium />;
      break;
    case "chat":
      sectionComponent = <ChatBox />;
      break;

    case "library":
      sectionComponent = <Library />;
      break;
    default:
      sectionComponent = null;
  }


  return (
    <>
      <div className="flex w-full justify-between md:gap-5 md:h-screen md:max-h-screen md:p-6">
        <div className="">
          <SideBar setSection={setSection} setShare={setShare} share={share} />
        </div>
        <div className="w-full h-full overflow-hidden flex flex-col">
          <Header setSection={setSection} setShare={setShare} share={share}  />
          {sectionComponent}
        </div>

        {
          share && (
            <div className="absolute centered-axis-x">
              <Share />
            </div>
          )
        }


      </div>


    </>
  )
}

export default App
