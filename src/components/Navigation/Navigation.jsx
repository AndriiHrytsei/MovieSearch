import { Suspense } from 'react';
import { NavLink, Outlet } from 'react-router-dom';

export default function Navigation() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/">Home</NavLink>
          <NavLink to="/movies">Movies</NavLink>
        </nav>
      </header>
      <Suspense fallback={<p>Loading page...</p>}>
        <Outlet />
      </Suspense>
    </>
  );
}
