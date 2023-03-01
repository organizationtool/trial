// import { EnrollService } from './services/enroll.service';
import { Component,OnInit, ViewChild } from '@angular/core';
import { UserService } from './services/user.service';
import { LoggerService } from './services/logger.service';
import { UserServices } from './services/userservice.service';
import { NgForm } from '@angular/forms';
import { Observable, Subscriber } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers:[UserService,LoggerService,UserServices]
})
export class AppComponent {
  myimage: Observable<any>;
  convImg:string='';
  firstname:string='';
  lastname:string='';
  email:string='';
  Country:string='';
  Gen:string='';



  gender=[
    {id:'1',value:'Male'},
    {id:'2',value:'Female'},
    {id:'3',value:'Other'}
  ]

  constructor(){}

  @ViewChild('myform') form:NgForm;
  onSubmit(form:NgForm,details: {firstname:string,lastname:string,email:string,country:string,gender:string}){
    console.log(form);
    this.firstname=this.form.value.personDetails.firstname;
    this.lastname=this.form.value.personDetails.lastname;
    this.email=this.form.value.personDetails.email;
    this.Gen=this.form.value.gender;
    this.Country=this.form.value.country;
    this.onChange;
    console.log(details);

   // console.log(this.convImg);
  }

onChange($event: Event) {
  const file = ($event.target as HTMLInputElement).files[0];
  this.convertToBase64(file);

}

convertToBase64(file: File) {
  this.myimage = new Observable((subscriber: Subscriber<any>) => {
    this.readFile(file, subscriber);
  });
  this.myimage.subscribe((d)=>{
   //console.log(d);
   this.convImg= d;
  });
}

readFile(file: File, subscriber: Subscriber<any>) {
  const filereader = new FileReader();
  filereader.readAsDataURL(file);

  filereader.onload = () => {
    subscriber.next(filereader.result);
    subscriber.complete();
  };
  filereader.onerror = (error) => {
    subscriber.error(error);
    subscriber.complete();
  };
}
}
