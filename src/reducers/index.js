import { combineReducers } from 'redux';
import tasks from './setTask';
import Archiveds from './setArchived';
import projects from './setProjects';
import selectedprojects from './setSelectedProjects';
import shows from './setShow';
import ShowMain from './setShowMain';
import projectNames from './setProjectName';
import addTasks from './AddTask';
import TaskProjects from './TaskProjects';
import ShowConfirm from './ShowConfirm';
import SetTaskDate from './SetTaskDate';
import SetShowTaskDate from './SetShowTaskDate';
import SetShowProjectOverlay from './SetShowProjectOverlay';
import SetShouldShowMain from './SetShouldShowMain';
import SetShowQuickAddTask from './SetShowQuickAddTask';
export default combineReducers({
 
   tasks,
   Archiveds,
   projects,
   selectedprojects,
   shows,
   projectNames,
   addTasks,
   TaskProjects,
   ShowConfirm,
   ShowMain,
   SetTaskDate,
   SetShowTaskDate,
   SetShowProjectOverlay,
   SetShouldShowMain,
   SetShowQuickAddTask
});