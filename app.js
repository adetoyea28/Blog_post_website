// import modules that are needed
import express from "express";
import fs from 'fs';


const app = express();
const port = 4000;


//fetches blog post data from database in form of json
const data = fs.readFileSync('db/db.json');

// converts json format to javascript object.
const data_obj = JSON.parse(data);

// assesses the length of the example array containing the blog post data.
const no_of_blog = data_obj.example.length;

// initializing the string that would contain the blog posts in
// an HTML format to be rendered to the frontend.
let data_str = '';

// initializing a while loop to access the properties blog post object
// in the example array.
let i = 0;
while(i < no_of_blog){
    // creates a string that contains all the blog post data in HTML format
    // and assigns it to the data_str variable which is going to be rendered
    // to the frontend.
    data_str += "<div class=\"container\"><h1 class=\"title\">" + data_obj.example[i].title + "</h1><br><img class=\"img\" src="+data_obj.example[i].image+">"+"<p class=\"body\">"+data_obj.example[i].body+"</p></div><br>";
    i++;
}

// sets the view engine to ejs
app.set("view engine", "ejs");

// creates a route that renders the frontend as a response
app.get('/', (req, res)=> {
    res.render("index", { blog_post_website : data_str });
})


// starts the server.
app.listen(port, () => {
    console.log("server running at http://localhost:4000");
});
