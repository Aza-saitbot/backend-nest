import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./users.models";
import {RolesGuard} from "../auth/roles.guard";
import {Roles} from "../auth/roles-auth.decorator";
import {AddRoleDto} from "./dto/add-role.dto";
import {BanUserDto} from "./dto/ban-user.dto";

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {

    constructor(private userService:UsersService) {
    }

    @ApiOperation({summary:'Создания пользователя'})
    @ApiResponse({status:200,type:User})
    @Post()
    create(@Body() dto:CreateUserDto){
        return this.userService.createUser(dto)
    }

    @ApiOperation({summary:'Получить всех пользователей'})
    @ApiResponse({status:200,type:[User]})
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Get()
    getAll(){
        return this.userService.getUsers()
    }

    @ApiOperation({summary:'Выдачи ролей'})
    @ApiResponse({status:200})
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post('/role')
    addRole(@Body() dto:AddRoleDto){
        return this.userService.addRole(dto)
    }
    @ApiOperation({summary:'Забанить пользователя'})
    @ApiResponse({status:200})
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post('/ban')
    ban(@Body() dto:BanUserDto){
        return this.userService.ban(dto)
    }

}
