import Header from "./Components/Header"
import SideBar from "./Components/SideBar"
import Artificium from "./Sections/Artificium"

function App() {

  return (
    <>
      <div className="flex p-4 gap-5 max-h-screen ">
        <SideBar />
        <div className="flex flex-col">
          <Header />
          <Artificium />
        </div>
      </div>

    </>
  )
}

export default App
