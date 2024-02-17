import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/interfaces/user.interface';
import { CreateTableUser1708129777628 } from './migrations/1708129777628-createTableUser';
import { CreateTableState1708132694422 } from './migrations/1708132694422-createTableState';
import { CreateTableAdress1708132712154 } from './migrations/1708132712154-createTableAdress';
import { CreateTableCity1708132703817 } from './migrations/1708132703817-createTableCity';
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { AdressModule } from './adress/adress.module';


@Module({
  imports: [ConfigModule.forRoot({
    envFilePath: ['.env.development.local'],
  }),
  TypeOrmModule.forRoot({
    type: 'postgres',
    database: process.env.DB_DATABASE,
    host: process.env.DB_HOST,
    password: process.env.DB_PASSWORD,
    port: Number(process.env.DB_PORT),
    username: process.env.DB_USERNAME,
    entities: [UserEntity],
    migrations: [CreateTableUser1708129777628, CreateTableState1708132694422, CreateTableAdress1708132712154, CreateTableCity1708132703817],
    migrationsRun: true
  })
  ,UserModule, StateModule, CityModule, AdressModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
