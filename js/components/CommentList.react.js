var React = require('react');
var Comment = require('./Comment.react');

var CommentList = React.createClass({
  render: function(){
    var comments = this.props.comments.map(function(comment){
      return (<Comment comment={comment}/>);
    });
    console.log("Comments Size-->>"+comments.length);
    return (
        <ul className="commentList">
          {comments}
        </ul>
    );
  }
});

module.exports = CommentList;
