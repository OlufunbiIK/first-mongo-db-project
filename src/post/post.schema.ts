/* eslint-disable prettier/prettier */
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
import { PostType } from './enums/postType.enum';
import { PostStatus } from './enums/postStatus.enum';
@Schema()
export class Post extends Document {
  @Prop({
    type: String,
    isRequired: true,
  })
  title: string;

  @Prop({
    type: String,
    isRequired: true,
  })
  authorId: number;

  @Prop({
    type: String,
    isRequired: true,
    enum: PostType,
    default: PostType.POST,
  })
  postType: PostType;

  @Prop({
    type: String,
    isRequired: true,
    enum: PostStatus,
    default: PostStatus.DRAFT,
  })
  postStatus: PostStatus;

  @Prop({
    type: String,
    isRequired: false,
  })
  content?: string;

  @Prop({
    type: String,
    isRequired: false,
  })
  imageUrl?: string;

  @Prop({
    type: Date,
    isRequired: true,
  })
  publishedDate: Date;
}

export const PostSchema = SchemaFactory.createForClass(Post);
