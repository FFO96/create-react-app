import { combineReducers, createStore } from 'redux'
import { Newspaper } from "../../types/index";

type NewspapersAction = {
    type: string
    payload: Newspaper[]
}

const newspapersReducer= (state: Newspaper[] = [], action: NewspapersAction) => {

    switch (action.type){
        case "update":
            return action.payload;
        default:
            return state;
    }
};
/*const reducers = combineReducers({
    newspapers: newspapersReducer
});*/

//export default reducers;

export type State = ReturnType<typeof newspapersReducer>;
const store = createStore(newspapersReducer);

export default store;