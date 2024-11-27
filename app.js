// Imported all modules required

import express from "express";
import path from 'path';
import { fileURLToPath } from 'url';
import fs from 'fs';

// Initializing the application
const app = express();
// setting the port
const port = 4000;

// Backend logic goes here
// -----------------------




// --------------------

// starts the server.
app.listen(port, () => {
    console.log("server running at http://localhost:4000");
});
