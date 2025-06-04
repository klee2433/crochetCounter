import RowCounter from './RowCounter';
import StitchCounter from './StitchCounter';

import { usePersistedState } from '../hooks/usePesistedState';
import { useParams } from 'react-router-dom';

function Project() {
    const [notes, setNotes] = usePersistedState("notes","Notes")
    const {project} = useParams();

    return (
        <div class="Project">
            <h2>
                {project}
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