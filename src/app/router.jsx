import $ from 'jquery';
import Backbone from 'backbone';
import React from 'react';
import TaskList from './list/list-component.jsx';
import TaskCollection from './list/tasks-collection';
import HelloView from './views/hello';


export default Backbone.Router.extend({

  routes: {
    '': 'list',
    'about': 'about'
  },

  initialize: () => {
    $('body').append('<div id="js-app"></div>');
  },

  list() {
    let taskCollection = new TaskCollection();
    taskCollection.fetch();
    React.render(<TaskList collection={taskCollection}/>, document.getElementById('content'));
  },

  dashboard: () => {
    var helloView = new HelloView({
      template: _.template('Hello <%= name %> !')
    }).render();

    $('#js-app').empty().append(helloView.$el);
  },

  about: () => {
    var helloView = new HelloView({
      template: _.template('Im the about page')
    }).render();

    $('#js-app').empty().append(helloView.$el);
  }

});
