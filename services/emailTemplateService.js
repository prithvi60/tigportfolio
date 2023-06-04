const GetEmailSubject = async (subjectPath) => {
  const buffer = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/utils/email_templates/${subjectPath}`
  );

  return await buffer.text();
};

const replaceTemplate = (emailBody, data) => {
  for (const key in data) {
    const regex = new RegExp("\\${" + key + "}", "g");
    emailBody = emailBody.replace(regex, data[key]);
  }
  return emailBody;
};

const GetEmailBody = async (bodyPath, data) => {
  const bufferBody = await fetch(
    `${process.env.NEXT_PUBLIC_APP_URL}/utils/email_templates/${bodyPath}`
  );
  const emailBody = await bufferBody.text();
  const emailBodyParsed = replaceTemplate(emailBody, data);
  return emailBodyParsed.toString();
};

export { GetEmailSubject, GetEmailBody };
