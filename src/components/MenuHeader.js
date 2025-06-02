import Add from '../assets/add.png';

function MenuHeader() {
    return (
        <header class="App-header">
            <button onClick={() => alert('Add button clicked')} class="Button">
                <img src={Add} alt="Add" class="Icon"/>
            </button>
        </header>
    );
}

export default MenuHeader;