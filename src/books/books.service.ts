import { Injectable } from '@nestjs/common';
import { BookDto } from './bookDto.class';
import { Book } from './book.entity';
import { InjectRepository} from '@nestjs/typeorm';
import { Repository } from 'typeorm'; 
import { Counter } from 'prom-client';
import { InjectMetric } from '@willsoto/nestjs-prometheus/dist/injector';


@Injectable()
export class BooksService {

  constructor(
    @InjectRepository(Book) private booksRepository: Repository<Book>, @InjectMetric('books_served') public counter:  Counter<string>
  ) {}

  async findAll(params): Promise<Book[]> { 
    this.counter.inc();
    return await this.booksRepository.find(); 
  }

  async findBook(bookId: string): Promise<Book> {
    return await this.booksRepository.findOne({ where: { id: parseInt(bookId) } }); 
  }

  async createBook(newBook: BookDto): Promise<Book> {
    return this.booksRepository.save(newBook);
  }

  async deleteBook(bookId: string): Promise<any> {
    return await this.booksRepository.delete({ id: parseInt(bookId) });
  }

  async updateBook(bookId: string, newBook: BookDto): Promise<Book> { 
    console.log(bookId)
    let toUpdate =  await this.booksRepository.findOne({ where: { id: parseInt(bookId) } }); 

    let updated = Object.assign(toUpdate, newBook); 

    return this.booksRepository.save(updated); 
  }
}