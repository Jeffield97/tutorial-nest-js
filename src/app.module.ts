import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksService } from './books/books.service';
import { BooksController } from './books/books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BooksModule } from './books/books.module';
import { Book } from './books/book.entity';
import { configService } from 'config/config.service';
import { AuthModule } from './utilities/auth.module';

@Module({
  imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig()),BooksModule,AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
