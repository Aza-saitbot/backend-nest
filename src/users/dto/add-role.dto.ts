import {IsNumber, IsString} from "class-validator";


export class AddRoleDto {
    @IsString({message:'Должен быть строковым значением'})
    readonly value:string
    @IsNumber({},{message:'Должен быть числом '})
    readonly userId:number

}