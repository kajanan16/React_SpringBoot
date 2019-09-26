import React, { Component } from "react";
import moment from "moment";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TodoApi from "../api/todo/todoApi.js";
import AutenticationService from "./AuthenticationService.js";

class TodoUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = {
      id: this.props.match.params.id,
      description: "Learning Now",
      targetdate: moment(new Date()).format("YYYY-MM-DD"),
      isdone: false
    };
    this.onSubmit = this.onSubmit.bind(this);
  }

  validate(values) {
    let error = {};
    if (!values.description) {
      error.description = "Enter Description";
    } else if (values.description.length < 4) {
      error.description = "Enter More than 4 character in your";
    }

    if (!moment(values.targetdate).isValid) {
      error.targetdate = "Enter Correct Date";
    }

    return error;
  }

  onSubmit(values) {
    let username = AutenticationService.accessUserName();
    let todo = {
      id: this.state.id,
      description: values.description,
      targetdate: values.targetdate
    };
    if (this.state.id === -1) {
      TodoApi.updateTodoService(username, todo).then(() => {
        this.props.history.push("/todos");
      });
    } else {
      TodoApi.updateTodoService(username, this.state.id, todo).then(() => {
        this.props.history.push("/todos");
      });
    }
  }

  componentDidMount() {
    let username = AutenticationService.accessUserName();
    TodoApi.retriveTodo(username, this.state.id).then(Response =>
      this.setState({
        description: Response.data.description,
        targetdate: moment(Response.data.targetdate).format("YYYY-MM-DD")
      })
    );
  }

  render() {
    let description = this.state.description;
    let targetdate = this.state.targetdate;
    const imgMyimageexample = require('../world.png');
    const back = {
      width: '100%',
      height: '600px',
      backgroundImage: `url(${imgMyimageexample})`,
      backgroundSize: 'cover'  
      
    };
    return (
      <div className="container" style={back}>
        <h1>Todo</h1>
        <Formik
          initialValues={{
            description: description,
              targetdate: targetdate
          }}
          onSubmit={this.onSubmit}
          validate={this.validate}
          enableReinitialize={true}
        >
          {props => (
            <Form>
              <ErrorMessage
                name="description"
                component="div"
                className="alert alert-danger"
              />
              <ErrorMessage
                name="targetdate"
                component="div"
                className="alert alert-danger"
              />
              <fieldset className="form-group">
                <label>Description</label>
                <Field
                  className="form-control"
                  type="text"
                  name="description"
                />
              </fieldset>

              <fieldset className="form-group">
                <label>TargetDate</label>
                <Field className="form-control" type="date" name="targetdate" />
              </fieldset>
              <button type="submit"> save</button>
            </Form>
          )}
        </Formik>
      </div>
    );
  }
}

export default TodoUpdate;
