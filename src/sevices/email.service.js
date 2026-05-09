import config from ('../config/config.js')
import nodemailer from ('nodemailer')

const transporter=  nodemailer.createTransport({
    service:'gmail',
    auth: {
        type: 'Oauth2',
        user: GOOGLE_USER,
        clientId: GOOGLE_CLIENT_ID,
        clienSecret: GOOGLE_CLENT_SECRET,
        refreshToken:GOOGLE_REFRESH_TOKEN,
    },
});
transporter.verify((error, success)=>{
    if(err){
        console.error('Error connecting to mail server:', err);
    }
    else{
        console.log('Email erver is ready to send messages');
    }
});


module.exports=transporter;