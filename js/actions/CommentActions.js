var CommentDispatcher = require('../dispatcher/CommentDispatcher');

var CommentActions = {

  submitComment: function(comment){
    CommentDispatcher.handleAction({
        actionType: "SUBMIT_COMMENT",
        action: comment
      });
  }
};

module.exports = CommentActions;
