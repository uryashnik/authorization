import {Injectable, UnauthorizedException} from '@nestjs/common';
import {UserService} from "../user/user.service";
import {JwtService} from "@nestjs/jwt";


@Injectable()
export class AuthService {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) {}
    async login({email, password: pass}){
        const user = await this.userService.findOne(email);

        if(user?.password !== pass){
            throw new UnauthorizedException({message: 'Неправильный логин или пароль'})
        }

        const payload = {sub: user.id, email: user.email};
        const token = await this.jwtService.signAsync(payload);

        return {
            accessToken: token
        }
    }
}
