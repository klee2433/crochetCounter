import Home from './assets/home.png';

function Header() {
    return (
        <header class="App-header">
            <button onClick={() => alert('Home button clicked!')} class="Button">
                <img src={Home} alt="Home" class="Icon"/>
            </button>
        </header>
    );
}

export default Header;