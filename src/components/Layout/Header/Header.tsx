import { Link } from 'react-router-dom';
import './header.scss';

const Header = () => {
    return (
        <header className="header">
            <nav>
                <ul>
                    <li><Link to="/register">Registrar</Link></li>
                    <li><Link to="/login">Iniciar Sesión</Link></li>
                    <li><Link to="/favorites">Pokémones Favoritos</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
