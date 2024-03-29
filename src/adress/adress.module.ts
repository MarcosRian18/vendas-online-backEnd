import { Module } from '@nestjs/common';
import { AdressController } from './adress.controller';
import { AdressService } from './adress.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { adressEntity } from './entities/adress.entity';
import { UserModule } from 'src/user/user.module';
import { CityModule } from 'src/city/city.module';

@Module({
  imports: [TypeOrmModule.forFeature([adressEntity]), UserModule, CityModule],
  controllers: [AdressController],
  providers: [AdressService]
})
export class AdressModule {}
