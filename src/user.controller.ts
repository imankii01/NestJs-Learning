/* eslint-disable prettier/prettier */
import { Controller, Get,Req,Post } from "@nestjs/common";
import { of } from "rxjs";
import {Request} from  'express'

@Controller('/users')
export class UsersController {
    @Get('/profile')
    getProfile(@Req() req: Request){
        console.log(req)
        return of({
            hello:"World"
        })
    }
    @Post('/post-profile')
    postProfile(@Req() req: Request){
        console.log(req)
        return of({
            hello:"World"
        })
    }
    
}
