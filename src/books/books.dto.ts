import { Controller, Get, Post, Delete, Put, Body, Param, Req } from '@nestjs/common';
import { Request } from 'express';
import { BookDto } from './bookDto.class';
import { BooksService } from './books.service';
import { CreateBookDto } from './CreateBook.dto';
import { UpdateBookDto } from './UpdateBook.dto';

@Controller('books')
export class BooksController {
    constructor(private bookService: BooksService) { }
    @Get()
    findAll(@Req() request: Request) {
        return this.bookService.findAll(request.query);
    }
    @Get(':bookId')
    findBook(@Param('bookId') bookId: string) {
        return this.bookService.findBook(bookId);
    }
    @Post()
    createBook(@Body() newBook: BookDto) {
        // let newBook: any = body;
        return this.bookService.createBook(newBook)
    }

    @Delete(':bookId')
    deleteBook(@Param('bookId') bookId: string) {
        return this.bookService.deleteBook(bookId)
    }
    @Put(':bookId')
    updateBook(@Param('bookId') bookId: string, @Body() newBook: BookDto) {
        // let newBook: any = body;
        return this.bookService.updateBook(bookId, newBook)
    }
}
