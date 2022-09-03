import { Injectable } from '@nestjs/common';
import {InjectModel} from "@nestjs/sequelize";
import {Role} from "./roles.models";
import {CreateRoleDto} from "./dto/create-role.dto";

@Injectable()
export class RoleService {

    constructor(@InjectModel(Role) private roleRepository:typeof Role) {
    }

    async creatRole(dto:CreateRoleDto ){
        const role = await this.roleRepository.create(dto)
        return role
    }

    async getRoleByValue(value:string){
        const role= await this.roleRepository.findOne({where:{value}})
        return role
    }

}
