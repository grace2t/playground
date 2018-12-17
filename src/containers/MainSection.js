// this is a container component
import { connect } from "react-redux";
import * as TodoActions from "../actions";
import { bindActionCreators } from "redux";
import MainSection from "../components/MainSection";
import { getCompletedTodoCount } from "../selectors";

// pure function that is provided the store's state [fn. 1]
// and returns an object as whose keys props of the connected component
// whose keys will then be passed on as the props of the component they are connected to
const mapStateToProps = state => ({
  todosCount: state.todos.length,
  completedCount: getCompletedTodoCount(state)
});

// pure function that is provided the store's dispatch [fn. 1]
// and returns an object as props of the connected component
// whose keys will then be passed on as the props of the component they are connected to
// the bindActionCreators() helper is used to bind action creators to the store's
// dispatch method. [fn. 1] [fn. 2]
const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(TodoActions, dispatch)
});

// calling the connect() function returns a higher-order component which can be used to
// wrap any React component. [fn. 1]
// it can take up to four arguments, all of which are optional.
// in this case, the MainSection presentation component will have todosCount,
// completedCount and actions as props
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MainSection);

/* FOOTNOTES                                                                  ->
1. React Redux Connect https://blog.logrocket.com/react-redux-connect-when-and-how-to-use-it-f2a1edab2013
2. Dispatch https://stackoverflow.com/questions/42871136/dispatch-function-in-redux-react#42871261
   dispatch() is the method used to dispatch actions and trigger state changes to the store.

*/
