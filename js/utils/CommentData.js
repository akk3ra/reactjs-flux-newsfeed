var comments = [];

var CommentData = {
  populateComments: function(){
    comments = [1,2].map(function(num){
        return {author: "Author"+num, comment: "Hello. This is comment no. "+num};
    });
  },
  getComments: function(){
    return comments;
  },
  addComment: function(comment){
    comments.push(comment);
    return comments.length - 1;
  }
};

module.exports = CommentData;
