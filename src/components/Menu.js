import { useNavigate } from 'react-router-dom';
import { IoIosTrash } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";
import { MdDriveFileRenameOutline } from "react-icons/md";
import { MdDateRange } from "react-icons/md";

import { useState } from 'react';
import { usePersistedState } from '../hooks/usePesistedState';
import { deleteItem } from '../utils/localStorage';

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

    return (
        <div class="Project">
            <h2>
                My Crochet Projects
            </h2>
            <div class="Name-input">
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
                            <td class="List"><MdDriveFileRenameOutline /> Project Name</td>
                            <td class="List"><MdDateRange /> Date Started</td>
                            <td></td>
                        </tr>
                    </thead>
                    <tbody>
                        {projects.map((project, index) =>
                            <tr>
                                <td>
                                    <button onClick={() => navigate(`/counter/${project}`)} class="Button" id="project-title">
                                        <div>{project}</div>
                                    </button>
                                </td>
                                <td>
                                    <button class="Button" id="project-date">
                                        {dates[index]}
                                    </button>
                                </td>
                                <td>
                                    <button onClick={() => {deleteProject(index)}} class="Button" id="trash-button">
                                        <IoIosTrash />
                                    </button>
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