import {Request,Response} from 'express'
import userModel from '../models/userModel'
import {createUser,findAndUpdate,findUser,deleteUser} from '../services/user.service'

const homeDetails = async(req:Request,res:Response) => {
    //let myData = await userModel.find()
    // ADD
    //const user = await createUser({name:'abc',dept:'xyz'})
    //UPDATE
    //const user = await findAndUpdate({name:'abc'},{dept:'com'},{new:true})
    //FIND
    //const user = await findUser({_id: '63bd449deea1c0cff017c4fa'})
    //DELETE
    const user = await deleteUser({_id: '63bd449deea1c0cff017c4fa'})
    let ob = {
        x:12,
        y:30
    }
    let data = sumData(ob)
    res.json({
        message: "Home Page New",
        data:data,
        myData:user
    })
}

interface params{
    x:number
    y:number
}

type sumCheck = (x:params) => number

const sumData:sumCheck = (ob:params) => {
    return ob.x+ob.y
}

export {homeDetails}