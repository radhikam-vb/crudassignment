var MongoClient = require("mongodb").MongoClient;
 var url = "mongodb://localhost:27017/user_db";
 MongoClient.connect(url, function (err, client) {
   if (err) throw err;
   var user = [
     { user_id: "vb001", user_name: "radhika" },
     { user_id: "vb002", user_name: "anshika" },
     { user_id: "vb003", user_name: "priyanka" },
     { user_id: "vb004", user_name: "sakshi" },
     { user_id: "vb005", user_name: "payal" }
    
   ];
   const db = client.db("user_db");
   db.collection("user").insertMany(user, function (err, res) {
     if (err) throw err;
     console.log("Number of records inserted: " + res.insertedCount);
     client.close();
   });
 });
