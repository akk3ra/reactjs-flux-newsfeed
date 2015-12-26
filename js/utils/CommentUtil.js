var DateTime = function() {

var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];
var d = new Date();
return "on " + monthNames[d.getMonth()] +" "+ d.getDate()+", "+d.getFullYear();
};

module.exports.getTime = DateTime;
