import { Controller, Get, Param } from '@nestjs/common';
import { cityEntity } from './entities/city.entity';
import { CityService } from './city.service';
@Controller('city')
export class CityController {

    constructor(private readonly cityService: CityService) { }

    @Get('/:state_id')
    async getAllCitiesByState(
        @Param('state_id') state_id: number
    ): Promise<cityEntity[]> {
        return this.cityService.getAllCitiesByState(state_id)
    }
}
