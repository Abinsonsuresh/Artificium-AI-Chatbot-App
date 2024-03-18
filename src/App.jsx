import Header from "./Components/Header"
import SideBar from "./Components/SideBar"

function App() {

  return (
    <>
      <div className="flex p-4 gap-5 max-h-screen overflow-hidden">
        <SideBar/>
        <Header />
      </div>

    </>
  )
}

export default App
