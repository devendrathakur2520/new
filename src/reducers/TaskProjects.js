
  
import { TASK_PROJECTS } from "../actions";
const initialState = {
    project:[],
   
   }
   
   export default function TaskProjects (state = initialState, action) {
  
     switch (action.type) {
       case TASK_PROJECTS:
         return {
           ...state,
         project: action.payload,
         };
         default:
       return state;
   }
 }