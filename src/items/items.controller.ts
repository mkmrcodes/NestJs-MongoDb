import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ItemsService } from './items.service';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Controller('items')
export class ItemsController {
  constructor(private readonly itemsService: ItemsService) {}

  @Post()
  create(@Body() createItemDto: CreateItemDto) {
    return this.itemsService.create(createItemDto);
  }

  @Get()
  findAll() {
    return this.itemsService.findAll();
  }

  @Get(':productBarcode')
  findOne(@Param('productBarcode') productBarcode: string) {
    return this.itemsService.findOne(productBarcode);
  }

  @Patch(':productBarcode')
  update(
    @Param('productBarcode') productBarcode: string,
    @Body() updateItemDto: UpdateItemDto,
  ) {
    return this.itemsService.update(productBarcode, updateItemDto);
  }

  @Delete(':productBarcode')
  remove(@Param('productBarcode') productBarcode: string) {
    return this.itemsService.remove(productBarcode);
  }
}
