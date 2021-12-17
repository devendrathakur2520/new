import { useState, useEffect } from "react";
import { FaTrashAlt } from 'react-icons/fa';
import { useProjectsValue, useSelectedProjectValue } from "../../context";
import { firebase } from '../../firebase'
import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { setProjects, setselectedProject, setShowConfirm } from "../../actions";

export const IndividualProject = ({ project }) => {

    //const [showConfirm,setShowConfirm] = useState(false);
    const dispatch = useDispatch()
    const showConfirm = useSelector((state) => state.ShowConfirm.showconfirm)
    const { projects } = useProjectsValue(false);
    // const [selectedProject] = useSelectedProjectValue();


    const deleteProject = docId => {
        firebase
            .firestore()
            .collection('projects')
            .doc(docId)
            .delete()
            .then(() => {
                dispatch(setProjects([...projects]))
                dispatch(setselectedProject('INBOX'));

            })
    }
    return (
        <div>
            <span className="sidebar__dot">.</span>
            <span className="sidebar__project-name">{project.name}</span>
            <span className="sidebar__project-delete" data-testid="delete-project"
                role="button"
                onClick={() => dispatch(setShowConfirm(!showConfirm))}
                onKeyDown={() => dispatch(setShowConfirm(!showConfirm))}>
                <FaTrashAlt />
                {showConfirm && (
                    <div className="project-delete-modal">
                        <div className="project-delete-modal__inner">
                            <p>Are you sure you want to delete this project?</p>
                            <button
                                type="button"
                                onClick={() => deleteProject(project.docId)}
                            >    Delete
                            </button>
                        </div>
                    </div>
                )}
            </span>
        </div>
    )
}
