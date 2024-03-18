import Header from "./Components/Header"
import SideBar from "./Components/SideBar"

function App() {

  return (
    <>
      <div className="flex p-4 gap-5 max-h-screen overflow-hidden">
        <div className="overflow-y-scroll overflow-x-hidden scroll  scroll-smooth">
        <SideBar/>

        </div>
        <Header />
      </div>

    </>
  )
}

export default App
