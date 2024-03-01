import { IsInt, IsOptional, IsString, isInt } from "class-validator";

export class CreateAdressDto {
   @IsString()
   @IsOptional()
   complement: string

   @IsInt()
   number: number;

   @IsString()
   cep: string;

   @IsInt()
   city_id: number
}