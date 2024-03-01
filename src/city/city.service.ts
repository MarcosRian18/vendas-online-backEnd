import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { cityEntity } from './entities/city.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CityService {

    constructor(
        @InjectRepository(cityEntity)
        private readonly cityRepository: Repository<cityEntity>,
    ) {}

    async getAllCitiesByState(state_id: number): Promise<cityEntity[]>{
       return this.cityRepository.find({
        where: {
            state_id,
        }
       })
    }

    async findCityById(city_id: number): Promise<cityEntity> {
        const city = await this.cityRepository.findOne({
            where: {
                id: city_id
            }
        })
        if(!city){
            throw new NotFoundException(`city_id ${city_id} not found!`)
        }

        return city
    }
}
