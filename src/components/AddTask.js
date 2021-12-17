import React from 'react'
import { FaRegListAlt, FaRegCalendarAlt } from 'react-icons/fa';
import { firebase } from '../firebase';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { setShowMain, setShowProjectOverlay, setShowTaskDate, setTask, taskProjects } from '../actions';
import { useState } from 'react';
import { generatePushId } from '../helpers';
import { useProjectsValue, useSelectedProjectValue } from '../context';
import addTasks from '../reducers/AddTask';
import { ProjectOverlay } from './ProjectOverlay';
import { TaskDate } from './TaskDate';


export const AddTask = () => {
    const dispatch = useDispatch()
    // const [show, setShow] = useState(shouldShow);
    //const [project, setProject] = useState('');
    const project = useSelector((state) => state.TaskProjects.project)
    const showMain = useSelector(state => state.ShowMain.setshowmain)
    const selectedProject = useSelector((state) => state.selectedprojects.selectedProject);
    console.log("showmain", showMain);
    //  const [task, setTask] = useState('');
    const task = useSelector(state => state.addTasks.task)
    console.log("Tasks", task);

    const projectId = generatePushId();
    const projects = useProjectsValue();

    const addTask = () => {


        const projectId = project || selectedProject;
        let collatedDate = '';

        if (projectId === 'TODAY') {
            collatedDate = moment().format('DD/MM/YYYY');
        } else if (projectId === 'NEXT_7') {
            collatedDate = moment().add(7, 'days').format('DD/MM/YYYY');
        }
        task && projectId &&
            firebase
                .firestore()
                .collection('tasks')
                .add({
                    projectId,
                    task,
                    userId: 'admin@',
                })
                .then(() => {
                    // dispatch(setProjects([...projects]));
                    // setProjectName('');
                    dispatch(setShowMain(''));
                });

    }
    return (
        <div>
            <div className="add-task__main" data-testid="add-task__main">
                {showMain && (
                    <div className="add-task__input" data-testid="add-task-inner">
                        <input
                            className="add-task__content"
                            aria-label="Enter your task"
                            data-testid="add-task-content"
                            type="text"
                            value={task}
                            onChange={(e) => dispatch(setTask(e.target.value))}
                        />
                        <button
                            className="add-task__submit"
                            type="button"
                            onClick={() => addTask()}
                            data-testid="add-task-submit"
                        >
                            Add Task
                        </button>
                        <span

                            onClick={() => dispatch(setShowMain(false))}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter') dispatch(setShowMain(false));
                            }}
                            role="button"
                            tabIndex={0}
                        >
                            Cancel
                        </span>
                    </div>
                )}
                <span className="add-task__plus">+</span>
                <span

                    onClick={() => dispatch(setShowMain(!showMain))}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') dispatch(setShowMain(!showMain));
                    }}
                    role="button"
                    tabIndex={0}
                >
                    Add Task

                </span>
            </div>
        </div>
    )
}





// export const AddTask = ({
//     showAddTaskMain = true,
//     shouldShowMain = false,
//     // showQuickAddTask,
//     // setShowQuickAddTask,
// }) => {
//     const task = useSelector(state => state.addTasks.task)
//     const showQuickAddTask = useSelector((state) => state.SetShowQuickAddTask.showquickaddtask)

//     const taskDate = useSelector((state) => state.SetTaskDate.settaskdate)
//     const project = useSelector(state => state.TaskProjects.project)

//     const showMain = useSelector(state => state.ShowMain.setshowmain)
//     const dispatch = useDispatch()

//     const showProjectOverlay = useSelector((state) => state.SetShowProjectOverlay.showprojectoverlay)
//     const showTaskDate = useSelector((state) => state.SetShowTaskDate.showtaskdate)

//     const projectId = generatePushId();
//     const selectedProject = useSelector((state) => state.selectedprojects.selectedProject);

//     const projects = useProjectsValue();

//     const addTask = () => {
//         const projectId = project || selectedProject;
//         let collatedDate = '';

//         if (projectId === 'TODAY') {
//             collatedDate = moment().format('DD/MM/YYYY');
//         } else if (projectId === 'NEXT_7') {
//             collatedDate = moment().add(7, 'days').format('DD/MM/YYYY');
//         }
//         debugger

//         return (
//             task &&
//             projectId &&
//             firebase
//                 .firestore()
//                 .collection('tasks')
//                 .add({
//                     archived: false,
//                     projectId,
//                     task,
//                     date: collatedDate || taskDate,
//                     userId: 'jlIFXIwyAL3tzHMtzRbw',
//                 })
//                 .then(() => {
//                     dispatch(addTasks(''));
//                     dispatch(taskProjects(''));
//                     dispatch(setShowMain(''));
//                     dispatch(setShowProjectOverlay(false));
//                 })
//         );
//     };

//     return (
//         <div
//             className={showQuickAddTask ? 'add-task add-task__overlay' : 'add-task'}
//             data-testid="add-task-comp"
//         >
//             {showAddTaskMain && (
//                 <div
//                     className="add-task__shallow"
//                     data-testid="show-main-action"
//                     onClick={() => dispatch(setShowMain(!showMain))}
//                     onKeyDown={(e) => {
//                         if (e.key === 'Enter') dispatch(setShowMain(!showMain));
//                     }}
//                     tabIndex={0}
//                     aria-label="Add task"
//                     role="button"
//                 >
//                     <span className="add-task__plus">+</span>
//                     <span className="add-task__text">Add Task</span>
//                 </div>
//             )}

//             {(showMain || showQuickAddTask) && (
//                 <div className="add-task__main" data-testid="add-task-main">
//                     {showQuickAddTask && (
//                         <>
//                             <div data-testid="quick-add-task">
//                                 <h2 className="header">Quick Add Task</h2>
//                                 <span
//                                     className="add-task__cancel-x"
//                                     data-testid="add-task-quick-cancel"
//                                     aria-label="Cancel adding task"
//                                     onClick={() => {
//                                         dispatch(setShowMain(false));
//                                         dispatch(setShowProjectOverlay(false));
//                                         //setShowQuickAddTask(false);
//                                     }}
//                                     onKeyDown={(e) => {
//                                         if (e.key === 'Enter') {
//                                             dispatch(setShowMain(false));
//                                             dispatch(setShowProjectOverlay(false));
//                                             dispatch(setShowQuickAddTask(false));
//                                         }
//                                     }}
//                                     tabIndex={0}
//                                     role="button"
//                                 >
//                                     X
//                                 </span>
//                             </div>
//                         </>
//                     )}
//                     <ProjectOverlay />
//                     <TaskDate
//                     //   setTaskDate={setTaskDate}
//                     //   showTaskDate={showTaskDate}
//                     //   setShowTaskDate={setShowTaskDate}
//                     />
//                     <input
//                         className="add-task__content"
//                         aria-label="Enter your task"
//                         data-testid="add-task-content"
//                         type="text"
//                         value={task}
//                         onChange={(e) => dispatch(addTasks(e.target.value))}
//                     />
//                     <button
//                         type="button"
//                         className="add-task__submit"
//                         data-testid="add-task"
//                         onClick={() =>
//                             showQuickAddTask
//                                 ? addTask() && dispatch(setShowQuickAddTask(false))
//                                 : addTask()
//                         }
//                     >
//                         Add Task
//                     </button>
//                     {!showQuickAddTask && (
//                         <span
//                             className="add-task__cancel"
//                             data-testid="add-task-main-cancel"
//                             onClick={() => {
//                                 dispatch(setShowMain(false));
//                                 dispatch(setShowProjectOverlay(false));
//                             }}
//                             onKeyDown={(e) => {
//                                 if (e.key === 'Enter') {
//                                     dispatch(setShowMain(false));
//                                     dispatch(setShowProjectOverlay(false));
//                                 }
//                             }}
//                             aria-label="Cancel adding a task"
//                             tabIndex={0}
//                             role="button"
//                         >
//                             Cancel
//                         </span>
//                     )}
//                     <span
//                         className="add-task__project"
//                         data-testid="show-project-overlay"
//                         onClick={() => dispatch(setShowProjectOverlay(!showProjectOverlay))}
//                         onKeyDown={(e) => {
//                             if (e.key === 'Enter') dispatch(setShowProjectOverlay(!showProjectOverlay));
//                         }}
//                         tabIndex={0}
//                         role="button"
//                     >
//                         <FaRegListAlt />
//                     </span>
//                     <span
//                         className="add-task__date"
//                         data-testid="show-task-date-overlay"
//                         onClick={() => dispatch(setShowTaskDate(!showTaskDate))}
//                         onKeyDown={(e) => {
//                             if (e.key === 'Enter') dispatch(setShowTaskDate(!showTaskDate));
//                         }}
//                         tabIndex={0}
//                         role="button"
//                     >
//                         <FaRegCalendarAlt />
//                     </span>
//                 </div>
//             )}
//         </div>
//     );
// };