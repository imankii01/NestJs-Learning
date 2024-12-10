/* eslint-disable prettier/prettier */
import { Controller, Get, Req, Post, HttpCode, Res, Header } from "@nestjs/common";
import { of } from "rxjs";
import { Request, Response } from 'express'

@Controller('/albums')
export class AlbumsController {
    @Get()
    @HttpCode(200)
    @Header('Cache-Controle','none')
    @Header('X-Name','Ankit')
    getAlbums(@Req() req: Request, @Res({ passthrough: true }) res: Response) {
        console.log(req)
        // res.status(201)
        // res.json({
        //     hello:"albums"
        // })
        return ({
            hello: 'world'
        })
    }


}
