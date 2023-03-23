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
import { WinstonModule } from 'nest-winston'; 
import { HealthModule } from './health/health.module';
import * as winston from 'winston';
import * as path from 'path';

@Module({
  imports: [TypeOrmModule.forRoot(configService.getTypeOrmConfig()),BooksModule,AuthModule,WinstonModule.forRoot({
    level: 'info', 
    format: winston.format.combine( 
      winston.format.timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      winston.format.errors({ stack: true }),
      winston.format.splat(),
      winston.format.json(),
    ),
    transports: [ 
      new winston.transports.File({
        dirname: path.join(__dirname, './../log/debug/'),
        filename: 'debug.log',
        level: 'debug',
      }),
      new winston.transports.File({
        dirname: path.join(__dirname, './../log/error/'),
        filename: 'error.log',
        level: 'error',
      }),
      new winston.transports.File({
        dirname: path.join(__dirname, './../log/info/'),
        filename: 'info.log',
        level: 'info',
      }),
      new winston.transports.Console({ level: 'debug' }),
    ],
  }), HealthModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
