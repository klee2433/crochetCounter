import Restart from './assets/restart.png';
import Subtract from './assets/subtract.png';
import Add from './assets/add.png';

function StitchCounter() {
    return (
        <div>
            <h1>
                0
            </h1>
            <h3>
                Stitches
            </h3>
            <div class="Counter-buttons-outer">
                <div class="Counter-buttons">
                    <button onClick={() => alert('Restart button clicked!')} class="Button" id="restart-button">
                        <img src={Restart} alt="Restart" class="Counter-icon"/>
                    </button>

                    <button onClick={() => alert('Subtract button clicked!')} class="Button" id="subtract-button">
                        <img src={Subtract} alt="Subtract" class="Counter-icon"/>
                    </button>

                    <button onClick={() => alert('Add button clicked!')} class="Button" id="add-button">
                        <img src={Add} alt="Add" class="Counter-icon"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default StitchCounter;