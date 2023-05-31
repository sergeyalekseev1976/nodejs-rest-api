const mongoose = require('mongoose');

const app = require('./app')
// wedckBfv3I8K9P7o
const DB_HOST = "mongodb+srv://sergey:wedckBfv3I8K9P7o@cluster0.fz1h6cn.mongodb.net/db-contacts?retryWrites=true&w=majority"
mongoose.connect(DB_HOST)
.then(() =>{
app.listen(3000, () => {
  console.log("Database connection successful")
})
})
.catch(error => {
  console.log(error.massage);
  process.exit(1);
})

