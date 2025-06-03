import { RiRestartLine } from "react-icons/ri";
import { RiSubtractFill } from "react-icons/ri";
import { RiAddFill } from "react-icons/ri";

import { usePersistedState } from '../hooks/usePesistedState';

function RowCounter() {
    const [rows, setRows] = usePersistedState("rows", 0)

    return (
        <div>
            <h1>
                {rows}
            </h1>
            <h3>
                Rows
            </h3>
            <div class="Counter-buttons-outer">
                <div class="Counter-buttons">
                    <button onClick={() => setRows(0)} class="Button" id="restart-button">
                        <RiRestartLine class="Restart-icon"/>
                    </button>

                    <button onClick={() => {if (rows > 0) setRows(rows - 1)}} class="Button" id="subtract-button">
                        <RiSubtractFill class="Icon"/>
                    </button>

                    <button onClick={() => setRows(rows + 1)} class="Button" id="add-button">
                        <RiAddFill class="Icon"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RowCounter;