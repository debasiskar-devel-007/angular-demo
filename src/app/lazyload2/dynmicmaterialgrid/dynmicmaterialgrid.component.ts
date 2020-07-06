import { Component, OnInit } from '@angular/core';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-dynmicmaterialgrid',
  templateUrl: './dynmicmaterialgrid.component.html',
  styleUrls: ['./dynmicmaterialgrid.component.css']
})

export class DynmicmaterialgridComponent implements OnInit {
  tiles: Tile[] = [
    { text: 'One', cols: 3, rows: 1, color: 'lightblue' },
    { text: 'Two', cols: 1, rows: 2, color: 'lightgreen' },
    { text: 'Three', cols: 1, rows: 1, color: 'lightpink' },
    { text: 'Four', cols: 2, rows: 1, color: '#DDBDF1' },
    { text: 'Five', cols: 4, rows: 1, color: '#DDBDF1' },
    { text: 'Five', cols: 2, rows: 1, color: 'red' },
    { text: 'Five', cols: 1, rows: 2, color: 'blue' },
    { text: 'Five', cols: 1, rows: 3, color: 'yellow' },
    { text: 'Five', cols: 2, rows: 1, color: 'green' },
    { text: 'Five', cols: 3, rows: 1, color: 'red' },
  ];
  breakpoint: number;

  constructor() { }

  ngOnInit() {
    this.breakpoint = (window.innerWidth <= 800) ? 1 : 4;
    console.log(this.breakpoint, 'brkpoint', window.innerWidth);
  }

  onResize(event) {
    this.breakpoint = (event.target.innerWidth <= 800) ? 1 : 4;
    console.log(this.breakpoint, 'brkpoint', window.innerWidth);
  }

}
