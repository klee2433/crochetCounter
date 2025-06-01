import Restart from './assets/restart.png';
import Subtract from './assets/subtract.png';
import Add from './assets/add.png';

import {useState} from 'react';

function StitchCounter() {
    const [stitches, setStitches] = useState(0);
    return (
        <div>
            <h1>
                {stitches}
            </h1>
            <h3>
                Stitches
            </h3>
            <div class="Counter-buttons-outer">
                <div class="Counter-buttons">
                    <button onClick={() => setStitches(0)} class="Button" id="restart-button">
                        <img src={Restart} alt="Restart" class="Counter-icon"/>
                    </button>

                    <button onClick={() => {if (stitches > 0) setStitches(stitches - 1)}} class="Button" id="subtract-button">
                        <img src={Subtract} alt="Subtract" class="Counter-icon"/>
                    </button>

                    <button onClick={() => setStitches(stitches + 1)} class="Button" id="add-button">
                        <img src={Add} alt="Add" class="Counter-icon"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default StitchCounter;