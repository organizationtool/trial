import { Component } from '@angular/core';
import { EnrollService } from '../services/enroll.service';

@Component({
  selector: 'app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css'], 
  // providers:[EnrollService]
})
export class AngularComponent {
  title:string= 'Angular';
  
  constructor(private enrollService:EnrollService){
  }

  onEnroll(){
    // const onenrollService = new EnrollService();
    // onenrollService.OnEnrollClicked(this.title);
    this.enrollService.OnEnrollClicked(this.title); //instance of service class 
  }

}
