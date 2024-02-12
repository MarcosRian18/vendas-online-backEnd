import { Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { UserEntity } from './interfaces/user.interface';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async getAllUsers(): Promise<UserEntity[]> {
        return this.userService.getAlUser()
    }
    @Post()
    async createUser(@Body() createUser: CreateUserDto):Promise<UserEntity> {
        return this.userService.createUser(createUser)
    }
}
