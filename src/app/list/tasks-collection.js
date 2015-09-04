import Backbone from 'backbone';
import TaskModel from './task-model';
import backoneLocalStorage from 'backbone.localstorage';

let TasksCollection = Backbone.Collection.extend({
  model: TaskModel,
  localStorage: new backoneLocalStorage('tasks')
});

export default TasksCollection;
