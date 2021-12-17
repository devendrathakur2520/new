
  
import { SET_TASK_DATE } from "../actions";
const initialState = {
    settaskdate:[],
   
   }
   
   export default function SetTaskDate (state = initialState, action) {
  
     switch (action.type) {
       case SET_TASK_DATE:
         return {
           ...state,
         settaskdate : action.payload,
         };
         default:
       return state;
   }
 }