import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';

export const Home = () => {

  const navLinkStyles = ({ isActive }) => ({
    color: isActive ? '#007bff' : '#333',
    textDecoration: isActive ? 'none' : 'underline',
    fontWeight: isActive ? 'bold' : 'normal',
    padding: '5px 10px'
  });

  const [someVar, setSomeVar] = useState(null);
  const [someVar2, setSomeVar2] = useState(null);

  useEffect(() => {
    fetch('/api/example')
      .then(res => res.json())
      .then(data => setSomeVar2(data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>Home</h1>

      <NavLink to="/" style={({ isActive }) => navLinkStyles({ isActive })}>
        Homee
      </NavLink>

      <NavLink to="/about" style={({ isActive }) => navLinkStyles({ isActive })}>
        About
      </NavLink>

      <div>
        <p>someVar: {String(someVar)}</p>
        <p>someVar2: {JSON.stringify(someVar2)}</p>
      </div>
    </div>
  );
};
