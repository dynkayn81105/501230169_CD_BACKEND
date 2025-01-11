import mongoose from "mongoose";
const url ="mongodb://127.0.0.1:27017/"
const dbname = "CD_backend";

export default function mongoConnect(){
    try{
    mongoose.connect(`${url}${dbname}`)
    console.log("Connected to mongoose successfully")
    }catch(error){
        console.log(error)
        console.log('connection failed')
    }
}