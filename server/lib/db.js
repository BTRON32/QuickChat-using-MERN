// import mongoose from "mongoose";

// // function to connect to mongodb db
// export const connectDB=async()=>{
//     try {
//         mongoose.connection.on('Connected',()=>console.log('Database Connected'));
            
//         await mongoose.connect(`${process.env.MONDOGB_URI}/quickchat`)
//     } catch (error) {
//         console.log(error);
        
//     }
// }

import mongoose from "mongoose";

const connectDB=async()=>{
    
    mongoose.connection.on('connected',()=>{
        console.log('Database Connected');
    })
    await mongoose.connect(`${process.env.MONGODB_URI}/quick-chat`)
}

export default connectDB