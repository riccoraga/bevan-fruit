require('dotenv').config()
const app = require("./app")
const port = process.env.PORT; // It will require the PORT saved on the .env file

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});