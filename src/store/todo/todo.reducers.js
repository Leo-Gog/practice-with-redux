import actionKeys from "./action.keys";

const initialState = {
  todoList: [],
};

export const todoReducer = (state = initialState, action) => {
  const { todoList: todos } = state;
  const { type, payload } = action;
  switch (type) {
    case actionKeys.add:
      return {
        todoList: [...todos, payload],
      };
    case actionKeys.toggle:
      return {
        todoList: todos.map((todo) => {
          if (todo.id === payload)
            return {
              ...todo,
              status: !todo.status,
            };
          return todo;
        }),
      };
    case actionKeys.remove:
      return {
        todoList: todos.filter((todo) => todo.id !== payload),
      };
    default:
      return state;
  }
};
