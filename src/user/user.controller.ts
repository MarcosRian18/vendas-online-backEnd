import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { CreateUserDto } from './dtos/createUser.dto';
import { UserService } from './user.service';
import { UserEntity } from './entities/user.interface';
import { ReturnUserDto, } from './dtos/returnUser.dto';

@Controller('user')
export class UserController {
    constructor(private readonly userService: UserService) {}

    @Get()
    async getAllUsers(): Promise<ReturnUserDto[]> {
        return (await this.userService.getAlUser()).map((UserEntity) => new ReturnUserDto(UserEntity))
    }

    @Get('/:user_id')
    async getUserById(@Param('user_id') user_id: number): Promise<ReturnUserDto>{
        return new ReturnUserDto(await this.userService.getUserByIdUsingReferences(user_id))
    }
    
    @UsePipes(ValidationPipe)
    @Post()
    async createUser(@Body() createUser: CreateUserDto):Promise<UserEntity> {
        return this.userService.createUser(createUser)
    }

    
}
