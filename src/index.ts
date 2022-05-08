import createUsers from "./endpoints/createUsers";
import { app } from "./app";
import getUsers from "./endpoints/getUsers";

// Endpoints
app.post("/users", createUsers);
app.get("/users", getUsers);
