import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {Role} from "../role/roles.models";
import {UserRoles} from "../role/user-roles.model";

interface UserCreationAttrs {
        email:string
    password:string
}

@Table({tableName:'users'})
export class User extends Model<User,UserCreationAttrs>{

    @ApiProperty({example:'1',description:'Уникальный идентификатор'})
    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
    id:number

    @ApiProperty({example:'aza@mail.ru',description:'Почтовый адрес'})
    @Column({type:DataType.STRING,unique:true,allowNull:false})
    email:string

    @ApiProperty({example:'12345678',description:'Пароль'})
    @Column({type:DataType.STRING,allowNull:false})
    password:string

    @ApiProperty({example:'екгу',description:'Забанен или нет'})
    @Column({type:DataType.BOOLEAN,defaultValue:false})
    banned:boolean

    @ApiProperty({example:'за хулиганство',description:'Причина блокировки'})
    @Column({type:DataType.STRING,allowNull:true})
    banReason:boolean

    @BelongsToMany(()=>Role,()=>UserRoles)
    roles:Role[]

}