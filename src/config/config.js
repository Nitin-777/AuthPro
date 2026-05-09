import dotenv from "dotenv";

dotenv.config();

if(!process.env.MONGO_URI){
     throw new error("MONGO_URI is not defined in env")
}
if(!process.env.JWT_SECRET){
     throw new error("JWT_SECRET is not defined in env")
}
if(!process.env.GOOGLE_CLIENT_ID){
     throw new error("JWT_SECRET is not defined in env")
}
if(!process.env.GOOGLE_CLIENT_SECRET){
     throw new error("JWT_SECRET is not defined in env")
}
if(!process.env.GOOGLE_USER){
     throw new error("JWT_SECRET is not defined in env")
}
if(!process.env.GOOGLE_REFRESH_TOKEN){
     throw new error("JWT_SECRET is not defined in env")
}


const config={
     MONGO_URI: process.env.MONGO_URI,
     JWT_SECRET: process.env.JWT_SECRET,
     GOOGLE_REFRESH_TOKEN:process.env.GOOGLE_REFRESH_TOKEN,
     GOOGLE_USER:process.env.GOOGLE_USER,
     GOOGLE_CLIENT_SECRET:process.env.GOOGLE_CLIENT_SECRET,
     GOOGLE_CLIENT_ID:process.env.GOOGLE_CLIENT_ID,

}

export default config;