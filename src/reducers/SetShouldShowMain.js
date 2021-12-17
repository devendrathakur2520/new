
import { SET_SHOULD_SHOW_MAIN,} from "../actions";
const initialState = {
    shouldshowmain:false,
   
   }
   
   export default function SetShouldShowMain (state = initialState, action) {
  
     switch (action.type) {
       case SET_SHOULD_SHOW_MAIN:
         return {
           ...state,
           shouldshowmain : action.payload,
         };
         default:
       return state;
   }
 }