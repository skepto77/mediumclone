import { Injectable } from '@nestjs/common';

@Injectable()
export class TagService {
  findAll(): string[] {
    return ['test', 'test2', 'test3', 'test3'];
  }
}
