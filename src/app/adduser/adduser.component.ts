import { Component,OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-adduser',
  templateUrl: './adduser.component.html',
  styleUrls: ['./adduser.component.css'],
  // providers:[UserService]

})
export class AdduserComponent implements OnInit{
  status='Active';
  username='';
  constructor(private userService:UserService){}
  adduser(){
    this.userService.AddNewUser(this.username,this.status)
    console.log(this.userService.users);
  }
  ngOnInit(){

     
  }
}
