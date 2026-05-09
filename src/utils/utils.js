export function generateOTP(){
    return Math.floor(10000 + Math.random() * 900000).toString();
}

export function getOtpHtml(otp){
      return `
    <div style="font-family: Arial, sans-serif; background:#f4f4f4; padding:40px;">
        <div style="max-width:500px; margin:auto; background:white; padding:30px; border-radius:10px; text-align:center; box-shadow:0 0 10px rgba(0,0,0,0.1);">
            
            <h2 style="color:#333;">OTP Verification</h2>
            
            <p style="font-size:16px; color:#555;">
                Use the following OTP to verify your account.
            </p>

            <div style="margin:30px 0;">
                <span style="
                    display:inline-block;
                    background:#007bff;
                    color:white;
                    padding:15px 30px;
                    font-size:28px;
                    letter-spacing:5px;
                    border-radius:8px;
                    font-weight:bold;
                ">
                    ${otp}
                </span>
            </div>

            <p style="color:#777; font-size:14px;">
                This OTP is valid for 10 minutes.
            </p>

            <p style="color:red; font-size:13px;">
                Do not share this OTP with anyone.
            </p>
        </div>
    </div>
    `;

}