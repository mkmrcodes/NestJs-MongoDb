import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item, ItemDocument } from 'src/schemas/item.schema';
import { CreateItemDto } from './dto/create-item.dto';
import { UpdateItemDto } from './dto/update-item.dto';

@Injectable()
export class ItemsService {
  constructor(@InjectModel('Item') private itemModel: Model<ItemDocument>) {}

  async create(createItemDto: CreateItemDto): Promise<Item> {
    return new this.itemModel(createItemDto).save();
  }

  async findAll() {
    return this.itemModel.find();
  }

  async findOne(productBarcode: string) {
    return this.itemModel.findOne({ productBarcode });
  }

  async update(productBarcode: string, updateItemDto: UpdateItemDto) {
    return this.itemModel.updateOne(
      { productBarcode },
      { $set: { ...updateItemDto } },
    );
  }

  async remove(productBarcode: string) {
    return this.itemModel.deleteOne({ productBarcode });
  }
}
