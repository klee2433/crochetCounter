import { RiRestartLine } from "react-icons/ri";
import { RiSubtractFill } from "react-icons/ri";
import { RiAddFill } from "react-icons/ri";

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
                        <RiRestartLine class="Restart-icon"/>
                    </button>

                    <button onClick={() => {if (stitches > 0) setStitches(stitches - 1)}} class="Button" id="subtract-button">
                        <RiSubtractFill class="Icon"/>
                    </button>

                    <button onClick={() => setStitches(stitches + 1)} class="Button" id="add-button">
                        <RiAddFill class="Icon"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default StitchCounter;