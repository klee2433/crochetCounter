import RowCounter from './RowCounter';
import StitchCounter from './StitchCounter';

import { usePersistedState } from '../hooks/usePesistedState';
import { useParams } from 'react-router-dom';

import { MdDriveFileRenameOutline } from "react-icons/md";
import { BiRename } from "react-icons/bi";
import { IoIosTrash } from "react-icons/io";

import { FileUploader } from './FileUploader';
import { useState } from 'react';
import { Confirm } from 'react-admin';

function Project() {
    const {project} = useParams();
    const [notes, setNotes] = usePersistedState(`notes/${project}`,"--- All changes are saved automatically --- \n Enter notes about this project here...");
    const [fileName, setFileName] = usePersistedState(`file/${project}`,null);

    const handleFile = (file) => {
        setFileName(URL.createObjectURL(file))
    };

    const [open, setOpen] = useState(false);
    const handleClick = () => {
        setOpen(true);
    };
    const handleDialogClose = () => {
        setOpen(false);
    };
    const handleConfirm = () => {
        setNotes("");
        setOpen(false);
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
                <div className="Notes-header">
                    <div className="Notes">
                        <BiRename className="Edit-icon"/>
                        &nbsp; <div>Notes</div>
                    </div>
                    <button onClick={() => {handleClick()}} className="Button" id="clear-notes-button">
                        <IoIosTrash className="Clear-icon"/>
                    </button>
                    <Confirm
                        isOpen={open}
                        title={"Clear Notes"}
                        content="Are you sure you want to delete notes for this project?"
                        onConfirm={handleConfirm}
                        onClose={handleDialogClose}
                        confirm="Yes, delete forever"
                        cancel="No, do not delete"
                        sx={{
                            '& .MuiDialog-paper': {
                                borderRadius:'3vw',
                            },
                            '& .MuiDialogTitle-root': {
                                backgroundColor: 'rgb(186, 239, 189)',
                                color: ' #4B4A67',
                                padding:'2vw',
                                fontFamily:'MonomaniacOne-Regular',
                                fontSize:'3vw',
                            },
                            '& .MuiDialogContent-root': {
                                color: ' #4B4A67',
                                padding:'2vw',
                                fontFamily:'MonomaniacOne-Regular',
                                fontSize:'3vw'
                            },
                            '& .MuiDialogActions-root': {
                                padding:'2vw',
                            },
                            '& .RaConfirm-confirmPrimary': { // Target the confirm button
                                backgroundColor: ' #FD96A9',
                                '&:hover': {
                                backgroundColor: ' #f8bfca',
                                },
                            },
                            '& .MuiButton-text': { // Target the cancel button
                                color: ' #4B4A67',
                                fontFamily:'MonomaniacOne-Regular',
                                fontSize:'2vw',
                                '&:hover': {
                                color: ' #8584b1',
                                },
                            },
                        }}
                    />
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