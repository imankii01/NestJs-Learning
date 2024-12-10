/* eslint-disable prettier/prettier */
import { Controller, Get } from "@nestjs/common";


@Controller('/users')
export class UsersController {
    @Get('/profile')
    getProfile(){
        // request handler
        return new Promise ((resolve,reject)=>{
            resolve({
                name:"Ankit",
                class:"B-Tech CSE",
                status:"online"
            })
        })
    }
    
}
