import { ActionTypes } from '../actions/cart.action';
import { ActionModel } from '../models/action.model';

export const products = [];

export function cartReducer(state = products, action: ActionModel) {
    switch (action.type) {
        case ActionTypes.Add:
            {
                state.push(action.payload);
                console.log(state);
                return state;
            };

        case ActionTypes.Remove:
            {
                state.pop();
                console.log(state);
                return state;
            };

        case ActionTypes.Clear:
            {
                state = [];
                console.log(state);
                return state;
            }

        default:
            return state;
    }
}