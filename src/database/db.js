const mongoose = require("mongoose");

const connectDataBase = () => {
  console.log("Try connect in dataBase");

  mongoose
    .connect(
      "mongodb+srv://root:root@cluster0.ihwvcje.mongodb.net/?retryWrites=true&w=majority",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("MongoDB Atlas Connected"))
    .catch((error) => console.log(error));
};

module.exports = connectDataBase;
