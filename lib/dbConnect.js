//mongodb+srv://nkanyisom:<password>@cluster0.9otfugc.mongodb.net/?retryWrites=true&w=majority

import mongoose from "mongoose";

// windows is available in browser
// like windows we have global variable in node env


global.mongoose = {
    conn: null,
    promise: null
}

export async function dbConnect(){

    if(global.mongoose && global.mongoose.conn){
        console.log('Using Existing mongoose connection');
        return global.mongoose.conn;
    }else{
        console.log('Creatnig new mongoose connection');
        const user = process.env.MONGODB_USER;
        const password = process.env.MONGODB_PASSWORD;
        
        const conString = `mongodb+srv://${user}:${password}@cluster0.9otfugc.mongodb.net/?retryWrites=true&w=majority`;

        const promise = mongoose.connect(conString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            autoIndex: true,
        }).then(mongoose => mongoose);

        global.mongoose = {
            conn: await promise,
            promise
        }

        return await promise;

    }

}