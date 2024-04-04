import mongoose from 'mongoose';

const MONGODB_URI=process.env.MONGODB_URI;
let cached=(global as any).mongoose || {conn:null, promise:null};
// Here we are initializing a cached variable (intended to store the cached connection )
// Here we are trying to retrieve the global property from mongoose object
// (global as any) provides the space to store the global variables

export const connectToDatabase=async()=>{
    if(cached.conn) return cached.conn();
    // if cached is connected (this uis where when our connection in running for the first time)

    if(!MONGODB_URI){
        throw new Error("MONGODB_URI is missing");
    }
    // If connection exisit then connect with it ot if it is not then create a new connectio 
    cached.promise=cached.promise || mongoose.connect(MONGODB_URI ,{
      dbName: 'evenify',
      bufferCommands:false,
    })     
    // If we don't do caching or promise caching then every time it will be creating a new connection request connectToDatabse() rather than to use existing one, this caching promise helped us to be efficient by using the existing connection
    cached.conn=await cached.promise;
    return  cached.conn;
}
