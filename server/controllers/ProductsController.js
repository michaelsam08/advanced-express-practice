let products = require("../products");

 //get list of everything
module.exports.list =  function list(req, res) {
    return res.json(products); 
   }
   // get one thing off of list
module.exports.show =  function show(req, res) {
    let productId = req.params.id;
    let myProduct = products.find ((product) => {
        return (product._id== productId)
    });
        return res.json(myProduct)
    }; 
   
   //post
module.exports.create =  function create(req, res) {
    products.push(req.body);
    return res.json(req.body);
   }
   //put
module.exports.update =  function update(request, response) {
    return response.json({theId: request.params.id});  
   }
   //delete
module.exports.remove =  function remove(request, response) {
    return response.json({});  
   }
   