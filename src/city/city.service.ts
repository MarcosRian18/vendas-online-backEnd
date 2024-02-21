import { Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { cityEntity } from './entities/city.entity';
import { Repository } from 'typeorm';
import { Cache} from 'cache-manager';
import { CACHE_MANAGER } from '@nestjs/cache-manager';

@Injectable()
export class CityService {

    constructor(
        @InjectRepository(cityEntity)
        private readonly cityRepository: Repository<cityEntity>,
        @Inject(CACHE_MANAGER) private cacheManager: Cache,
    ) {}

    async getAllCitiesByState(state_id: number): Promise<cityEntity[]>{
        const citiesCache: cityEntity[] = await this.cacheManager.get(`${state_id}`)
        
        if(citiesCache){
            return citiesCache;
        }

        const cities = await this.cityRepository.find({
            where: {
                state_id,
            }
        })

        await this.cacheManager.set(`${state_id}`, cities)
        return cities
    }
}
