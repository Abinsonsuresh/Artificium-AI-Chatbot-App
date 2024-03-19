import { useState } from "react"
import Header from "./Components/Header"
import SideBar from "./Components/SideBar"
import Artificium from "./Sections/Artificium"
import Library from "./Sections/Library"
import Chat from "./Sections/Chat"


import Share from "./Components/Share"


function App() {
  const [share, setShare] = useState(false)
  const [section, setSection] = useState("artificium")

  let sectionComponent;

  switch (section) {
    case "artificium":
      sectionComponent = <Artificium />;
      break;
      case "chat":
      sectionComponent = <Chat />;
      break;

      case "library":
      sectionComponent = <Library />;
      break;
    default:
      sectionComponent = null;
  }


  return (
    <>
      <div className="flex p-4  gap-5 max-h-screen  relative">
        <div className="flex-1">
        <SideBar  />
        </div>
        <div className="flex w-full flex-col">
          <Header  setSection={setSection} setShare={setShare} share={share}/>
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
