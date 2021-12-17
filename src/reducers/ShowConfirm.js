
  
import { SET_SHOW_CONFIRM } from "../actions";
const initialState = {
    showconfirm:false,
   
   }
   
   export default function ShowConfirm (state = initialState, action) {
  
     switch (action.type) {
       case SET_SHOW_CONFIRM:
         return {
           ...state,
           showconfirm : action.payload,
         };
         default:
       return state;
   }
 }