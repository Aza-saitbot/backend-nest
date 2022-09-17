import {Module} from "@nestjs/common";
import {ConfigModule} from '@nestjs/config';
import {SequelizeModule} from '@nestjs/sequelize';
import {UsersModule} from './users/users.module';
import {User} from "./users/users.models";
import {RoleModule} from './role/role.module';
import {Role} from "./role/roles.models";
import {UserRoles} from "./role/user-roles.model";
import {AuthModule} from './auth/auth.module';
import {PostsModule} from './posts/posts.module';
import {Post} from "./posts/posts.model";
import {FilesModule} from './files/files.module';
import {ServeStaticModule} from "@nestjs/serve-static";
import * as path from 'path'

@Module({
controllers:[],
    providers:[],
    imports:[
        ConfigModule.forRoot({
            envFilePath: `.${process.env.NODE_ENV}.env`,
        }),
        SequelizeModule.forRoot({
            dialect: 'postgres',
            host:process.env.POSTGRES_HOST,
            port: Number(process.env.POSTGRES_PORT),
            username:process.env.POSTGRES_USERNAME,
            password: process.env.POSTGRES_PASSWORD,
            database: process.env.POSTGRES_DB,
            models: [User,Role,UserRoles,Post],
            autoLoadModels:true
        }),
        ServeStaticModule.forRoot({
            rootPath: path.join(__dirname, 'static'),
        }),
        UsersModule,
        RoleModule,
        AuthModule,
        PostsModule,
        FilesModule,
    ]
})

export class AppModule {

}