import { Body, Controller, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { AdressService } from './adress.service';
import { CreateAdressDto } from './dtos/createAdress.dto';
import { adressEntity } from './entities/adress.entity';

@Controller('adress')
export class AdressController {
    constructor( private readonly adressService: AdressService){}

    @Post('/:user_id')
    @UsePipes(ValidationPipe)
    async createAdress(
        @Body()
        createAdressDto: CreateAdressDto,
        @Param('user_id') userId: number,
        ): Promise<adressEntity>{
        return this.adressService.createAdress(createAdressDto, userId)
    }


}
