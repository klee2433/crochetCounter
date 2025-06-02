import Home from '../assets/home.png';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    
    return (
        <header class="App-header">
            <button onClick={() => navigate('/home')} class="Button">
                <img src={Home} alt="Home" class="Icon"/>
            </button>
        </header>
    );
}

export default Header;