import {Injectable} from '@angular/core';

@Injectable()
export class ErrorService {
  constructor() {
  }

  transformError(err) {
    switch (err.status) {
      case 404: {
        console.log('Error 404 occurred');
      }
      break;
      case 500: {
        console.log('Error 500 occurred');
      }
      break;
      case 409: {
        console.log(err.error.message);
      }
      break;
      case 401: {
        console.log(err.error.message);
      }
    }
  }
}