import { NavLink, Outlet } from 'react-router-dom';
import './Navigation.css';

function Navigation() {
  return (
    <>
      <nav>
        <NavLink to="/" end>Greenhouse</NavLink>
        <NavLink to="thermometer">Thermometer</NavLink>
        <NavLink to="hygrometer">Hygrometer</NavLink>
      </nav>
      <Outlet />
    </>
  )
}

export default Navigation;
