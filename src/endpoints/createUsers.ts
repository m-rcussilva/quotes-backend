import { Request, Response } from "express";
import { connection } from "../data/connection";
import { User } from "../types";

const createUsers = async (req: Request, res: Response) => {
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
};

export default createUsers;
