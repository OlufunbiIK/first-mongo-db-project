/* eslint-disable prettier/prettier */
import {
  IsDate,
  IsEnum,
  IsInt,
  IsISO8601,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { PostStatus } from '../enums/postStatus.enum';
import { PostType } from '../enums/postType.enum';
import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';

export class CreatePostDto {
  @ApiProperty({
    description: 'This is title of the blog',
    example: 'Amebo people plenty die',
  })
  @IsString()
  @MinLength(2)
  title: string;

  @IsNotEmpty()
  @IsInt()
  authorId: number;

  @ApiProperty({
    enum: PostType,
    description: 'Possible values: post, story, page, series',
    example: 'post',
  })
  @IsEnum(PostType)
  @IsNotEmpty()
  postType: PostType;

  @ApiProperty({
    enum: PostStatus,
    description: 'Possible values: draft, publish,  review, schedule ',
    example: 'draft',
  })
  @IsEnum(PostStatus)
  postStatus: PostStatus;

  @ApiProperty({
    description: 'This is content of the blog',
    example: 'they will be carrying fake news up and down',
  })
  @IsString()
  content?: string;

  @ApiPropertyOptional({
    description: 'this is the image url',
    example: 'http://localhost:3000/',
  })
  @IsString()
  @IsOptional()
  imageUrl?: string;

  @ApiPropertyOptional({
    description: 'This is the date of publication',
    example: '12/13/2000',
  })
  @IsDate()
  @IsISO8601()
  @IsOptional()
  publishedDate: Date;
}
