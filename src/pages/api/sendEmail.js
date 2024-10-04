import transporter from '../../lib/nodemailer';

export default async function handler(req, res) {
    console.log(process.env.EMAIL_USER)
    if (req.method === 'POST') {
        const { userMessage } = req.body;

        try {
            const result = await transporter.sendMail({
                from: "anky3210@gmail.com",
                to: "adityayadav300645@gmail.com",
                subject: 'Notification from Portfolio',
                text: userMessage,
            });

            console.log('Email sent: ', result);
            return res.status(200).json({ success: true, message: 'Email sent successfully!' });
        } catch (error) {
            console.error('Error sending email: ', error);
            return res.status(500).json({ success: false, message: 'Error sending email.' });
        }
    } else {

        res.setHeader('Allow', ['POST']);
        res.status(405).end(`Method ${req.method} Not Allowed`);
    }
}
