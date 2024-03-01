import { ReturnAdressDto } from "src/adress/dtos/returnAdress.dto";
import { UserEntity } from "../entities/user.interface";

export class ReturnUserDto {
    id: number;
    name: string;
    email: string;
    phone: string;
    cpf: string;
    password: string;
    adresses?: ReturnAdressDto[];

    constructor(userEntity: UserEntity) {
        this.id = userEntity.id;
        this.name = userEntity.name;
        this.email = userEntity.email;
        this.phone = userEntity.phone;
        this.cpf = userEntity.cpf;
        this.password = userEntity.password; // Assuming password should be copied

        this.adresses = userEntity.adresses ? userEntity.adresses.map((address) => new ReturnAdressDto(address)) : undefined;
    }
}