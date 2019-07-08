import { combineReducers } from "redux";

function comments(state = [], action) {
  if (action.type === "COMMENTS_LOADED") {
    return action.value;
  }
  return state;
}

function comment(state = [], action) {
  if (action.type === "GET_COMMENT_DONE") {
    return action.value;
  }
  return state;
}

const rootReducer = combineReducers({
  comments,

  comment
});
export default rootReducer;
