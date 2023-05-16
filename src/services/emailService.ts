import sgMail from "@sendgrid/mail";

sgMail.setApiKey(process.env.SENDGRID_API_KEY!);
const verfiedEmail = process.env.SENDGRID_VERIFIED_EMAIL;

interface EmailParams {
    to: string;
    subject: string;
    text: string;
}

export class EmailService {
    static async sendEmail ({ to, subject, text }: EmailParams): Promise<void> {
        const msg: any = {
            to,
            from: verfiedEmail,
            subject,
            text,
        };

        try {
            await sgMail.send(msg);
            console.log('Email sent successfully');
        } catch (error) {
            console.error('Error sending email', error);
            throw error;
        }
    }
}
