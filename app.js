import express from "express";
import fs from 'fs';


const app = express();
const port = 4000;

// Backend logic goes here
// -----------------------

const data = fs.readFileSync('db/db.json');
const data_obj = JSON.parse(data);

const no_of_blog = data_obj.example.length;
let data_str = '';
let i = 0;

while(i < no_of_blog){
    data_str += "<div class=\"container\"><h1 class=\"title\">" + data_obj.example[i].title + "</h1><br><img class=\"img\" src="+data_obj.example[i].image+">"+"<p class=\"body\">"+data_obj.example[i].body+"</p></div><br>";
    i++;
}


app.set("view engine", "ejs");

app.get('/', (req, res)=> {
    res.setHeader('Content-Type', 'text/html');
    res.render("index", { blog_post_website : data_str });
})


// starts the server.
app.listen(port, () => {
    console.log("server running at http://localhost:4000");
});
