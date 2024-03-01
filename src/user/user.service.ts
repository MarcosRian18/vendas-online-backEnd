import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserEntity } from './entities/user.interface';
import { hash } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>, 
    ) {}
    async createUser(createUserDto: CreateUserDto): Promise<UserEntity> {
        const saltOrRounds = 10
        const passwordHashed = await hash(createUserDto.password, saltOrRounds)
        
        return this.userRepository.save({
            ...createUserDto,
            type_user: 1,
            password: passwordHashed
        })
    }

    async getAlUser(): Promise<UserEntity[]>{
        return this.userRepository.find()
    }

    async getUserById(user_id: number): Promise<UserEntity>{
        const user = await this.userRepository.findOne({
            where: {
                id: user_id
            }
        })

        if(!user){
            throw new NotFoundException(`user_id Not Found`)
        }

        return user;
    }

    async getUserByIdUsingReferences(user_id: number): Promise<UserEntity> {
        return this.userRepository.findOne({
            where: {
                id: user_id
            },
            relations: {
                adresses: {
                    city: {
                        state: true,
                    }
                }
            }
        })
    }
}
