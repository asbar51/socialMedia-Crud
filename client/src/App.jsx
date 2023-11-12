import Home from "./Home"
import Create from "./components/Form/Create"

import {BrowserRouter, Routes, Route} from 'react-router-dom'


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/create" element={<Create></Create>}></Route>
      </Routes>
    </BrowserRouter>
  )
}