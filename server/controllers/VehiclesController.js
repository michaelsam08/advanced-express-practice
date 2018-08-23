let vehicles = require("../vehicles");

 //get list of everything
module.exports.list =  function list(req, res) {
    return res.json(vehicles); 
   }
   // get one thing off of list
module.exports.show =  function show(req, res) {
    let vehicleId = req.params.id;
    let myVehicle = vehicles.find ((vehicles) => {
        return (vehicle._id== vehicleId)
    });
        return res.json(myVehicle)
    }; 
   
   //post
module.exports.create =  function create(req, res) {
    vehicles.push(req.body);
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
   