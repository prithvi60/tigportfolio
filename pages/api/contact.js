import { sendEmail } from "../../services/emailTemplateService";
import {
  GetEmailBody,
  GetEmailSubject,
} from "../../services/emailTemplateService";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send({ message: "Only post request allowed" });
  }
  try {
    const { name, email, message } = req.body;
    console.log("reg", name, email, message);
    //send email to admin
    const emailSubject = await GetEmailSubject("contact/contact_subject.txt");

    const data = {
      name: name,
      email: email,
      message: message,
    };

    const emailBody = await GetEmailBody("contact/contact_body.txt", data);

    const emailParam = {
      to: email,
      from: process.env.ADMIN_EMAIL,
      subject: emailSubject,
      text: emailBody,
    };

    sendEmail(emailParam);

    return res.status(200).json({ message: "Contact Email Sent Successfully" });
  } catch (err) {
    console.error(err);
    const errorMessage =
      err instanceof Error ? err.response : "Internal server error";
    res.status(500).json({ message: errorMessage });
  }
}
