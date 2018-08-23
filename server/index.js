let express = require("express");
let bodyParser = require("body-parser");
const app = express();
app.use(express.static('public'));
app.use(bodyParser.json());


// let comment = require("./comments");
// let products = require("./products");
// let vehicles = require("./vehicles");
// let contacts = require("./contacts");


// let mongoose = require("mongoose");
// mongoose.Promise = global.Promise;
// mongoose.connect("mongodb://michaelsam08:Sammy2018@ds119692.mlab.com:19692/express_practice");
// const ContactModel = require('./models/ContactModel');




let CommentsRoutes  = require("./routes/CommentsRoutes");
let ContactsRoutes  = require("./routes/ContactsRoutes");
let ProductsRoutes  = require("./routes/ProductsRoutes");
let VehiclesRoutes  = require("./routes/VehiclesRoutes");





app.use(CommentsRoutes);
app.use(ContactsRoutes);
app.use(ProductsRoutes);
app.use(VehiclesRoutes);


// function getCommentID() {
//     return comments.length;
// }

// app.get("/comments", function(req, res, next){
//     return res.json(comments);
// });
// app.get('/comments/:id', (req, res, next)=> {
//     let commentId = req.params.id;
//     let myComment = contacts.find ((comment) => {
//         return (commnet._id== commentId)
//     });
//         return res.json(myComment)
//     });
// app.post("/comments", function(req,res,next){
//     /*request body*/
//     comments.push(req.body);
//     return res.json(req.body);
    // let commentID = getCommentID();
    // commentID++;
    // const newComment = {
    //     _id: commentID,
    //     body: req.body.body,
    //     postId: 1
    // }; 
    // comments.push(newComment);
    // return res.json(newComment);
// });
// function getContactID() {
//     return contacts.length;
// }
// app.get("/contacts", function(req, res, next){
//     return res.json(contacts);
// });
// app.get("/contacts/:contactsId", function(req, res, next){
//     const contact = contacts.find(i => i._id == req.params.contactsId);
//     return res.json(contacts);
// app.get('/contacts/:id', (req, res, next)=> {
//     let contactId = req.params.id;
//     let myContact = contacts.find ((contact) => {
//         return (contact._id== contactId)
//     });
//         return res.json(myContact)
//     });

// app.post("/contacts", function(req,res,next){
//     contacts.push(req.body);
//     return res.json(req.body);
// });
// function getProductID() {
//     return products.length;
// }
// app.get("/products", function(req, res, next){
//         return res.json(products);
// });
// app.get('/products/:id', (req, res, next)=> {
//     let productId = req.params.id;
//     let myProduct = products.find ((product) => {
//         return (product._id== productId)
//     });
//         return res.json(myProduct)
//     });
// app.post("/products", function(req,res,next){
//         products.push(req.body);
//         return res.json(req.body);
//     });
// app.post("/products", function(req,res,next){
//     let productID = getProductID();
//     productID++;
//         const newProduct = {
//             _id: productID,
//             body: req.body.body,
//             postId: 1
//         }; 
//         products.push(newProduct);
//         return res.json(newProduct);
//     });

// function getVehicleID() {
//         return vehicles.length;
//     }

// app.get("/vehicles", function(req, res, next){
//     return res.json(vehicles);
// }); 
// app.get('/vehicles/:id', (req, res, next)=> {
//     let vehicleId = req.params.id;
//     let myVehicle = vehicles.find ((vehicles) => {
//         return (vehicle._id== vehicleId)
//     });
//         return res.json(myVehicle)
//     });

// app.post("/vehicles", function(req,res,next){
//         vehicles.push(req.body);
//         return res.json(req.body);
//     });
// app.post("/vehicles", function(req,res,next){
//         let vehicleID = getVehicleID();
//         vehicleID++;
//         const newVehicle = {
//             _id: VehicleID,
//             body: req.body.body,
//             postId: 1
//         }; 
//         vehicles.push(newVehicle);
//         return res.json(newVehicle);
//     });

const port = process.env.PORT || 3001;
app.listen(port, () => {
console.log(`Listening on port:${port}`);
});