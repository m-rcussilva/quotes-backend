import { Request, Response } from "express";
import { connection } from "../data/connection";
import { IdGenerated } from "../services/generateId";
import { User } from "../types";

const createUsers = async (req: Request, res: Response) => {
    try {
        const { email, password } = req.body;

        if (!email || !password) {
            throw new Error("Preencha todos os campos.");
        }

        const id: string = new IdGenerated().generateId();

        const user: User = {
            id,
            email,
            password,
        };

        await connection("quotes_project").insert(user);
        res.status(200).send({ message: "Usuário criado com sucesso!" });

        console.log(user);
    } catch (error: any) {
        res.status(422).send({ message: error.message });
    }
};

export default createUsers;
