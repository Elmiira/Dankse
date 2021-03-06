import React from 'react';
import { connect } from 'react-redux';
import Todo from '../Todo/index';
import { getTodosByVisibilityFilter } from '../selectors';

const TodoList = ({ todos }) => (
  <ul className="todo-list">
    {todos && todos.length
      ? todos.map(todo => <Todo key={`todo-${todo.id}`} todo={todo} />)
      : 'No todos, yay!'}
  </ul>
);

const mapStateToProps = state => {
  const { visibilityFilters } = state;
  const todos = getTodosByVisibilityFilter(state, visibilityFilters);
  return { todos };
};

export default connect(mapStateToProps)(TodoList);
