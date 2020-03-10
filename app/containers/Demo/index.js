import React from 'react';
import { compose } from 'redux';
import injectSaga from 'utils/injectSaga';
import injectReducer from 'utils/injectReducer';
import counter from './reducer/counter';
import saga from './saga';
import AddTodo from './AddTodo/index';
import TodoList from './TodoList/index';
import VisibilityFilters from './VisibilityFilters/index';

import Counter from './Counter/index';

function TodoApp() {
  return (
    <div className="todo-app">
      <h1>Todo List</h1>
      <Counter />
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
    </div>
  );
}

const withSaga = injectSaga({ key: 'Counter', saga });
const withReducer = injectReducer({ key: 'Counter', reducer: counter });

export default compose(
  withSaga,
  withReducer,
)(TodoApp);
