const express = require('express');
const bodyParser = require('body-parser')
const app = express();

//parse application/json
app.use(bodyParse.urlencoded({extended:true}));
app.use(bodyParser.json());

app.listen(3000, () => {
    console.log(`Server started on port`);
});