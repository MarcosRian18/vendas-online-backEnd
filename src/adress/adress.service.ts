import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { adressEntity } from './entities/adress.entity';
import { Repository } from 'typeorm';
import { CreateAdressDto } from './dtos/createAdress.dto';
import { UserService } from 'src/user/user.service';
import { CityService } from 'src/city/city.service';

@Injectable()
export class AdressService {

    constructor(
        @InjectRepository(adressEntity)
        private readonly adressRepository: Repository<adressEntity>,
        private readonly userService: UserService,
        private readonly cityService: CityService,
        ) { }

    async createAdress(createAdressDto: CreateAdressDto, user_id: number,): Promise<adressEntity> {
        await this.userService.getUserById(user_id);
        await this.cityService.findCityById(createAdressDto.city_id)
        return this.adressRepository.save({
            ...createAdressDto,
            user_id,
        })
    }
}
