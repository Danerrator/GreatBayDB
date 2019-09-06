var mysql = require("mysql");
var inquirer = require("inquirer");
var connection = mysql.createConnection({
   host: "localhost",
   port: 3306,
   user: "root",
   password: "!Ezekiel21",
   database: "great_bay_db"
});
connection.connect(function(err) {
   if(err) throw err;
   console.log("connected as id " + connection.threadId);
   startProgram();
});
function startProgram() {
inquirer.prompt([
   {
       type: "list",
       message: "Would you like to POST an item or BID on a item?",
       choices: ["POST", "BID"],
       name: "action"
   }
]).then(function(res) {
   console.log(res.action);
   if(res.action === "POST") {
       inquirer.prompt([
           {
               type: "input",
               message: "Please enter an item",
               name: "item"
           },
           {
               type: "input",
               message: "Please enter a category",
               name: "category"
           },
           {
               type: "input",
               message: "Please enter a starting bid",
               name: "bid"
           }
       ]).then(function(res) {
           var query = connection.query(
               "INSERT INTO auction SET ?",
               {
                  item_name: res.item,
                  category: res.category,
                  starting_bid: res.bid
               },
               function(err, response) {
                   if(err) throw err;
                   console.log(response.affectedRows);
                   connection.end();
               }
           );
       });
   }
   else {
       console.log("error");
   }
});
}





Message Dane Rugen, Colin Cason


