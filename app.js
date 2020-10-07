// Imports
const ipstack = require('ipstack');
const express = require('express');
const app = express();

// 

ipstack("check", "<enter-api-key>", (err, response) => {
    console.log(response)

    app.get('/', (req, res) => { // '/' is the route to LH5000
        res.send(`${response.ip}`);
    });
});


// Server Port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));