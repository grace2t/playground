import { createSelector } from "reselect";
import {
  SHOW_ALL,
  SHOW_COMPLETED,
  SHOW_ACTIVE
} from "../constants/TodoFilters";

// these are Redux selectors
// Selectors are functions that take Redux state as an argument and return
// some data to pass to the component. They can be simple or do more
// compilcated data transformations like filter a list.
// Redux state can be thought of like a database and selectors are like
// SELECT queries to get useful data (e.g. filtered list) from the database.

const getVisibilityFilter = state => state.visibilityFilter;
const getTodos = state => state.todos;

export const getVisibleTodos = createSelector(
  [getVisibilityFilter, getTodos],
  (visibilityFilter, todos) => {
    switch (visibilityFilter) {
      case SHOW_ALL:
        return todos;
      case SHOW_COMPLETED:
        return todos.filter(t => t.completed);
      case SHOW_ACTIVE:
        return todos.filter(t => !t.completed);
      default:
        throw new Error("Unknown filter: " + visibilityFilter);
    }
  }
);

export const getCompletedTodoCount = createSelector([getTodos], todos =>
  todos.reduce((count, todo) => (todo.completed ? count + 1 : count), 0)
);

/* FOOTNOTES                                                                  ->
1. Redux selectos https://www.saltycrane.com/blog/2017/05/what-are-redux-selectors-why-use-them/

*/
