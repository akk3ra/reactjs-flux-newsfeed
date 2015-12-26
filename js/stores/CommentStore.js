var CommentDispatcher = require('../dispatcher/CommentDispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var CommentData = require('../utils/CommentData');

var CHANGE_EVENT = 'change';
var CommentStore = assign({}, EventEmitter.prototype, {
  addCommentListener: function(callback){
    console.log("Adding the addCommentListener to CommentStore..");
    this.on(CHANGE_EVENT, callback);
  },
  removeCommentListener: function(callback){
    console.log("Removing the comment listener from the CommentStore..");
    this.removeListener(CHANGE_EVENT, callback);
  },
  emitChange: function(){
    console.log("Emitting an event on the CommentStore..");
    this.emit(CHANGE_EVENT);
  }
});

CommentDispatcher.register(function(data){
  console.log("Registering a callback with the CommentDispatcher..");
  var actionType = data.data.actionType;
  var commentData = data.data.action;
  console.log("Action Type-->>"+actionType);
  switch(actionType) {
    case "SUBMIT_COMMENT":
      console.log("Adding comment to the comment store..");
      CommentData.addComment(commentData);
      break;
    default:
      console.log("Not a valid actioType..");
      break;
  }
  CommentStore.emitChange();
});

module.exports = CommentStore;
