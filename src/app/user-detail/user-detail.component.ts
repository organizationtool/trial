import { Component,OnInit } from '@angular/core';
import { UserServices } from '../services/userservice.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit{
constructor(private userService: UserServices){}
  
user:{name:string, job:string, gender:string, country:string, age:number, avatar:string};
ngOnInit(): void {
    this.userService.onShowDetailsClicked.subscribe((data:{name:string, job:string, gender:string, country:string, age:number, avatar:string})=>{
      this.user =data;
    });
  }

}