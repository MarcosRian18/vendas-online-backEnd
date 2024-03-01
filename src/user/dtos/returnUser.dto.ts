import { UserEntity } from "../entities/user.interface";

export class returnUserDto {
    id: number;
    name: string;
    email: string;
    phone: string;
    cpf: string;
    password: string;

    constructor(userEntity: UserEntity){
        this.id = userEntity.id;
        this.name = userEntity.name;
        this.email = userEntity.email;
        this.phone = userEntity.phone;
        this.cpf = userEntity.cpf;
    }
}