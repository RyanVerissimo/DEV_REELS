import { Link } from 'react-router-dom';
import './header.css'

function Header() {
    return(
        <header>
            <Link className='logo-header' to="/">DEV REELS 🔴</Link>
            <Link className='favoritos' to="/favoritos">Meus filmes</Link>
        </header>
    )
}

export default Header;