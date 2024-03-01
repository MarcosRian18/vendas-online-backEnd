import { UserEntity } from "src/user/entities/user.interface";

export class LoginPayload {
    id: number;
    typeUser: number;

    constructor(user: UserEntity){
        this.id = user.id;
        this.typeUser;
    }
}