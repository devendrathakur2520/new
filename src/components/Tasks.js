import React from 'react'
import { useEffect } from 'react';
import { useTasks } from '../hooks';
import { Checkbox } from './Checkbox';
import { collatedTasks } from '../constant';
import { getTitle, getCollatedTitle, collatedTasksExist } from '../helpers'
import { useProjectsValue, useSelectedProjectValue, useSelectedProjectvalue } from '../context';
import { AddTask } from './AddTask';

export const Tasks = () => {
    const selectedProject = useSelectedProjectValue();
    const projects = useProjectsValue()
    const { tasks } = useTasks(selectedProject);
    console.log("ghjghhhh", tasks);
    let projectName = '';

    if (projects && selectedProject && !collatedTasksExist(selectedProject)) {
        projectName = getTitle(projects, selectedProject).name;
        console.log('projectName1', projectName);
    }

    if (collatedTasksExist(selectedProject) && selectedProject) {
        projectName = getCollatedTitle(collatedTasks, selectedProject).name
        console.log('projectName2', projectName);
    }

    useEffect(() => {
        document.title = `${projectName}:Todoist`
    }, [])

    return (
        <div className='tasks' data-testid="tasks">
            <h2 data-testid="project-name">{projectName}</h2>

            <ul className="tasks__list">

                {tasks.map(task => (
                    <li key={`${task.id}`}>
                        <Checkbox id={task.id} />
                        <span>{task.task}</span>
                    </li>
                ))}</ul>
            <AddTask />
        </div>
    )
}
