import { v4 as uuidv4 } from "uuid";

export class IdGenerated {
    generateId = () => {
        return uuidv4();
    };
}
