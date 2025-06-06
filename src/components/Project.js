import RowCounter from './RowCounter';
import StitchCounter from './StitchCounter';

import { usePersistedState } from '../hooks/usePesistedState';
import { useParams } from 'react-router-dom';

import { MdDriveFileRenameOutline } from "react-icons/md";
import { BiRename } from "react-icons/bi";

import { FileUploader } from './FileUploader';

function Project() {
    const {project} = useParams();
    const [notes, setNotes] = usePersistedState(`notes/${project}`,"Enter notes about this project here...");
    const [fileName, setFileName] = usePersistedState(`file/${project}`,null);

    const handleFile = (file) => {
        setFileName(URL.createObjectURL(file))
    };

    return (
        <div className="Project">
            <h2>
                <MdDriveFileRenameOutline /> &nbsp; {project}
            </h2> 
            <img src={fileName} className="Project-image"/>
            <FileUploader handleFile={handleFile} /> 
            <div className="Counters">
                <RowCounter />
                <StitchCounter />
            </div>
            <div className="Notes-container">
                <div className="Notes">
                    <BiRename className="Edit-icon"/>
                    &nbsp; <div>Notes</div>
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