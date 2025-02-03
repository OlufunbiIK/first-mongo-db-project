/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { UserService } from 'src/user/user.service';

@Injectable()
export class PostService {
  constructor(private readonly userService: UserService) {}
  public findAll(userId: number) {
    const user = this.userService.findOne(userId);

    return [
      {
        user: user,
        title: 'First Title',
        content: 'Test Content',
      },
      {
        user: user,
        title: 'Second Title',
        content: 'Test Content 2',
      },
    ];
  }

  create(createPostDto: CreatePostDto) {
    return 'This action adds a new post';
  }

  findOne(id: number) {
    return `This action returns a #${id} post`;
  }

  update(id: number, updatePostDto: UpdatePostDto) {
    return `This action updates a #${id} post`;
  }

  remove(id: number) {
    return `This action removes a #${id} post`;
  }
}
