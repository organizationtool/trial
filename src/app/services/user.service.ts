import { Injectable } from "@angular/core";
import { LoggerService } from "./logger.service";
@Injectable()
export class UserService{

    users=[ 
            {name:'john',status:'Active'},
            {name:'demoGuy',status:'Inactive'},
            {name:'demoGirl',status:'Inactive'},
          ];

          constructor(private logger:LoggerService){

          }
          AddNewUser(name:string,status:string)
          {
            this.users.push({name:name,status:status}) ;
            this.logger.LogMessage(name,status);
          }

}