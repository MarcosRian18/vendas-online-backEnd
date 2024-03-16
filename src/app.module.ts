import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserEntity } from './user/entities/user.interface';
import { CreateTableUser1708129777628 } from './migrations/1708129777628-createTableUser';
import { CreateTableState1708132694422 } from './migrations/1708132694422-createTableState';
import { CreateTableAdress1708132712154 } from './migrations/1708132712154-createTableAdress';
import { CreateTableCity1708132703817 } from './migrations/1708132703817-createTableCity';
import { StateModule } from './state/state.module';
import { CityModule } from './city/city.module';
import { AdressModule } from './adress/adress.module';
import { InsertInState1708147741103 } from './migrations/1708147741103-insertInState';
import { InsertInCity1708147751045 } from './migrations/1708147751045-insertInCity';
import { adressEntity } from './adress/entities/adress.entity';
import { cityEntity } from './city/entities/city.entity';
import { stateEntity } from './state/entities/state.entity';
//import { AlterTableState1708151288218 } from './migrations/1708151288218-alterTableState';
import { CacheModule } from './cache/cache.module';
import { AuthModule } from './auth/auth.module';
import { APP_GUARD } from '@nestjs/core';
import { RolesGuard } from './guards/roles.guard';
import { JwtModule } from '@nestjs/jwt';
import { AlterTableUser1710607035686 } from './migrations/1710607035686-alter-table-user';


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
    entities: [UserEntity, adressEntity, cityEntity, stateEntity],
     migrations: [CreateTableUser1708129777628,CreateTableState1708132694422, CreateTableCity1708132703817,CreateTableAdress1708132712154,InsertInState1708147741103,InsertInCity1708147751045,AlterTableUser1710607035686],
    migrationsRun: true
  })
  ,UserModule, StateModule, CityModule, AdressModule, CacheModule, AuthModule, JwtModule],
  controllers: [],
  providers: [{
    provide: APP_GUARD,
    useClass: RolesGuard
  }],
})
export class AppModule {}