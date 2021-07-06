//jshint esversion:6

const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const connectDB = require("./config/db");

connectDB();

var _ = require("lodash");

const app = express();
var posts = [];
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");

const postRoutes = require("./api/routes/post");
const composeRoutes = require("./api/routes/compose");

app.use("/", postRoutes);
app.use("/compose", composeRoutes);

// app.get("/contact",function(req,res){
//   res.render("contact.ejs",{contactContent : contactContent});
// });

// app.get("/about",function(req,res){
//   res.render("about.ejs",{aboutContent : aboutContent});
// });

// app.get("/compose",function(req,res){
//   res.render("compose.ejs");
// });

// app.post('/compose',function(req,res){
//   connection.query('insert into posts(postTitle,postContent) values ( ? , ?)',[req.body.postTitle,req.body.postText] ,function (error, results, fields) {
//     if (error) throw error;
//     else {
//       console.log("Suceesfully inserted");
//     }
//   });

//   connection.query('select * from posts', function (error, results, fields) {
//     if (error) throw error;
//     else{
//       posts = results;
//       res.redirect('/');
//     }
//   });
// });

// app.get("/posts/:postName",function(req,res){
//   connection.query('select * from posts' ,function (error, results, fields) {
//     if (error) throw error;
//     else {
//       results.forEach(function(post){
//           if(_.lowerCase(req.params.postName) === (_.lowerCase(post.id))){
//             res.render("post",{postTitle :post.postTitle ,postContent : post.postContent});
// }
//     });
//   }
// });
// });

app.use((req, res, next) => {
  const error = new Error("404 Not Found");
  error.status = 404;
  next(error);
});

app.use((error, req, res, next) => {
  res.status(error.status || 500);
  res.json({
    error: {
      message: error.message,
    },
  });
});

module.exports = app;
