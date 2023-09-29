import pg from "pg";
import moment from "moment";

const conString = "postgres://postgres:saveen@localhost:5432/sql_demo";

const client = new pg.Client(conString);
await client.connect();

export const getUsers = async(request, response) => {
    const query = await client.query("SELECT * FROM trainee");
    const result = query.rows.map(row => {
        row.dob = moment(row.dob).format("YYYY-MM-DD");
        row.joining_date = moment(row.joining_date).format("YYYY-MM-DD");
        return row;
    });
    console.log();
    // console.log(query.fields);
    console.log(query.rowCount);
    console.log(query.rows.length);
    response.status(200).json(result);
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
    console.log(query.rowCount);
    console.log(query.rows.length);
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

    const query = await client.query('UPDATE trainee SET name = $1, address = $2 WHERE id = $3', [name, address, id]);
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
    const query = await client.query('UPDATE trainee SET dob = $1 WHERE id = $2', [formattedDob, id]);
    response.status(200).send(`User modifed with ID : ${id}`);
}

export const updateJoinDate = async(request, response) => {
    const id = parseInt(request.params.id);
    const {date} = request.body;
    const formattedDate = new Date(date);
    const query = await client.query('UPDATE trainee SET joining_date = $1 WHERE id = $2', [formattedDate, id]);
    response.status(200).send(`User modifed with ID : ${id}`);
}

export const notNullDobData = async(request, response) => {
    const query = await client.query("SELECT * FROM trainee WHERE dob IS NOT NULL");
    const result = query.rows.map(row => {
        row.dob = moment(row.dob).format("YYYY-MM-DD");
        row.joining_date = moment(row.joining_date).format("YYYY-MM-DD");
        return row;
    })
    response.status(200).json(result);
}

export const updateAge = async(request, response) => {
    const id = parseInt(request.params.id);
    const {age} = request.body;
    const query = await client.query('UPDATE trainee SET age = $1 WHERE id = $2', [age, id]);
    response.status(200).send(`User modified with ID: ${id}`);
}

export const ageGreaterThan30 = async(request, response) => {
    const query = await client.query("SELECT * FROM trainee WHERE age > 30");
    response.status(200).json(query.rows);
}

export const ageGreaterThanX = async(request, response) => {
    const age = parseInt(request.params.age);
    const query = await client.query('SELECT * FROM trainee WHERE age > $1', [age]);
    response.status(200).json(query.rows);
}

export const ageSmallerThanX = async(request, response) => {
    const age = parseInt(request.params.age);
    const query = await client.query('SELECT * FROM trainee WHERE age < $1', [age]);
    response.status(200).json(query.rows);
}

export const nameEndWithH = async(request, response) => {
    const query = await client.query("SELECT * FROM trainee WHERE name LIKE '%h' ");
    console.log(query.rows);
    response.status(200).json(query.rows);
    console.log(query.rows);
}


client.on('error', (err) => {
    console.error('something bad has happened!', err.stack)
  });

//   await client.end();