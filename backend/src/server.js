const dotenv = require("dotenv");
dotenv.config()
const initDB =  require('./db');
const app = require('./app');

initDB();

const port = process.env.PORT || 6000;

app.listen(port, () => console.log(`Listening on port ${port}`));