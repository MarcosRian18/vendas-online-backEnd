import { Body, Controller, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AdressService } from './adress.service';
import { CreateAdressDto } from './dtos/createAdress.dto';
import { adressEntity } from './entities/adress.entity';
import { Roles } from 'src/decorators/roles.decorator';
import { UserType } from 'src/user/enum/user-type.enum';
import { UserId } from 'src/decorators/user-id.decorator';

@Controller('adress')
export class AdressController {
    constructor( private readonly adressService: AdressService){}
    @Roles(UserType.User)
    @Post()
    @UsePipes(ValidationPipe)
    async createAdress(
        @Body()
        createAdressDto: CreateAdressDto,
        @UserId() userId: number,
        ): Promise<adressEntity>{
            console.log('user_id', userId)
        return this.adressService.createAdress(createAdressDto, userId)
    }


}
