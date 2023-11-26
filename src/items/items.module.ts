import {Module} from '@nestjs/common';
import { ItemsService } from './items.service';
import {ConfigModule} from "@nestjs/config";
import { ItemsController } from './items.controller';

@Module({
  imports: [ConfigModule],
  providers: [ItemsService],
  controllers: [ItemsController]
})
export class ItemsModule {}
