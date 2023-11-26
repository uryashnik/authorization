import {Body, Controller, Get, Post, UseGuards} from '@nestjs/common';
import {ConfigService} from "@nestjs/config";
import {UserService} from "./user.service";
import {UserDto} from "./dto/user.dto";
import {AuthGuard} from "../auth/auth.guard";

@Controller('users')
export class UserController {
    constructor(
        private readonly configService: ConfigService,
        private readonly userService: UserService,
    ) {}

    @Get('/')
    @UseGuards(AuthGuard)
    async getAll(){
        return this.userService.getAll()
    }

    @Post('/')
    async create(@Body() dto: UserDto){
        return this.userService.create(dto)
    }
}
