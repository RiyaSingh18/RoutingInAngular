import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
public stuRecord;
  constructor(private data:DataService) { 
    this.stuRecord=this.data.getRecord();
  }

  ngOnInit() {
  }

}
