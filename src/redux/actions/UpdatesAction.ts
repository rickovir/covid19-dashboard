import axios from "axios";
import { Dispatch } from "redux";
import { UpdateAction, UpdateActionType } from "../types/UpdatesType";

export const loadAllData = () => async (dispatch: Dispatch<UpdateAction>) => {
    try {
        const {data, update} = ( await axios.get('update') )?.data as any;

        dispatch({
            type: UpdateActionType.SET_OVERALL_UPDATE,
            payload: { data, update } 
        });
    } catch(err) {
        console.log(err);
    }
};