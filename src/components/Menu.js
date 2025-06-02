import { useNavigate } from 'react-router-dom';
import { IoIosTrash } from "react-icons/io";

function Menu() {
    const navigate = useNavigate();

    return (
        <div class="Project">
            <h2>
                My Crochet Projects
            </h2>
            <div class="Project-list">
                <div>
                    <div class="List">
                        <i>Project Title</i>
                    </div>
                    <button onClick={() => navigate('/counter')} class="Button">
                        <div class="Title">Crochet Project Title</div>
                    </button>
                </div>
                <div>
                    <div class="List">
                        <i>Last Modified</i>
                    </div>
                    <button class="Button">
                        Mon June 2
                    </button>
                </div>
                <div>
                    <div class="List">
                        <br/>
                    </div>
                    <button onClick={() => alert('Trash button clicked')} class="Button">
                        <IoIosTrash />
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Menu;