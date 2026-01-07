import './TopMenu.css';
import { NavLink } from 'react-router-dom';

function TopMenu() {
return (
  <>
    <nav>
        <ul>
            <li><NavLink to="/">Homepagina</NavLink></li>
            <li><NavLink to="/alle-blogs">Alle blogs</NavLink></li>
            <li><NavLink to="/blog-toevoegen">Nieuwe blog</NavLink></li>
        </ul>
    </nav>
  </>
);
}

export default TopMenu;
