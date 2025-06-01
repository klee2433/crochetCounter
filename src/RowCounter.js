import Restart from './assets/restart.png';
import Subtract from './assets/subtract.png';
import Add from './assets/add.png';

import {useState} from 'react';

function RowCounter() {
    const [rows, setRows] = useState(0);
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
                        <img src={Restart} alt="Restart" class="Counter-icon"/>
                    </button>

                    <button onClick={() => {if (rows > 0) setRows(rows - 1)}} class="Button" id="subtract-button">
                        <img src={Subtract} alt="Subtract" class="Counter-icon"/>
                    </button>

                    <button onClick={() => setRows(rows + 1)} class="Button" id="add-button">
                        <img src={Add} alt="Add" class="Counter-icon"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default RowCounter;