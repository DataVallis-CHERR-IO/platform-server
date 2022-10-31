import { Injectable, NestInterceptor, ExecutionContext, CallHandler, RequestTimeoutException } from '@nestjs/common'
import { Observable, throwError, TimeoutError } from 'rxjs'
import { catchError, timeout } from 'rxjs/operators'

@Injectable()
export class TimeoutInterceptor implements NestInterceptor {
  intercept(context: ExecutionContext, next: CallHandler): Observable<any> {
    return next.handle().pipe(
      timeout(1800000),
      catchError(error => {
        console.log(context.getClass(), context.getArgs(), 'TimeoutInterceptor')

        if (error instanceof TimeoutError) {
          return throwError(() => new RequestTimeoutException())
        }
        return throwError(() => error)
      })
    )
  }
}
