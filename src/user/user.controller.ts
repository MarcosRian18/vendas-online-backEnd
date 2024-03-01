import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.interface';
import { returnUserDto } from './dtos/returnUser.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async getAllUsers(): Promise<returnUserDto[]> {
        return (await this.userService.getAlUser()).map((UserEntity) => new returnUserDto(UserEntity))
    }
    
    @UsePipes(ValidationPipe)
    @Post()
    async createUser(@Body() createUser: CreateUserDto):Promise<UserEntity> {
        return this.userService.createUser(createUser)
    }

    
}
