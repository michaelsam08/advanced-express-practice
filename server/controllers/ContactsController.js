let contacts = require("../contacts");
const ContactModel = require('../models/ContactModel');
 //get list of everything
module.exports.list =  function list(req, res) {
    // ContactModel.find({}).exc()
    // .then(contacts => {
        return res.json(contacts); 
   // });
   }
   // get one thing off of list
module.exports.show =  function show(req, res) {
    let contactId = req.params.id;
    let myContact = contacts.find ((contact) => {
        return (contact._id == contactId)
    });
        return res.json(myContact)
    } 
   
   //post, change, etc...?????
// ContactModel.findById("").exec()
//    .then(contact => {
//     contact.occupation = 'poet';
//     return contact.save();
// })
module.exports.create =  function create(req, res) {
    contacts.push(req.body);
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
   