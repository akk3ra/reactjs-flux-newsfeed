var React = require('react');
var CommentBox = require('./CommentBox.react');
var CommentData = require('../utils/CommentData');
var CommentStore = require('../stores/CommentStore');

var CommentControllerView = React.createClass({
  triggerCommentReload: function(){
    console.log("Reloading the comments after diff..");
    this.setState({
      comments: CommentData.getComments()
    });
  },
  componentDidMount: function(){
    console.log("Inside the componentDidMount callback..");
    CommentStore.addCommentListener(this.triggerCommentReload);
  },
  componentWillMount: function(){
    console.log("Inside the componentWillMount callback..");
    CommentStore.removeCommentListener(this.triggerCommentReload);
  },
  getInitialState: function(){
    CommentData.populateComments();
    return {
      comments: CommentData.getComments()
    };
  },
  render: function(){
    return (
      <div className="detailBox">
        <CommentBox comments={this.state.comments}/>
      </div>
    );
  }
});

module.exports = CommentControllerView;
