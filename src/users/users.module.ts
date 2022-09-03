import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import {SequelizeModule} from "@nestjs/sequelize";
import {User} from "./users.models";
import {Role} from "../role/roles.models";
import {UserRoles} from "../role/user-roles.model";
import {RoleModule} from "../role/role.module";

@Module({
  controllers: [UsersController],
  providers: [UsersService],
  imports:[
      SequelizeModule.forFeature([User,Role,UserRoles]),
      RoleModule

  ]
})
export class UsersModule {}
