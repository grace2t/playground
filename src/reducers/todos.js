import {
  ADD_TODO,
  DELETE_TODO,
  EDIT_TODO,
  COMPLETE_TODO,
  COMPLETE_ALL_TODOS,
  CLEAR_COMPLETED
} from "../constants/ActionTypes";

const initialState = [
  {
    text: "Use Redux",
    completed: false,
    id: 0
  }
];

// this is a Reducer [fn. 1]
export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: state.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1,
          completed: false,
          text: action.text
        }
      ];

    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.id);

    case EDIT_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, text: action.text } : todo
      );

    case COMPLETE_TODO:
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      );

    case COMPLETE_ALL_TODOS:
      const areAllMarked = state.every(todo => todo.completed);
      return state.map(todo => ({
        ...todo,
        completed: !areAllMarked
      }));

    case CLEAR_COMPLETED:
      return state.filter(todo => todo.completed === false);

    default:
      return state;
  }
}

/* FOOTNOTES                                                                  ->
1. Reducer: https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/
   Redux revolves around a 'store' which is where the state of the application
lives.
   The only way to modify the store is through reducers.
   The only way to trigger reducers is to dispatch actions.
   Reducers specify how the application's state changes in response to actions
sent to the store. Remember that actions only describe what happened, but don't
describe how the application's state changes.

*/
