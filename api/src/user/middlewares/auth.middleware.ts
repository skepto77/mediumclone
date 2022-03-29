import { IExpressRequest } from '@app/types/expressReques.types';
import { Injectable, NestMiddleware } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { UserService } from '../user.service';

@Injectable()
export class AuthMiddlware implements NestMiddleware {
  constructor(
    private readonly userService: UserService,
    private readonly configService: ConfigService,
  ) {}

  async use(req: IExpressRequest, res: Response, next) {
    if (!req.headers.authorization) {
      req.user = null;
      next();
      return;
    }
    const token = req.headers.authorization.split(' ')[1];

    try {
      const decode = verify(
        token,
        this.configService.get<string>('JWT_SECRET'),
      );
      console.log(decode, 'decode');
      const user = await this.userService.findById(decode.id);
      req.user = user;
    } catch (err) {
      req.user = null;
    }
    next();
  }
}
