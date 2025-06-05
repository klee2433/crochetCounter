import { IoIosHome } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import crochet from '../images/crochet.png';
   
function Header() {
    const navigate = useNavigate();

    return (
        <header class="App-header">
            <button onClick={() => navigate('/home')} class="Button">
                <IoIosHome class="Icon" id="home-icon"/>
            </button>
            <img src={crochet} height="50vw" alt="Crochet Counter" class="App-logo"/>
        </header>
    );
}

export default Header;