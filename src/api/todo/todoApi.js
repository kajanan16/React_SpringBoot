import axios from "axios";

class TodoApi {
  todoServices(username) {
    return axios.get(`http://localhost:8080/users/${username}/todo`);
  }

  deleteTodoService(username, id) {
    return axios.delete(`http://localhost:8080/users/${username}/todo/${id}`);
  }

  retriveTodo(username, id) {
    return axios.get(`http://localhost:8080/users/${username}/todo/${id}`);
  }

  updateTodoService(username, id, todo) {
    return axios.put(
      `http://localhost:8080/users/${username}/todo/${id}`,
      todo
    );
  }

  addTodoService(username, todo) {
    return axios.post(`http://localhost:8080/users/${username}/todo`, todo);
  }
}

export default new TodoApi();
