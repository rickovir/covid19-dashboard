import { DailyUpdate, PositiveData, UpdateAction, UpdateActionType } from "../types/UpdatesType";

export interface UpdateState {
    allData?: DailyUpdate;
    totalPositivePerweek?: number;
    positivePersixmonth?: Array<PositiveData> | Array<any>;
};

const initialState: UpdateState = {
    allData: undefined,
    totalPositivePerweek: 0,
    positivePersixmonth: []
};

export const UpdateReducer = (state: UpdateState = initialState, action: UpdateAction): UpdateState => {
    switch (action.type) {
        case UpdateActionType.SET_OVERALL_UPDATE: 
            return {
                ...state,
                allData: action.payload
            }
        case UpdateActionType.SET_TOTAL_POSITIVE_PERWEEK: 
            return {
                ...state,
                totalPositivePerweek: action.payload
            }
        case UpdateActionType.SET_POSITIVE_PERSIXMONTH: 
            return {
                ...state,
                positivePersixmonth: action.payload
            }
        default :
            return state;
    }
};