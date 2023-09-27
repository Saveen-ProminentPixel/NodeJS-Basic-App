import pg from "pg";
import express, { query } from "express";
import bodyParser from "body-parser";
import moment from "moment";

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true,}));

app.get("/", (request, response) => {
    response.json({info: "Nodejs, Express and Psotgres API"});
});

const conString = "postgres://postgres:saveen@localhost:5432/sql_demo";

const client = new pg.Client(conString);
await client.connect();


// const query = await client.query("SELECT * FROM trainee");

// query.rows.forEach(row => {
//     console.log(row.name);
// });
// await client.end();

export const getUsers = async(request, response) => {
    const query = await client.query("SELECT * FROM trainee");
    console.log(query);
    response.status(200).json(query.rows);
}

export const getUserById = async(request, response) => {
    const id = parseInt(request.params.id);

    const query = await client.query('SELECT * FROM trainee WHERE id = $1', [id]);
    const result = query.rows.map(row => {
        // row.dob = moment(row.dob).format("YYYY-MM-DD");
        // let object = row;
        row.dob = moment(row.dob).format("YYYY-MM-DD");
        row.joining_date = moment(row.joining_date).format("YYYY-MM-DD");
        console.log(row);
        return row;

    });
    console.log(result);
    response.status(200).json(result);
}

export const createUser = async(request, response) => {
    const {name, address, age} = request.body;

    const query = await client.query('INSERT INTO trainee (name, address, age) VALUES ($1, $2, $3) RETURNING *', [name, address, age]);
        // response.status(201).send(`User added with ID: ${results.rows[0].id}`);
    response.status(201).send(`User added with ID: ${query.rows[0].id}`);
}

export const updateUser = async(request, response) => {
    const id = parseInt(request.params.id);
    const {name, address} = request.body;

    const query = client.query('UPDATE trainee SET name = $1, address = $2 WHERE id = $3', [name, address, id]);
        // response.status(200).send(`User modifed with ID : ${id}`);
    response.status(200).send(`User modifed with ID : ${id}`);
}

export const deleteUser = async(request, response) => {
    const id = parseInt(request.params.id);

    const query = await client.query("DELETE FROM trainee WHERE id = $1", [id]);
    response.status(200).send(`User deleted with ID ${id}`);
}

export const updateDOB = async(request, response) => {
    const id = parseInt(request.params.id);
    const {dob} = request.body;
    const formattedDob = new Date(dob);
    // const adjustedDate = new Date(formattedDob.toLocaleString("en-US", {timeZone: "Africa/Abidjan"}))
    const query = client.query('UPDATE trainee SET dob = $1 WHERE id = $2', [formattedDob, id]);
    response.status(200).send(`User modifed with ID : ${id}`);
}

export const updateJoinDate = async(request, response) => {
    const id = parseInt(request.params.id);
    const {date} = request.body;
    const formattedDate = new Date(date);
    const query = client.query('UPDATE trainee SET joining_date = $1 WHERE id = $2', [formattedDate, id]);
    response.status(200).send(`User modifed with ID : ${id}`);
}

app.get("/trainee", getUsers);
app.get("/trainee/:id", getUserById);
app.post("/trainee", createUser);
app.put("/trainee/:id", updateUser);
app.delete("/trainee/:id", deleteUser);
app.put("/trainee/dob/:id", updateDOB); 
app.put("/trainee/joinDate/:id", updateJoinDate);

// await client.end();

app.listen(port, () => {
    console.log(`App is running on port ${port}.`)
});