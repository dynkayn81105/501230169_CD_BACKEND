import mongoose from "mongoose";
const {Schema}=mongoose
const categoriSchema = new Schema({
    code :String,
    name :String,
    image :String,
},{
    versionKey :false,
    collection:'categories',

})

const categoriModel=mongoose.model('categories',categoriSchema);
export default categoriModel