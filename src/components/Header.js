import { IoIosHome } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
   
function Header() {
    const navigate = useNavigate();

    return (
        <header class="App-header">
            <button onClick={() => navigate('/home')} class="Button">
                <IoIosHome class="Icon"/>
            </button>
        </header>
    );
}

export default Header;