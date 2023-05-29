export function getEditorInvitationTemplate(name: string, username: string, password: string): string {
    return `
    <html>
    <head>
        <style>
            /* Add your CSS styles here */
        </style>
    </head>
    <body>
        <p>Dear ${name},</p>
        <p>You have been invited to join our platform as an Editor. We are excited to have you on board!</p>
        <p>Please find below your login credentials:</p>
        <p>Username: ${username}</p>
        <p>Password: ${password}</p>
        <p>To access your account, please follow these steps:</p>
        <ol>
            <li>Go to our platform at <a href="https://www.enjoymondays.com/login">https://www.enjoymondays.com/login</a>.</li>
            <li>Enter your username and password as provided above.</li>
            <li>Click on the "Login" button to access your account.</li>
        </ol>
        <p>If you have any questions or need further assistance, please don't hesitate to contact our support team at <a href="mailto:support@enjoymondays.com">support@enjoymondays.com</a>.</p>
        <p>We look forward to working with you as an Editor on our platform!</p>
        <p>Best regards,</p>
        <p>Travis Lindemoen</p>
        <p>Enjoy Mondays Team</p>
    </body>
    </html>
  `;
}
