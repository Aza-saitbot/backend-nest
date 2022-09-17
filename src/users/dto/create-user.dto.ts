import {ApiProperty} from "@nestjs/swagger";
import {IsString,IsEmail, Length} from "class-validator";

export class CreateUserDto{

    @ApiProperty({example:'aza@mail.ru',description:'почта'})
    @IsString({message:'Должно быть строкой'})
    @IsEmail({},{message:'Некорректный email'})
    readonly email:string

    @ApiProperty({example:'12345678',description:'Пароль'})
    @IsString({message:'Должно быть строкой'})
    @Length(4,16,{message:'минимальное значение 4, максимальное 16'})
    readonly password:string
}