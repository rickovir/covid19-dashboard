import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { UpdateReducer } from "../reducers/UpdatesReducer";

const reducers = combineReducers({
    update: UpdateReducer
})


export type RootState = ReturnType<typeof reducers>;
export const store = createStore(reducers, {}, applyMiddleware(thunk));