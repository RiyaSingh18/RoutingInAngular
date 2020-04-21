import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  getRecord()
  {
    return[
      {id:101,name:"cls1",subject:"Angular8",EmployeeList:[
        {id:1,name:"riya"},
        {id:2,name:"priya"},
      ]},
      {id:102,name:"cls2",subject:"MongoDb",EmployeeList:[
        {id:1,name:"sam"},
        {id:2,name:"golu"},
      ]},
      {id:103,name:"cls3",subject:"Angular8",EmployeeList:[
        {id:1,name:"sweety"},
        {id:2,name:"molu"},
      ]},
      {id:104,name:"cls4",subject:"Javascript",EmployeeList:[
        {id:1,name:"Riddhi"},
        {id:2,name:"Siddhi"},
      ]},
      {id:105,name:"cls5",subject:"MongoDb",EmployeeList:[
        {id:1,name:"mahima"},
        {id:2,name:"gauri"},
      ]}
    ]
  }
  public getEmployee(companyId:number){
    return this.getRecord().find(x=>x.id==companyId).EmployeeList
  }
}