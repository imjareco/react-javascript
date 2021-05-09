import { ON_LOGIN } from "user/actions";

const initialState = {
    account: { 
        username: "test", 
    }
};

export function account(state = initialState.account, { type, payload }) {
    if (type === ON_LOGIN) {
        return payload;
    }
    return initialState.account;
}

const getState = state => state.account;
export const getUser = state => getState(state).account;