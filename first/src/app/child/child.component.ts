import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
public stuId:number;
EmployeeList=[];
  constructor(private data:DataService,private route:ActivatedRoute,private router:Router) {
    this.stuId=this.route.snapshot.params['id'];
   }

  ngOnInit() {
    this.EmployeeList=this.data.getEmployee(this.stuId);
  }


}
