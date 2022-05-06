import createUsers from "./endpoints/createUsers";
import { app } from "./app";
import { generateId } from "./services/generateId";
import getUsers from "./endpoints/getUsers";

const id = generateId();
console.log(id);

// Endpoints
app.post("/users", createUsers);
app.get("/users", getUsers);
