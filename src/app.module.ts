/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { AuthModule } from './auth/auth.module';
import { PostModule } from './post/post.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UserModule,
    AuthModule,
    PostModule,
    MongooseModule.forRoot(
      'mongodb+srv://olufunbi:olufunbi@cluster0.xr5ne.mongodb.net/blogApi?retryWrites=true&w=majority&appName=Cluster0',
      { dbName: 'blogApi' },
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
