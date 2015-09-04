import React from 'react';
import backboneMixin from 'backbone-react-component';

export default React.createClass({
  mixins: [backboneMixin],
  handleButtonClick() {
    this.getModel().destroy();
  },
  render() {
    return (
      <li className="list-group-item">
        <strong>{this.state.model.title}</strong>
        <button type="button" onClick={this.handleButtonClick} aria-label="Delete" className="close">&times;</button>
      </li>
    );
  }
});
