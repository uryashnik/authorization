import {CanActivate, ExecutionContext, Injectable, UnauthorizedException} from "@nestjs/common";
import {JwtService} from "@nestjs/jwt";
import {Request} from 'express';
import {jwtConstants} from "./constants";

@Injectable()
export class AuthGuard implements CanActivate {
    constructor(private readonly jwtService: JwtService) {}

    async canActivate(context: ExecutionContext){
        const request = context.switchToHttp().getRequest();
        const token = this.extractTokenFromHeader(request);
        if(!token){
            throw new UnauthorizedException()
        }
        try{
            const result = this.jwtService.verify(token, {secret: jwtConstants.secret});
            request.user = result
        }catch(e){
            throw new UnauthorizedException()
        }

        return true;

    }

    extractTokenFromHeader(request: Request){
        const [type, token] = request.headers.authorization?.split(' ') || [];
        return type === 'Bearer' ? token : undefined;
    }
}