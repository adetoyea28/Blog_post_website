import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';


const app = express();
const port = 4000;

// Backend logic goes here
// -----------------------

const data = fs.readFileSync('db/db.json');
const data_obj = JSON.parse(data);

const no_of_blog = 3;
let data_str_list = [];
let i = 0;

while(i < no_of_blog){
    data_str_list.push("<div><h1>" + data_obj.example[i].title + "</h1><br>"+"<p>"+data_obj.example[i].body+"</p></div><br>");
    i++;
}

let data_str = data_str_list[0]+data_str_list[1]+data_str_list[2];

app.set("view engine", "ejs");

app.get('/', (req, res)=> {
    res.setHeader('Content-Type', 'text/html');
    res.render("index", { blog_post_website : data_str });
})


// starts the server.
app.listen(port, () => {
    console.log("server running at http://localhost:4000");
});
