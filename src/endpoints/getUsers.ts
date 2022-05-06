import { Request, Response } from "express";
import { connection } from "../data/connection";
import { User } from "../types";

const getUsers = async (req: Request, res: Response) => {
    try {
        const users: User[] = await connection("quotes_project");
        res.send(users);

        // /
    } catch (error: any) {
        res.status(400).send({ message: error.message });
    }
};

export default getUsers;
