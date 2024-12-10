/* eslint-disable prettier/prettier */
import { Controller, Get,Req,Post,HttpCode,Header,Redirect } from "@nestjs/common";
import { of } from "rxjs";
import {Request} from  'express'

@Controller('/users')
export class UsersController {
    @Get('/profile')
    @Redirect('/post-profile', 302)
    @HttpCode(200)
    @Header('Cache-Controle','none')
    @Header('X-Name','Ankit')
    getProfile(@Req() req: Request){
        console.log(req)
        return of({
            hello:"World"
        })
    }
    @Post('/post-profile')
    postProfile(@Req() req: Request){
        return({
            hello:"World-profile"
        })
    }
    
}
