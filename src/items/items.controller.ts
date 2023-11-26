import {Body, Controller, Get} from '@nestjs/common';
import {ItemsService} from "./items.service";

@Controller('items')
export class ItemsController {
    constructor(private readonly itemsService: ItemsService) {}
    @Get('all')
    async getAll(@Body() body: {}){
        return this.itemsService.getAll()
    }
}
