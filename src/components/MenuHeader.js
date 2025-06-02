import { IoIosAddCircle } from "react-icons/io";

function MenuHeader() {
    return (
        <header class="App-header">
            <button onClick={() => alert('Add button clicked')} class="Button">
                <IoIosAddCircle class="Icon"/>
            </button>
        </header>
    );
}

export default MenuHeader;