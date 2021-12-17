
import { SET_SHOW_QUICK_ADD_TASK,} from "../actions";
const initialState = {
    showquickaddtask:false,
   
   }
   
   export default function SetShowQuickAddTask (state = initialState, action) {
  
     switch (action.type) {
       case SET_SHOW_QUICK_ADD_TASK:
         return {
           ...state,
           showquickaddtask : action.payload,
         };
         default:
       return state;
   }
 }