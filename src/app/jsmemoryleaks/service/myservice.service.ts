import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  private randomnumber: Observable<number>;
  private servicecallcount: number = 0;

  constructor() { }
  getrandomnumber() {
    this.servicecallcount++;
    if (!this.randomnumber) {
      this.randomnumber = Observable.create((subject: Subject<number>) => {
        setInterval(() => {
          const number = (Math.floor(Math.random() * 10) - 1) * (Math.floor(Math.random() * 30) + 1);
          subject.next(number);
        }, 3000);
      });
    }
    return this.randomnumber;

  }
  getservicecallcount() {
    return this.servicecallcount;
  }
}
