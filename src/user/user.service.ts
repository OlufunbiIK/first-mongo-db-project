/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './user.schema';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

/**
 * Service handling user operations.
 */
@Injectable()
export class UserService {
  constructor(
    @InjectModel(User.name)
    private readonly userModel: Model<User>,
  ) /**
   * Service handling user operations.
   */ {}
  /**
   * Creates a new user.
   * @param {CreateUserDto} createUserDto - The data for creating a user.
   * @returns {string} Confirmation message.
   */
  public async createUser(createUserDto: CreateUserDto) {
    const newUser = new this.userModel(createUserDto);
    return await newUser.save();
  }

  /**
   * Retrieves all users.
   * @returns {string} A list of all users.
   */
  public findAll(): string {
    return `This action returns all users`;
  }

  /**
   * Finds a specific user by ID.
   * @param {number} id - The ID of the user.
   * @returns {string} The user data.
   */
  findOne(id: number): string {
    return `This action returns a #${id} user`;
  }

  /**
   * Updates a user.
   * @param {number} id - The ID of the user to update.
   * @param {UpdateUserDto} updateUserDto - The data for updating the user.
   * @returns {string} Confirmation message.
   */
  update(id: number, updateUserDto: UpdateUserDto): string {
    return `This action updates a #${id} user`;
  }

  /**
   * Removes a user.
   * @param {number} id - The ID of the user to remove.
   * @returns {string} Confirmation message.
   */
  remove(id: number): string {
    return `This action removes a #${id} user`;
  }
}
