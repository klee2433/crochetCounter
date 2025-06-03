import RowCounter from './RowCounter';
import StitchCounter from './StitchCounter';

import { usePersistedState } from '../hooks/usePesistedState';

function Project() {
    const [notes, setNotes] = usePersistedState("notes","Notes")

    return (
        <div class="Project">
            <h2>
                Crochet Project Title
            </h2>
            <div class="Counters">
                <RowCounter />
                <StitchCounter />
            </div>
            <textarea 
                id="notes" 
                name="notes" 
                rows="4" 
                cols="50" 
                value={notes}
                onChange={e => setNotes(e.target.value)}>
            </textarea>
        </div>
    );
}

export default Project;