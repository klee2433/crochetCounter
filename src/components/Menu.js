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
    const navigate = useNavigate();
    const [projects, setProjects] = usePersistedState("projects", [])
    const [dates, setDates] = usePersistedState("dates", [])
    const [newProject, setNewProject] = useState("");

    const currentDate = new Date();
    const localeDate = currentDate.toLocaleDateString();

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
        <div class="Project">
            <h2>
                My Crochet Projects
            </h2>
            <div class="Name-input">
                <BiRename class="Edit-icon"/>
                <input 
                    type="text"
                    placeholder="New Project Name" 
                    value={newProject}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyDown}/>
                <button onClick={() => {addProject()}} class="Button">
                    <IoIosAddCircle class="Menu-icon"/>
                </button>
            </div>
            <div class="Project-list">
                <table>
                    <thead>
                        <tr>
                            <td class="List"><MdDriveFileRenameOutline /> &nbsp; Project Name</td>
                            <td class="List">&nbsp; &nbsp; <MdDateRange /> &nbsp; Date Started</td>
                            <td> <button onClick={() => handleSort()} class="Button" id="sort-button">
                                {sortDirection === 'desc' ? '▲' : '▼'}
                            </button></td>
                        </tr>
                    </thead>
                    <tbody>
                        {sortedProjects.map((project, index) =>
                            <tr>
                                <td>
                                    <button onClick={() => navigate(`/counter/${project}`)} class="Button" id="project-title">
                                        <div>{project}</div>
                                    </button>
                                </td>
                                <td>
                                    <button class="Button" id="project-date">
                                        {sortedDates[index]}
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => {handleClick(index)}} class="Button" id="trash-button">
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