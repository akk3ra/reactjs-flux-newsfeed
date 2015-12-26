var React = require('react');
var CommentUtil = require('../utils/CommentUtil');

var Comment = React.createClass({
  render: function(){
    return (
        <li>
          <div className="commenterImage">
            <img src="http://lorempixel.com/50/50/people/6"/>
          </div>
          <div className="commentText">
              <p className="">{this.props.comment.comment}</p><span className="date sub-text">{CommentUtil.getTime()}</span>
          </div>
        </li>
    );
  }
});

module.exports = Comment;
