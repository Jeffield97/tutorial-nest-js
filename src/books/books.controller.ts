import { Controller, Get, Post, Delete, Put, Body, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { Book } from './book.entity';
import { BookDto } from './bookDto.class';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
    constructor(private booksService: BooksService) { }
    @Get()
    findAll(@Req() request: Request): Promise<Book[]> {
        return this.booksService.findAll(request.query);
    }
    @Get(':bookId')
    findBook(@Param('bookId') bookId: string): Promise<Book> {
        return this.booksService.findBook(bookId);
    }
    @Post()
    createBook(@Body() newBook: BookDto): Promise<Book> {
        // let newBook: any = body;
        return this.booksService.createBook(newBook)
    }

    @Delete(':bookId')
    deleteBook(@Param('bookId') bookId: string): Promise<Book> {
        return this.booksService.deleteBook(bookId)
    }
    @Put(':bookId')
    updateBook(@Param('bookId') bookId: string, @Body() newBook: BookDto): Promise<Book> {
        // let newBook: any = body;
        return this.booksService.updateBook(bookId, newBook)
    }
}
