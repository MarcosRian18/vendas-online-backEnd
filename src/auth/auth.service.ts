import { Injectable, NotAcceptableException } from '@nestjs/common';
import { UserEntity } from 'src/user/entities/user.interface';
import { LoginDto } from './dtos/login.dto';
import { UserService } from 'src/user/user.service';
import { compare } from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { ReturnUserDto } from 'src/user/dtos/returnUser.dto';
import { LoginPayload } from './dtos/loginPayload.dto';
import { ReturnLogin } from './dtos/returnLogin.dto';

@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private jwtService: JwtService
    ){}

    async login(loginDto: LoginDto): Promise<ReturnLogin> {
        const user: UserEntity | undefined = await this.userService.findUserByEmail(loginDto.email).catch(() => undefined)
        const isMatch = await compare(loginDto.password, user?.password || '')

        if(!user || !isMatch){
            throw new NotAcceptableException(`Email or Password Invalid!`)
        }

        return {
            accessToken: this.jwtService.sign({...new LoginPayload(user)}),
            user: new ReturnUserDto(user)
        }
    }
}
