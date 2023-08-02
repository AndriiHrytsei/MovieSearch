import { Route, Routes } from "react-router-dom"
import Navigation from "./Navigation/Navigation"
import Home from "./pages/Home"
import Movies from "./pages/Movies"

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path='/Movies' element={<Movies/>}/>
        <Route path="#" element={<p>404 Not found</p>}/>
      </Route>
    </Routes>
  )
}
