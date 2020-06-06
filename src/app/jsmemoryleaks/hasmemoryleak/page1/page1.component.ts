import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../service/myservice.service'
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  public randomnumber: Array<object> = [];
  public lastexecutedtime: number = 0;
  public servicecallcount: number = 0;

  constructor(private myservice: MyserviceService) { }

  ngOnInit() {
    this.myservice.getrandomnumber().subscribe((rand: number) => {
      let lastexecutedtime: number = Date.now();
      this.randomnumber.push({ randnumber: rand, serviceid: this.servicecallcount, lastexecutedtime: lastexecutedtime, executiongap: lastexecutedtime - this.lastexecutedtime })
      this.lastexecutedtime = lastexecutedtime;
      console.log(`Rceived  random number ${rand} service id : ${this.servicecallcount} `);
    });
    this.servicecallcount = this.myservice.getservicecallcount();
  }


}
