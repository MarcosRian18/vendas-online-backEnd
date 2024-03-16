import { UserEntity } from "src/user/entities/user.interface";

export class LoginPayload {
    id: number;
    type_user: number;

    constructor(user: UserEntity){
        this.id = user.id;
        this.type_user = user.type_user;
    }
}