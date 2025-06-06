import { IoIosHome } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import crochet from '../images/crochet.png';
   
function Header() {
    const navigate = useNavigate();

    return (
        <header className="App-header">
            <button onClick={() => navigate('/home')} className="Button">
                <IoIosHome className="Icon" id="home-icon"/>
            </button>
            <img src={crochet} height="50vw" alt="Crochet Counter" className="App-logo"/>
        </header>
    );
}

export default Header;