import {Body, Controller, Get, Post} from '@nestjs/common';
import {UsersService} from "./users.service";
import {CreateUserDto} from "./dto/create-user.dto";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {User} from "./users.models";

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
    @Get()
    getAll(){
        return this.userService.getUsers()
    }
}
