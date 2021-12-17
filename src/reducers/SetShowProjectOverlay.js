
import { SET_SHOW_PROJECT_OVERLAY,} from "../actions";
const initialState = {
    showprojectoverlay:false,
   
   }
   
   export default function SetShowProjectOverlay (state = initialState, action) {
  
     switch (action.type) {
       case SET_SHOW_PROJECT_OVERLAY:
         return {
           ...state,
           showprojectoverlay : action.payload,
         };
         default:
       return state;
   }
 }