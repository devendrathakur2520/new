// import React from 'react'
// import {FaPizzaSlice} from 'react-icons/fa'

// export default function Header() {
//     const x=1;
//     return (
//        <header className="header" data-testid="header">
//            <nav>
//                <div className="logo">
//                     <img src="/images/logo.png" alt="Todoist" />
//                </div>
//                <div className="setting">
//                     <ul>
//                         <li>+</li>
//                         <li><FaPizzaSlice /></li>
//                     </ul>
//                </div>
//            </nav>
//        </header>
//     )
// }



import React, { useState } from 'react';
import { FaPizzaSlice } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { setShouldShowMain, setShowQuickAddTask } from '../../actions';
import { AddTask } from '../AddTask';

export const Header = ({ darkMode, setDarkMode }) => {
  //const [shouldShowMain, setShouldShowMain] = useState(false);
  const shouldShowMain=useSelector((state)=>state.SetShouldShowMain.shouldshowmain)
  const dispatch=useDispatch()
  //const [showQuickAddTask, setShowQuickAddTask] = useState(false);
  const showQuickAddTask=useSelector((state)=>state.SetShowQuickAddTask.showquickaddtask)

  return (
    <header className="header" data-testid="header">
      <nav>
        <div className="logo">
          <img src="/images/logo.png" alt="Todoist" />
        </div>
        <div className="settings">
          <ul>
            <li className="settings__add">
              <button
                data-testid="quick-add-task-action"
                aria-label="Quick add task"
                type="button"
                onClick={() => {
                  dispatch(setShowQuickAddTask(true));
                  dispatch(setShouldShowMain(true));
                }}
              >
                +
              </button>
            </li>
            <li className="settings__darkmode">
              <button
                data-testid="dark-mode-action"
                aria-label="Darkmode on/off"
                type="button"
                onClick={() => setDarkMode(!darkMode)}
              >
                <FaPizzaSlice />
              </button>
            </li>
          </ul>
        </div>
      </nav>

      {/* <AddTask
         showAddTaskMain={false}
         shouldShowMain={shouldShowMain}
        // showQuickAddTask={showQuickAddTask}
        // setShowQuickAddTask={setShowQuickAddTask}
      /> */}
    </header>
  );
};