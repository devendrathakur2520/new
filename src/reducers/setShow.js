
import { SET_SHOW,} from "../actions";
const initialState = {
    show:false,
   
   }
   
   export default function shows (state = initialState, action) {
       console.log("setShow",state);
  
     switch (action.type) {
       case SET_SHOW:
         return {
           ...state,
         show : action.payload,
         };
         default:
       return state;
   }
 }