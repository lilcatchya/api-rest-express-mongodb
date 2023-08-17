import mongoose from "mongoose";

mongoose.connect('mongodb+srv://lilcatchya:Uatafaque25@alura.i50daja.mongodb.net/alura-node')

let db = mongoose.connection

export default db