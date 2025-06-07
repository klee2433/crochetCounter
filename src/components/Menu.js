import { useNavigate } from 'react-router-dom';
import { IoIosTrash } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdDateRange } from "react-icons/md";
import { BiRename } from "react-icons/bi";

import { useState } from 'react';
import { usePersistedState } from '../hooks/usePesistedState';
import { deleteItem } from '../utils/localStorage';

import { Confirm } from 'react-admin';

function Menu() {
    const currentDate = new Date();
    const localeDate = currentDate.toLocaleString();

    const navigate = useNavigate();
    const [projects, setProjects] = usePersistedState("projects", ["Template"])
    const [dates, setDates] = usePersistedState("dates", [localeDate])
    const [newProject, setNewProject] = useState("");

    function handleInputChange(event) {
        setNewProject(event.target.value)
    }

    function addProject() {
        if (newProject.trim() !== "" && !projects.includes(newProject)) {
            setProjects(p => [...p, newProject]);
            setDates(d => [...d, localeDate]);
            setNewProject("");
        } else if (projects.includes(newProject)) {
            alert(`Cannot use duplicate name: ${newProject}`);
        }
    }

    const [open, setOpen] = useState(false);
    const [indexToDelete, setIndexToDelete] = useState(null);
    const handleClick = (index) => {
        setOpen(true);
        setIndexToDelete(index)
    };
    const handleDialogClose = () => {
        setOpen(false);
    };
    const handleConfirm = () => {
        deleteProject(indexToDelete)
        setOpen(false);
    };

    function deleteProject(index) {
        const deletedProject = projects[index];

        const updatedProjects = projects.filter((_, i) => i !== index);
        setProjects(updatedProjects);
        const updatedDates = dates.filter((_, i) => i !== index);
        setDates(updatedDates);

        deleteItem(`rows/${deletedProject}`);
        deleteItem(`stitches/${deletedProject}`);
        deleteItem(`notes/${deletedProject}`);
    }

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            addProject();
        }
    };

    const [sortDirection, setSortDirection] = useState('asc');

    const handleSort = () => {
        setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    }

    const sortedProjects = sortDirection === 'asc' ? projects : projects.toReversed();
    const sortedDates = sortDirection === 'asc' ? dates : dates.toReversed();

    return (
        <div className="Project">
            <h2>
                My Crochet Projects
            </h2>
            <div className="Name-input">
                <BiRename className="Edit-icon"/>
                <input 
                    type="text"
                    placeholder="New Project Name" 
                    value={newProject}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}/>
                <button onClick={() => {addProject()}} className="Button">
                    <IoIosAddCircle className="Menu-icon"/>
                </button>
            </div>
            <div className="Project-list">
                <table>
                    <thead>
                        <tr>
                            <td className="List"><MdDriveFileRenameOutline /> &nbsp; Project Name</td>
                            <td className="List">&nbsp; &nbsp; <MdDateRange /> &nbsp; Date Started</td>
                            <td> <button onClick={() => handleSort()} className="Button">
                                <div className="Icon" id="sort-button">{sortDirection === 'desc' ? '▲' : '▼'}</div>
                            </button></td>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedProjects.map((project, index) =>
                            <tr>
                                <td>
                                    <button onClick={() => navigate(`/counter/${project}`)} className="Button" id="project-title">
                                        <div>{project}</div>
                                    </button>
                                </td>
                                <td>
                                    <button className="Button" id="project-date">
                                        {sortedDates[index]}
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => {handleClick(index)}} className="Button" id="trash-button">
                                        <IoIosTrash />
                                    </button>
                                    <Confirm
                                        isOpen={open}
                                        title={`Delete "${project}"`}
                                        content="Are you sure you want to delete this project?"
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
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Menu;