import axios from "axios";
import { Dispatch } from "redux";
import { DailyUpdateDetail, Harian, PositiveData, UpdateAction, UpdateActionType } from "../types/UpdatesType";

export const loadAllData = () => async (dispatch: Dispatch<UpdateAction>) => {
    try {
        const resp = ( await axios.get('update') )?.data as any;

        const {data, update} = resp.data;
        const { harian } = update as DailyUpdateDetail;

        dispatch({
            type: UpdateActionType.SET_OVERALL_UPDATE,
            payload: { data, update } 
        });

        dispatch({
            type: UpdateActionType.SET_TOTAL_POSITIVE_PERWEEK,
            payload: countTotalPositivePerWeek(harian)
        });

        dispatch({
            type: UpdateActionType.SET_POSITIVE_PERSIXMONTH,
            payload: mapPositivePerSixMonth(harian)
        });
    } catch(err) {
        console.log(err);
    }
};

const countTotalPositivePerWeek = ( dailyData: Array<Harian> ) => {
    const len = dailyData.length | 0;
    const start = len - 6; // index started with 0
    let sumTotal = 0;

    for(let i = start; i < len; i++) {
        sumTotal += dailyData[i].jumlah_positif.value;
    }

    return sumTotal;
}

const mapPositivePerSixMonth = ( dailyData: Array<Harian> ) => {
    const activatedDate = new Date(dailyData[0].key);
    let activatedMonth = activatedDate.getMonth();
    
    let positiveRes: Array<PositiveData> = [];
    let totalPositive = 0;
    let ittrNum = 1;
    for(const itemDaily of dailyData) {
        if (itemDaily.key === activatedDate.getTime()) {
            totalPositive = itemDaily.jumlah_positif.value + totalPositive;

            if (activatedMonth !== activatedDate.getMonth()) {
                activatedMonth = activatedDate.getMonth();
                positiveRes.push({
                    total: totalPositive,
                    cumulative: itemDaily.jumlah_positif_kum.value,
                    date: new Date(itemDaily.key)
                });
                totalPositive = 0;
            }

            if(dailyData[ittrNum]?.key) {
                activatedDate.setTime(dailyData[ittrNum].key);
            }
        }
        ittrNum++;
    }

    positiveRes.splice(0, positiveRes.length - 6)

    return positiveRes;
}
