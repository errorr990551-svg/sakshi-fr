import { Resend } from "resend";

export const sendMail = async ({ to, cc, subject, html, attachments = [], apiKey }) => {
  try {
    const key = apiKey || (typeof process !== "undefined" ? process.env?.RESEND_API_KEY : undefined);
    if (!key) {
      throw new Error("RESEND_API_KEY environment variable is missing.");
    }

    const resend = new Resend(key);

    const response = await resend.emails.send({
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

    if (response.error) {
      console.error("Resend API Error:", response.error);
      throw new Error(response.error.message || JSON.stringify(response.error));
    }

    console.log("Resend email sent successfully:", response.data);
    return response.data;
  } catch (error) {
    console.error("RESEND ERROR:", error);
    throw error;
  }
};
