import {ApiProperty} from "@nestjs/swagger";


export class CreateUserDto{

    @ApiProperty({example:'aza@mail.ru',description:'почта'})
    readonly email:string
    @ApiProperty({example:'12345678',description:'Пароль'})
    readonly password:string
}