import { NavLink, Outlet } from "react-router-dom"

export default function Navigation() {
  return (
    <>
      <header>
        <nav>
          <NavLink to='/'>Home</NavLink>
          <NavLink to='/Movies'>Movies</NavLink>
        </nav>
      </header>
      <Outlet/>
    </>
  )
}
