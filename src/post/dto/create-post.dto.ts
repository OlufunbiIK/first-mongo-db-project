/* eslint-disable prettier/prettier */

import { IsOptional, IsUrl } from 'class-validator';

export class CreatePostDto {
  slug: string;
  status: string;
  content?: string;

  @IsOptional()
  @IsUrl()
  featuredImageUrl?: string;
}
