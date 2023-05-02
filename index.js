/*
To start a new project
npm init -y
npm install better-sqlite3
*/

//const databaseDriver = require('better-sqlite3');

//1. Import the dtabase driver
const databaseDriver = require('better-sqlite3');

//2. connect to the database
const db = databaseDriver('bands.sqlite3');

//3. send our first query
let statement = db.prepare('SELECT * FROM bands');

//4. Execute statement, recieve results
let results = statement.all();

//5. check the results
console.log(results);
// 6. Using parameter
let statement2 = db.prepare(`
SELECT * FROM bands WHERE genre =?

`);

let results2 = statement2.all('Metal')

//console.log(results2[0]);

// Using named parameters
let statement3 = db.prepare(`
SELECT * FROM bands WHERE genre = :genre

`);
 let results3= statement3.all({
    genre: 'Rock'
 });
  console.log(results3);

  
  
  // console.log(results3);
  let table = 'bands';
// insert somthing into the database
  let insertStatement = db.prepare(`
  INSERT INTO ${table} (name,genre) VALUES (:name, :genre)
  
  `);

  let resultOfIsert = insertStatement.run({
    name: 'Bathany',
    genre: 'Metal'



  });


