import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

const sendEmail = async (to, subject , text ) => {
    const response = await resend.emails.send({
        from: "sujalsoni <hello@sujalsoni.in>",
        to,
        subject,
        text
    })
    return response;
}

sendEmail("sujalkrsoni@gmail.com", "Hello", "This is a test email from resend");

