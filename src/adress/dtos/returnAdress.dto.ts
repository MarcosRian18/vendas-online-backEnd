import { ReturnCityDto } from "src/city/dtos/returnCity.dto";
import { adressEntity } from "../entities/adress.entity";

export class ReturnAdressDto {
   complement: string
   number: number;
   cep: string;
   city?: ReturnCityDto;

   constructor(adress: adressEntity){
    this.complement = adress.complement;
    this.number = adress.number;
    this.cep = adress.cep;
    this.city = adress.city ? new ReturnCityDto(adress.city) : undefined

   }
}