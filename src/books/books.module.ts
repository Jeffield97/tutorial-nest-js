import { Module } from '@nestjs/common';
import { Book } from './book.entity';
import { BooksService } from './books.service';
import { BooksController } from './books.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrometheusModule } from '@willsoto/nestjs-prometheus';
import { makeCounterProvider } from '@willsoto/nestjs-prometheus/dist/metrics';

@Module({
  imports: [TypeOrmModule.forFeature([Book]),PrometheusModule.register()], 
  providers: [BooksService,makeCounterProvider({
    name: 'books_served',
    help: 'books_help',
  })], 
  controllers: [BooksController], 
})
export class BooksModule {}