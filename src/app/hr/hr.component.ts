import { Component, OnInit } from '@angular/core';
import { Employee } from '../models/employee';

@Component({
  selector: 'app-hr',
  templateUrl: './hr.component.html',
  styleUrls: ['./hr.component.css']
})
export class HrComponent implements OnInit {
  employee: Employee = new Employee();

  locations = ['Los Angeles', 'Austin', 'Kansas City', 'Denver'];

  onSubmit  = function() {
    console.log(this.employee);
    this.employee = new Employee();
  };

  constructor() { }

  ngOnInit() {
    this.employee.isFullTime = true;
   }

}
