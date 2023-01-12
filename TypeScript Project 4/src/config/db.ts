import {connect} from 'mongoose'

function connects(){
    return connect('mongodb+srv://debayatisarkar:cI2Ty1yHOKIVgSkh@bookmanagement.6gwntxc.mongodb.net/TypeScriptPro4')
    .then(() => {
        console.log("db connected")
    })
    .catch((err:unknown)=> {
        console.log(err)
    })
}

export default connects