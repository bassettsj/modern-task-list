import React from 'react';
import backboneReact from 'backbone-react-component';

let TaskForm = React.createClass({
  mixins: [backboneReact],
  reset() {
    React.findDOMNode(this.refs.title).value = '';
    this.checkValidity();
  },
  save() {
    return this.getCollection().add({
      title: React.findDOMNode(this.refs.title).value.trim()
    }).save();
  },
  isValid() {
    return this.getDOMNode().checkValidity();
  },
  handleSubmit(e) {
    e.preventDefault();
    if (this.isValid()) {
      this.save().then(() => {
        this.reset();
      });
    }
  },
  getInitialState() {
    return {
      isValid: true
    };
  },
  checkValidity() {
    this.setState({
      isValid: this.isValid()
    });
  },


  render() {
    return (
      <form name="taskEdit" onSubmit={this.handleSubmit} onChange={this.checkValidity}>
        <div className={(()=> `form-group${this.state.isValid ? '' : ' has-error'}`)()}>
          <label htmlFor="title" className="control-label">Title</label>
          <input type="text" className="form-control" id="title" required ref="title" value={this.state.title}></input>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-block btn-primary" disabled={!this.state.isValid}>Save</button>
        </div>
        {this.state.isValid.toString()}
      </form>
    );
  }
});

export default TaskForm;
