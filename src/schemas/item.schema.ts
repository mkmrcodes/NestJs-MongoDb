import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ItemDocument = Item & Document;

@Schema()
export class Item {
  @Prop({ type: String, required: true, unique: true })
  productBarcode: string;

  @Prop({ type: String })
  productMainTitle: string;

  @Prop({ type: String })
  productKind: string;

  @Prop({ type: String })
  productSubKind: string;

  @Prop({ type: String })
  brandName: string;

  @Prop({ type: String })
  brandSubName: string;

  @Prop({ type: String })
  productImg: string;
}

export const ItemSchema = SchemaFactory.createForClass(Item);
