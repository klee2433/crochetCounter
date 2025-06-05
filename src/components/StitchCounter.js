import { RiRestartLine } from "react-icons/ri";
import { RiSubtractFill } from "react-icons/ri";
import { RiAddFill } from "react-icons/ri";

import { usePersistedState } from '../hooks/usePesistedState';
import { useParams } from 'react-router-dom';

import { useState } from 'react';
import { Confirm } from 'react-admin';

function StitchCounter() {
    const {project} = useParams();
    const [stitches, setStitches] = usePersistedState(`stitches/${project}`, 0);

    const [open, setOpen] = useState(false);
        const handleClick = () => {
            setOpen(true);
        };
        const handleDialogClose = () => {
            setOpen(false);
        };
        const handleConfirm = () => {
            setStitches(0);
            setOpen(false);
        };

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
                    <button onClick={() => handleClick()} class="Button" id="restart-button">
                        <RiRestartLine class="Restart-icon"/>
                    </button>
                    <Confirm
                        isOpen={open}
                        title={`Reset Stitches`}
                        content="Reset the stitch counter to zero?"
                        onConfirm={handleConfirm}
                        onClose={handleDialogClose}
                        confirm="Yes, reset"
                        cancel="No, do not reset"
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

                    <button onClick={() => {if (stitches > 0) setStitches(stitches - 1)}} class="Button" id="subtract-button">
                        <RiSubtractFill class="Count-icon"/>
                    </button>

                    <button onClick={() => setStitches(stitches + 1)} class="Button" id="add-button">
                        <RiAddFill class="Count-icon"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default StitchCounter;