import React, { Component } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
// import uuid from 'uuid';

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <TodoInput />
          <TodoList />
        </div>
      </div>
    );
  }
}
