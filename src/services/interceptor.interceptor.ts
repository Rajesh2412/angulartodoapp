import { HttpEvent, HttpInterceptorFn } from '@angular/common/http';
import { BehaviorSubject, tap } from 'rxjs';

export const interceptorService: HttpInterceptorFn = (req, next) => {
  const isLoading : BehaviorSubject<any> = new BehaviorSubject<boolean>(false)
  isLoading.next(true)
  return next(req).pipe(
    tap((event:HttpEvent<any>)=>{
      console.log(event)
      isLoading.next(false)
    })
  )
};
