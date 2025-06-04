import { useNavigate } from 'react-router-dom';
import { IoIosTrash } from "react-icons/io";
import { IoIosAddCircle } from "react-icons/io";

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

    return (
        <div class="Project">
            <h2>
                My Crochet Projects
            </h2>
            <div class="Title-list">
                <div class="List">
                    <i>Project Name</i>
                </div>
                <div class="List">
                    <i>Date Started</i>
                </div>
            </div>
            <div class="Project-list">
                <div>
                    <ul class="No-bullets">
                        {projects.map((project, index) =>
                            <li key={index}>
                                <button onClick={() => navigate(`/counter/${project}`)} class="Button">
                                    <div class="Title">{project}</div>
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
                <div>
                    <ul class="No-bullets">
                        {dates.map((date, index) =>
                            <li key={index}>
                                <button class="Button">
                                    {date}
                                </button>
                                <button onClick={() => {deleteProject(index)}} class="Button">
                                    <IoIosTrash />
                                </button>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
            <div class="Name-input">
                <input 
                    type="text"
                    placeholder="New Project Name"
                    value={newProject}
                    onChange={handleInputChange}/>
                <button onClick={() => {addProject()}} class="Button">
                    <IoIosAddCircle class="Icon"/>
                </button>
            </div>
        </div>
    );
}

export default Menu;