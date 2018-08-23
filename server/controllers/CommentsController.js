let comments = require("../comments");

//get list of everything
module.exports.list =  function list(req, res) {
    return res.json(comments); 
   }
   
// get one thing off of list
   module.exports.show =  function show(req, res) {
    let commentId = req.params.id;
    let myComment = comments.find ((comment) => {
        return (comment._id== commentId)
    });  
    return res.json(myComment)
    };
//post
   
function getCommentID() {
        return comments.length;
    }
module.exports.create =  function create(req, res) {
    
    let commentID = getCommentID();
    commentID++;
    const newComment = {
        _id: commentID,
        body: req.body.body,
        postId: 1
    }; 
    comments.push(newComment);
    return res.json(newComment);
    
   }
  

   module.exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});  //put
   }


   module.exports.remove =  function remove(request, response) {
    return response.json({});  //delete
   }

  



