import pg from "pg";
import express, { query, response } from "express";
import bodyParser from "body-parser";
import moment from "moment";
import { ageGreaterThan30, ageGreaterThanX, ageSmallerThanX, createUser, deleteUser, getUserById, getUsers, notNullDobData, updateAge, updateDOB, updateJoinDate, updateUser, nameEndWithH } from "./traineeQueries.js";


const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true,}));

app.get("/", (request, response) => {
    response.json({info: "Nodejs, Express and Psotgres API"});
});

// const conString = "postgres://postgres:saveen@localhost:5432/sql_demo";

// const client = new pg.Client(conString);
// await client.connect();


// const query = await client.query("SELECT * FROM trainee");

// query.rows.forEach(row => {
//     console.log(row.name);
// });
// await client.end();



app.get("/trainee", getUsers);
app.get("/trainee/notnulldob", notNullDobData);  
app.get("/trainee/:id", getUserById);
app.post("/trainee", createUser);
app.put("/trainee/:id", updateUser);
app.delete("/trainee/:id", deleteUser);
app.put("/trainee/dob/:id", updateDOB); 
app.put("/trainee/joinDate/:id", updateJoinDate);

app.put("/trainee/age/:id", updateAge);
app.get("/trainee/ageGreaterThan30/data", ageGreaterThan30);
app.get("/trainee/agegreaterthan/:age", ageGreaterThanX);
app.get("/trainee/agesmallerthan/:age", ageSmallerThanX);
app.get("/trainee/nameEndWithH/data", nameEndWithH);


// await client.end();

app.listen(port, () => {
    console.log(`App is running on port ${port}.`)
});