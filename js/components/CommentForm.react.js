var React = require('react');
var CommentActions = require('../actions/CommentActions');

var CommentForm = React.createClass({
  commentSubmit: function(e){
    e.preventDefault();
    var author1 = this.refs.author.getDOMNode().value.trim();
    var comment1 = this.refs.comment.getDOMNode().value.trim();
    console.log("About to submit comment..");
    if(author1 !== "" && comment1 !== ""){
        CommentActions.submitComment({
            author: author1,
            comment: comment1
        });
        this.refs.author.getDOMNode().value = "";
        this.refs.comment.getDOMNode().value = "";
    }
  },
  render: function(){
    return (
        <form className="form-inline" role="form">
            <div className="form-group">
                <input className="form-control" type="text" placeholder="Author" ref="author"/>
                <input className="form-control" type="text" placeholder="Your comments" ref="comment"/>
            </div>
            <div className="form-group">
                <button className="btn btn-default" onClick={this.commentSubmit}>Add</button>
            </div>
        </form>
    );
  }
});

module.exports = CommentForm;
