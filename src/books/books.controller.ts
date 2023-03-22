import { Controller, Get, Post, Delete, Put, Body, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { Book } from './book.class';
import { BookDto } from './bookDto.class';
import { BooksService } from './books.service';

@Controller('books')
export class BooksController {
    constructor(private bookService: BooksService) { }
    @Get()
    findAll(@Req() request: Request): Promise <Book[]> {
        return this.bookService.findAll(request.query);
    }
    @Get(':bookId')
    findBook(@Param('bookId') bookId: string):Promise <Book> {
        return this.bookService.findBook(bookId);
    }
    @Post()
    createBook(@Body() newBook: BookDto):Promise <Book> {
        // let newBook: any = body;
        return this.bookService.createBook(newBook)
    }

    @Delete(':bookId')
    deleteBook(@Param('bookId') bookId: string): Promise<Book> {
        return this.bookService.deleteBook(bookId)
    }
    @Put(':bookId')
    updateBook(@Param('bookId') bookId: string, @Body() newBook: BookDto): Promise<Book> {
        // let newBook: any = body;
        return this.bookService.updateBook(bookId, newBook)
    }
}
