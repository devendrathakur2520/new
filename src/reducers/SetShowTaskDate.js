
  
import { SET_SHOW_TASK_DATE } from "../actions";
const initialState = {
    showtaskdate:false,
   
   }
   
   export default function SetShowTaskDate (state = initialState, action) {
  
     switch (action.type) {
       case SET_SHOW_TASK_DATE:
         return {
           ...state,
           showtaskdate : action.payload,
         };
         default:
       return state;
   }
 }