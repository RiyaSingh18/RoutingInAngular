import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { TestComponent } from '../test/test.component';
import { AppComponent } from '../app.component';
import { ParentComponent } from '../parent/parent.component';
import { ChildComponent } from '../child/child.component';

const routes:Routes=[
  {path:'app',component:AppComponent},
  {path:'test',component:TestComponent},
  {path:'parent',component:ParentComponent},
  {path:'child/:id',component:ChildComponent}
]
@NgModule({
  
  imports: [
    RouterModule.forRoot(routes)],
exports:[RouterModule]
})
export class AppRoutingModule { }
