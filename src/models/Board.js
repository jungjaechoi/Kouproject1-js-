import mongoose from "mongoose";

const boardSchema = new mongoose.Schema({
    question: {type: String, required: true},
    name: {type: String, required: true}
})


const Board = mongoose.model('Board', boardSchema);
export default Board;