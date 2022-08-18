// Import libraries in our project
// Express should be installed not to generate errors.
const express = require("express"); // Recommended: const

const app = express();

// index, root, home
app.get("/", function(request, response) {
    console.log(request);

    return response.end("<h1>Hello World!</h1>");
});

// Callback
app.listen(4000, () => {
    console.log("Listening on: http://localhost:4000");
})

// app.listen(4000, function() {
//     console.log("Listening on: http://localhost:4000");
// })

// Run this app: node index.js

// If you add changes, you need to restart the app to show changes.



/* 
    !Homework: 
        - Presentation about HTTP status
        - What is nodemon
        - Install nodemon
        - Configure nodemon
*/