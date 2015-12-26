var React = require('react');
var CommentList = require('./CommentList.react');
var CommentForm = require('./CommentForm.react');

var CommentBox = React.createClass({
  render: function(){
    return (
      <div>
        <div className="titleBox">
          <label>Comment Box</label>
          <button type="button" className="close" aria-hidden="true">&times;</button>
        </div>
        <div className="commentBox">
          <p className="taskDescription">Hi. Has anyone read about React.js and FLUX. This is going to change the way we build web applications.. </p>
        </div>
        <div className="actionBox">
          <CommentList comments={this.props.comments}/>
          <CommentForm/>
        </div>
      </div>
    );
  }
});

module.exports = CommentBox;
