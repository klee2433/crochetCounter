import { useNavigate } from 'react-router-dom';

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
                        Project Title
                    </div>
                    <button onClick={() => navigate('/counter')} class="Button">
                        Crochet Project Title
                    </button>
                </div>
                <div>
                    <div class="List">
                        Last Modified
                    </div>
                    <button onClick={() => navigate('/counter')} class="Button">
                        Mon June 2
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Menu;