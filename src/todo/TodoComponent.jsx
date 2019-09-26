import React, { Component } from "react";
import TodoApi from "../api/todo/todoApi.js";
import AutenticationService from "./AuthenticationService.js";
import moment from "moment";

class TodoComponent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todos: [],
      message: null
    };
    this.deleteTodoClicked = this.deleteTodoClicked.bind(this);
    this.refreshTodos = this.refreshTodos.bind(this);
    this.updateTodoClicked = this.updateTodoClicked.bind(this);

    this.addTodoClicked = this.addTodoClicked.bind(this);
  }
  componentDidMount() {
    this.refreshTodos();
  }

  deleteTodoClicked(id) {
    let username = AutenticationService.accessUserName();
    TodoApi.deleteTodoService(username, id).then(Response => {
      this.setState({ message: `${id} has been deleted` });
      this.refreshTodos();
    });
  }
  
  refreshTodos() {
    let username = AutenticationService.accessUserName();
    todos: TodoApi.todoServices(username).then(Response => {
      this.setState({ todos: Response.data });
    });
  }

  updateTodoClicked(id) {
    this.props.history.push(`todos/${id}`);
  }

  addTodoClicked() {
    this.props.history.push(`todos/-1`);
  }

  render() {
    const imgMyimageexample = require('../world.png');
    const back = {
      width: '100%',
      height: '600px',
      backgroundImage: `url(${imgMyimageexample})`,
      backgroundSize: 'cover'  
      
    };
    return (
      <div className="todo" style={back}>
        <h1>List of Todos</h1>
        <div className="container">
          {this.state.message && (
            <div className="alert alert-danger">{this.state.message}</div>
          )}
          <table className="table">
            <thead>
              <tr>
                <th>Description</th>
                <th>Isdone</th>
                <th>Date</th>
                <th>Update</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {this.state.todos.map(todo => (
                <tr key={todo.id}>
                  <td>{todo.description}</td>
                  <td>{todo.isdone.toString()}</td>
                  <td>{moment(todo.targetdate).format("YYYY-MM-DD")}</td>
                  <td>
                    <button
                      className="btn btn-info"
                      onClick={() => this.updateTodoClicked(todo.id)}
                    >
                      Update
                    </button>
                  </td>
                  <td>
                    <button
                      className="btn btn-danger"
                      onClick={() => this.deleteTodoClicked(todo.id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="row">
            <button className="btn btn-success" onClick={this.addTodoClicked}>
              {" "}
              Add
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default TodoComponent;
