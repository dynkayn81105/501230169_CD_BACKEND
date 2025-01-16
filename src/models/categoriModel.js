import mongoose from "mongoose";
const {Schema}=mongoose
const categoriSchema = new Schema({
    code :String,
    name :String,
    image :String,
    createdAt:Date,
    updatedAt:Date,
    deleteAt:Date
   
},{
    versionKey :false,
    collection:'categories',

})

const categoriModel=mongoose.model('categories',categoriSchema);
export default categoriModel