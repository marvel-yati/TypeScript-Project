import express,{Request,Response} from 'express'
const router = express.Router()
import {homeDetails} from '../controllers/userController'

router.get('/home',homeDetails)

router.get('/about',(req:Request,res:Response) => {
    res.json({
        message: "About Page"
    })
})

export {router}