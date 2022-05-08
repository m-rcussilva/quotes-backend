import * as jwt from "jsonwebtoken";
import { AuthenticationData } from "../types";
import dotenv from "dotenv";

dotenv.config();

const expiresIn = "16h";
export class generateToken {
    generateToken = (payload: AuthenticationData) => {
        const token = jwt.sign(
            {
                payload,
            },

            process.env.JWT_KEY as string,

            {
                expiresIn,
            }
        );

        return token;
    };
}
