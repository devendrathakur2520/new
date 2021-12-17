
import { SET_SHOW_MAIN,} from "../actions";
const initialState = {
    setshowmain:false,
   
   }
   
   export default function ShowMain (state = initialState, action) {
  
     switch (action.type) {
       case SET_SHOW_MAIN:
         return {
           ...state,
           setshowmain : action.payload,
         };
         default:
       return state;
   }
 }