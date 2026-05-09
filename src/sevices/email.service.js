import config from "../config/config.js"
import nodemailer from 'nodemailer'

export const transporter=  nodemailer.createTransport({
    service:'gmail',
    auth: {
        type:'OAuth2',
        user:config.GOOGLE_USER,
        clientId:config.GOOGLE_CLIENT_ID,
        clientSecret:config.GOOGLE_CLIENT_SECRET,
        refreshToken:config.GOOGLE_REFRESH_TOKEN,
    },
});
transporter.verify((error, success)=>{
    if(error){
        console.error('Error connecting to mail server:', error);
    }
    else{
        console.log('Email erver is ready to send messages');
    }
});

export const sendEmail = async (to, subject, text, html) => {
    try {
        const info = await transporter.sendMail({
            from: `"Nitin Sharma" <${config.GOOGLE_USER}>`,
            to,
            subject,
            text,
            html
        });

        console.log("Email sent:", info.messageId);

        return info;
    } catch (error) {
        console.log("Email error:", error.message);
        throw error;
    }
};

