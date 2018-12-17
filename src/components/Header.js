import React from 'react'
import PropTypes from 'prop-types'
import TodoTextInput from './TodoTextInput'

// this is a stateless functional component (SFC) [fn. 1]
const Header = ({ addTodo }) => (
  <header className="header">
    <h1>todos</h1>
    <TodoTextInput
      newTodo
      onSave={(text) => {
        if (text.length !== 0) {
          addTodo(text)
        }
      }}
      placeholder="What needs to be done?"
    />
  </header>
)

Header.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default Header

/* FOOTNOTES                                                                  ->
1. Stateless Functional Component https://tylermcginnis.com/functional-components-vs-stateless-functional-components-vs-stateless-components/
                               https://www.jstwister.com/post/react-stateless-functional-components-best-practices/
                               https://javascriptplayground.com/functional-stateless-components-react/
   SFCs are simple. These components are solely props in, rendered UI out.
   They are not tied to React, other than the fact it uses the JSX syntax.

*/