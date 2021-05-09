import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

const reducersBuilder = (modules) => 
  combineReducers(modules.reduce((initial, { reducers }) => reducers !== undefined && { ...initial, reducers }, {}));

const storeBuilder = (modules = []) => {  
  return createStore(
    reducersBuilder(modules), 
    composeWithDevTools(applyMiddleware(thunk)),
  );
};

export default storeBuilder;