import { Component, OnInit, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    console.log('In OnInit');
  }

  // tslint:disable-next-line:use-lifecycle-interface
  ngAfterViewInit() {
    console.log('In AfterViewInit');
  }

}
