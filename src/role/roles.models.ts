import {BelongsToMany, Column, DataType, Model, Table} from "sequelize-typescript";
import {ApiProperty} from "@nestjs/swagger";
import {User} from "../users/users.models";
import {UserRoles} from "./user-roles.model";

interface RoleCreationAttrs {
        role:string
    description:string
}

@Table({tableName:'roles'})
export class Role extends Model<Role,RoleCreationAttrs>{

    @ApiProperty({example:'1',description:'Уникальный идентификатор роли'})
    @Column({type:DataType.INTEGER,unique:true,autoIncrement:true,primaryKey:true})
    id:number

    @ApiProperty({example:'admin',description:'уникальное значение роли'})
    @Column({type:DataType.STRING,unique:true,allowNull:false})
    value:string

    @ApiProperty({example:'Администратор',description:'Описания роли'})
    @Column({type:DataType.STRING,allowNull:false})
    description:string

    @BelongsToMany(()=>User,()=>UserRoles)
    users:User[]

}