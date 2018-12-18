/* PROJECT breakdown
React
Redux
*/

// see [fn. 2] for React Redux lifecycle and data flow
import React from "react";
import { render } from "react-dom";
import { createStore } from "redux";
import { Provider } from "react-redux";
import App from "./components/App";
import reducer from "./reducers";
import "todomvc-app-css/index.css";

// create store for app
// in this case, it is rootReducer which is a combination of
// todos and visibilityFilter reducers
const store = createStore(reducer);

// Provider 'provides' the store to its child components [fn. 1]
render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

/* FOOTNOTES                                                                  ->
1. Provider: https://www.sohamkamani.com/blog/2017/03/31/react-redux-connect-explained/
   Provider is a React component given to us by the “react-redux” library. It
serves just one purpose: to “provide” the store to its child components.
   Since the provider only makes the store accessible to it’s children, and we
would ideally want our entire app to access the store, the most sensible thing
to do would be to put our App component within Provider.
2. Lifecycle https://www.reactreduxtutorials.com/2018/02/redux-tutorial-for-beginners-redux-data-flow-redux-lifecycle.html
   Data Flow: https://1.bp.blogspot.com/-OTO90Iulza8/Wn6dsdTJyaI/AAAAAAAAAD0/_bgMEAHupMAclxL9UOGeuQOhG9BppBolACLcBGAs/s640/react-redux-architecture.jpg

React (view) ========== Connection ================= Redux (store) ===============================================================

                             ---<------------------------------------------------------<-- used by
                              /                                                                    \
                            /                                                                       \  
Template --- Event ---> Container --- Triggers --->     Action     --- Sent to ---> Reducer         Selector
    +                                                     +                             \             /
Components                                          Action Creator                       \           /
    \                                                                              updates    exposed by   
   re-renders                                                                              \       /
      \                                                                                     \     /
     PROPS              Map Store                                                            STORE
                        to Props
*/
