import RowCounter from './RowCounter';
import StitchCounter from './StitchCounter';

import { usePersistedState } from '../hooks/usePesistedState';
import { useParams } from 'react-router-dom';

import { MdDriveFileRenameOutline } from "react-icons/md";
import { BiRename } from "react-icons/bi";

function Project() {
    const {project} = useParams();
    const [notes, setNotes] = usePersistedState(`notes/${project}`,"Enter notes here...")

    return (
        <div class="Project">
            <h2>
                <MdDriveFileRenameOutline /> &nbsp; {project}
            </h2>
            <div class="Counters">
                <RowCounter />
                <StitchCounter />
            </div>
            <div class="Notes-container">
                <div class="Notes">
                    <BiRename class="Edit-icon"/>
                    &nbsp;Notes
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
        </div>
    );
}

export default Project;