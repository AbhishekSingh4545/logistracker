const mongoose = require("mongoose");

const uri =
"mongodb+srv://abhisheksingh454544:Abhi4545@cluster0.nzkxp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
mongoose;

function dbConnection() {
  mongoose
    .connect(uri)
    .then(() => {
      console.log("DB Connected");
    })
    .catch((err) => {
      console.log(err);
    }); 
}

module.exports = dbConnection;
