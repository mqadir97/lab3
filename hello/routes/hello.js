
/*
 * GET home page.
 */

exports.view = function(req,res){
  var nameToShow = req.params.userName;
  console.log("Your name is " + nameToShow);
  res.render('index',{
    'name': nameToShow,
  });
};
