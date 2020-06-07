import { Injectable } from '@angular/core';
import { Observable, Subject, Observer } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {
  private randomnumber: Observable<number>;
  private servicecallcount = 0;

  constructor() { }
  getrandomnumber() {
    this.servicecallcount++;
    if (!this.randomnumber) {
      this.randomnumber = new Observable((subject: Observer<number>) => {
        setInterval(() => {
          const randnumber = (Math.floor(Math.random() * 10) - 1) * (Math.floor(Math.random() * 30) + 1);
          subject.next(randnumber);
        }, 3000);
      });
    }
    return this.randomnumber;

  }
  getservicecallcount() {
    return this.servicecallcount;
  }
}
