import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.NEXT_PUBLIC_SENDGRID_API_KEY);

const sendEmail = async (emailParams) => {
  const email = {
    to: emailParams.to,
    from: emailParams.from,
    subject: emailParams.subject,
    text: emailParams.text,
  };

  try {
    await sendgrid.send(email);
  } catch (error) {
    throw new Error("Email could not be sent, Please try again later");
  }
};

export { sendEmail };
