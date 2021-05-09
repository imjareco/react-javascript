// import {  } from "PROMISE_CALL";
// import {  } from "API";

export const ON_LOGIN = "User [AUTH] Login";
export const ON_LOGOUT = "User [AUTH] Logout";

export const credentials = user => ({
    type: ON_LOGIN,
    // [PROMISE_CALL]
    payload: () => api.credentials(user),
});
