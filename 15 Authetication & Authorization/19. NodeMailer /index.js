import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
    host : "smtp.gmail.com",
    port : 587,
    secure : false,
    auth : {
        user : "sujalkrsoni@gmail.com",
        pass : "etnvpniymddofaph" // make sure in production use .env 
    }
})

export const sendEmail = async (email, subject, text) => {
    try {
        const info = await transporter.sendMail({
            from : "sujalkrsoni@gmail.com",
            to : email,
            subject : subject,
            text : text,
            html : "<h1>Hello world! this is my custom html code!</h1>"
        })
        return info
    }catch (err) {
        console.log(err)
    }
}

const result = await sendEmail("sujalsoni740@gmail.com", "Testing Nodemailer ", "This is a test email from nodemailer")

console.log(result)

process.exit(0)