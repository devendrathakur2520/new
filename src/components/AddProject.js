import React from 'react'
import { firebase } from '../firebase'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { generatePushId } from '../helpers'
import { setProjects, setShow, setProjectName } from '../actions'
import { useProjectsValue } from '../context'
export default function AddProject() {

    const dispatch = useDispatch()
    const show = useSelector(state => state.shows.show)
    const projectName = useSelector(state => state.projectNames.projectName)
    console.log("ProjectName", projectName);

    const projectId = generatePushId();
    const projects = useProjectsValue();

    const addProject = () =>
        projectName &&
        firebase
            .firestore()
            .collection('projects')
            .add({
                projectId,
                name: projectName,
                userId: 'admin@',
            })
            .then(() => {
                dispatch(setProjects([...projects]));
                dispatch(setProjectName(''));
                dispatch(setShow(false));
            });

    return (
        <div className="add-project" data-testid="add-project">
            {show && (
                <div className="add-project__input" data-testid="add-project-inner">
                    <input
                        value={projectName}
                        onChange={(e) => dispatch(setProjectName(e.target.value))}
                        className="add-project__name"
                        data-testid="project-name"
                        type="text"
                        placeholder="Name your project"
                    />
                    <button
                        className="add-project__submit"
                        type="button"
                        onClick={() => addProject()}
                        data-testid="add-project-submit"
                    >
                        Add Project
                    </button>
                    <span
                        aria-label="Cancel adding project"
                        data-testid="hide-project-overlay"
                        className="add-project__cancel"
                        onClick={() => dispatch(setShow(false))}
                        onKeyDown={(e) => {
                            if (e.key === 'Enter') dispatch(setShow(false));
                        }}
                        role="button"
                        tabIndex={0}
                    >
                        Cancel
                    </span>
                </div>
            )}
            <span className="add-project__plus">+</span>
            <span
                aria-label="Add Project"
                data-testid="add-project-action"
                className="add-project__text"
                onClick={() => dispatch(setShow(!show))}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') dispatch(setShow(!show));
                }}
                role="button"
                tabIndex={0}
            >
                Add Project
            </span>
        </div>
    )


}
