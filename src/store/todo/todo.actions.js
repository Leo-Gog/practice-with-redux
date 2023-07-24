import actionKeys from "./action.keys";

export const addTodoAction = (payload) => ({
  type: actionKeys.add,
  payload,
});

export const toggleTodoStatusAction = (payload) => ({
  type: actionKeys.toggle,
  payload,
});

export const removeTodoAction = (payload) => ({
  type: actionKeys.remove,
  payload,
});
