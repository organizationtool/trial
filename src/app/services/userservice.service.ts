import { EventEmitter } from "@angular/core"

export class UserServices{
    users=[
        {name:'demo',job:'Teacher',gender:'male',country:'india',age:24,avatar:"https://www.clipartmax.com/png/small/255-2557794_animated-person-animated-picture-of-man.png"},
        {name:'demo1',job:'tech',gender:'female',country:'india',age:24,avatar:"https://www.clipartmax.com/png/small/255-2557794_animated-person-animated-picture-of-man.png"},
        {name:'demo2',job:'Hr',gender:'male',country:'india',age:24,avatar:"https://www.clipartmax.com/png/small/255-2557794_animated-person-animated-picture-of-man.png"},
        {name:'demo3',job:'dev',gender:'female',country:'india',age:24,avatar:"https://www.clipartmax.com/png/small/255-2557794_animated-person-animated-picture-of-man.png"} 
    ]
    
    onShowDetailsClicked = new EventEmitter<{name:string, job:string, gender:string, country:string, age:number, avatar:string}>()

    showUserDetails(user:{name:string, job:string, gender:string, country:string, age:number, avatar:string})
    {
        this.onShowDetailsClicked.emit(user);
    }
}