
import { Routes, Route } from "react-router-dom"
import Navbar from "./components/Navbar"
import CreateID from "./components/CreateID"
import GetText from "./components/GetText"

function App() {

  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<CreateID />}></Route>
        <Route path="/getText" element={<GetText />}></Route>
      </Routes>
    </>
  )
}

export default App