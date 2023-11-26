import { Injectable } from '@nestjs/common';
import {ConfigService} from "@nestjs/config";

@Injectable()
export class ItemsService {
    constructor(private readonly configService: ConfigService) {}
    async getAll(){
        console.log(this.configService.get('PORT'))
        return [1, 2, 3]
    }
}
