import { Resend } from "resend";

export const sendMail = async ({ to, cc, subject, html, attachments = [], apiKey }) => {
  try {
    const key = apiKey || process.env.RESEND_API_KEY;
    if (!key) {
      throw new Error("RESEND_API_KEY environment variable is missing.");
    }

    const resend = new Resend(key);

    const data = await resend.emails.send({
      from: "SAKSHI <no-reply@inquiry.errorr.in>",
      to: Array.isArray(to) ? to : [to],
      cc: cc
        ? Array.isArray(cc)
          ? cc
          : [cc]
        : undefined,
      subject,
      html,
      attachments: attachments.map((file) => ({
        filename: file.filename,
        content: file.content,
      })),
    });

    console.log("Resend email sent successfully:", data);
    return data;
  } catch (error) {
    console.error("RESEND ERROR:", error);
    throw error;
  }
};
