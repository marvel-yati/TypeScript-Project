import express,{Request,Response} from 'express'
import router from './routes/route'
import connect from './config/db'
const app = express()

const PORT = process.env.PORT || 3000

app.use(express.json())
app.use('/',router)

app.get('/test',(req:Request,res:Response):void => {
    res.json({data: "test page"})
})

connect()

app.listen(PORT,():void => {
    console.log(`Express app is running on port ${PORT}`)
})