import { HttpException, HttpStatus } from '@nestjs/common';

export class IdNotFoundException extends HttpException {
    constructor(id: number) {
        super(`O ${id} não foi encontrado!`, HttpStatus.NOT_FOUND);
    }
}


export class GenericException extends HttpException {
    constructor(message: string | string[],statusCode: number, error:string) {
      super(
        {
          statusCode:statusCode,
          message: message,
          error: error,
        },
        statusCode
      );
    }
}
  