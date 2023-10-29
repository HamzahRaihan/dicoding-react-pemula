import { NavLink } from 'react-router-dom';

function Navigation() {
  return (
    <>
      <nav style={{ background: 'white', width: 'auto', height: '4rem', display: 'flex', gap: 5, alignItems: 'center', padding: '0 20px 0px 20px' }} className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/array-data">Array</NavLink>
        <NavLink to="/dicoding-berita">berita</NavLink>
      </nav>
    </>
  );
}

export default Navigation;
