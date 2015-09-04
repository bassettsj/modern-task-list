import React from 'react';
import backboneReact from 'backbone-react-component';
import TaskItem from './task-component.jsx';
import TaskForm from './task-form.jsx';

let TaskList =  React.createClass({
  mixins: [backboneReact],
  createTask(task) {
    return (
      <TaskItem key={task.cid} model={task}/>
    );
  },
  render() {
    let tasks = this.getCollection();
    return (
      <div>
        <header>
          <h4 className="page-header">Task List</h4>
        </header>
        <ul className="list-group">
          {tasks.map(this.createTask)}
        </ul>
        <TaskForm collection={tasks}></TaskForm>
      </div>
    );
  },
});


export default TaskList;
