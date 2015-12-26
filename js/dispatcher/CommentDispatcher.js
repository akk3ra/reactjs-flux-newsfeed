var Dispatcher = require('./Dispatcher');
var assign = require('object-assign');

var CommentDispatcher = assign({}, Dispatcher.prototype, {
  
  handleAction: function(data){
    console.log("Inside the handleAction method ...");
    this.dispatch({
      source: "COMMENT_VIEW",
      data: data
    });
  }
});

module.exports = CommentDispatcher;
