import Backbone from 'backbone';

let TaskModel = Backbone.Model.extend({
  defaults() {
    let now = new Date();
    let due = new Date();
    return {
      title: 'Task',
      created: now,
      due: due.setDate(due.getDate() + 7)
    }
  }
});

export default TaskModel;
