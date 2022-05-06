// Ativando o express e cors
import express, { Express, Request, Response } from "express";
import cors from "cors";
import { AddressInfo } from "net";
import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

const app: Express = express();

app.use(express.json());
app.use(cors());

// Criando servidor
const server = app.listen(process.env.PORT || 3003, () => {
    if (server) {
        const address = server.address() as AddressInfo;
        console.log(`Server is running in http://localhost:${address.port}`);
    } else {
        console.error(`Failure upon starting server.`);
    }
});

// Estabelece a conexão com o banco de dados
export const connection = knex({
    client: "mysql",
    connection: {
        host: process.env.DB_HOST,
        port: 3306,
        user: process.env.DB_USER,
        password: process.env.DB_PASS,
        database: process.env.DB_NAME,
    },
});

// Types
type User = {
    id: string;
    name: string;
    email: string;
    password: string;
};

// Endpoints
app.post("/users", async (req: Request, res: Response) => {
    try {
        const { name, email, password } = req.body;

        if (!name || !email || !password) {
            throw new Error("Preencha todos os campos.");
        }

        const user: User = {
            id: Date.now().toString(),
            name,
            email,
            password,
        };

        await connection("quotes_project").insert(user);
        res.status(200).send({ message: "Usuário criado com sucesso!" });

        console.log(user);
    } catch (error: any) {
        res.status(422).send({ message: error.message });
    }
});
