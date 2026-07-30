import { Hono } from "hono";
import { cors } from "hono/cors";
import { serve } from "@hono/node-server";
import { sendMail } from "./services/emailService.js";
import dotenv from "dotenv";

dotenv.config();

const app = new Hono();

// Global CORS Middleware
app.use(
  "*",
  cors({
    origin: "*",
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
  })
);

// Health Check Routes
app.get("/", (c) => c.text("Sakshi Forge API is running!"));
app.get("/health", (c) => c.text("OK"));

// Contact Form Endpoint
app.post("/api/contact", async (c) => {
  try {
    let body;
    const contentType = c.req.header("content-type") || "";
    if (contentType.includes("application/json")) {
      body = await c.req.json();
    } else {
      body = await c.req.parseBody();
    }

    const { name, email, phone, location, company, message } = body || {};

    if (!name || !email || !phone || !message) {
      return c.json(
        { success: false, message: "Please fill in all required fields" },
        400
      );
    }

    const apiKey = c.env?.RESEND_API_KEY || process.env.RESEND_API_KEY;

    try {
      await sendMail({
        to: "sakshiforge1737@gmail.com",
        cc: ["akshat99055@gmail.com", "errorr990551@gmail.com"],
        subject: "New Contact Us Enquiry",
        html: `
          <h2>New Contact Enquiry</h2>
          <p><b>Name:</b> ${name}</p>
          <p><b>Email:</b> ${email}</p>
          <p><b>Phone:</b> ${phone}</p>
          <p><b>Location:</b> ${location || "Not Provided"}</p>
          <p><b>Company:</b> ${company || "Not Provided"}</p>
          <p><b>Message:</b><br/>${message}</p>
        `,
        apiKey,
      });
    } catch (emailErr) {
      console.error("Failed to send contact email:", emailErr);
      return c.json(
        { success: false, message: `Failed to send email: ${emailErr.message || "Email error"}` },
        500
      );
    }

    return c.json({
      success: true,
      message: "Message sent! Our team will get back to you shortly.",
    });
  } catch (err) {
    console.error("Contact API error:", err);
    return c.json(
      { success: false, message: "Something went wrong. Please try again later." },
      500
    );
  }
});

// Complaint Form Endpoint
app.post("/api/complaint", async (c) => {
  try {
    const data = await c.req.parseBody();
    const attachments = [];

    if (data.image && typeof data.image === "object" && data.image.name) {
      const file = data.image;
      const arrayBuffer = await file.arrayBuffer();
      attachments.push({
        filename: file.name,
        content: Buffer.from(arrayBuffer),
        contentType: file.type,
      });
    }

    const apiKey = c.env?.RESEND_API_KEY || process.env.RESEND_API_KEY;

    await sendMail({
      to: "sakshiforge1737@gmail.com",
      cc: ["errorr990551@gmail.com", "akshat99055@gmail.com"],
      subject: "New Complaint Form Submitted",
      html: `
        <h2>New Complaint Received</h2>
        <p><b>Customer Name:</b> ${data.customerName || "N/A"}</p>
        <p><b>Contact Person:</b> ${data.contactPerson || "N/A"}</p>
        <p><b>Email:</b> ${data.email || "N/A"}</p>
        <p><b>Phone:</b> ${data.phone || "N/A"}</p>
        <hr/>
        <p><b>Flow Meter Model:</b> ${data.flowMeterModel || "N/A"}</p>
        <p><b>Serial Number:</b> ${data.serialNumber || "N/A"}</p>
        <p><b>Flow Meter Size:</b> ${data.flowMeterSize || "N/A"}</p>
        <p><b>Make / Brand:</b> ${data.makeBrand || "N/A"}</p>
        <p><b>Warranty Status:</b> ${data.warrantyStatus || "N/A"}</p>
        <hr/>
        <p><b>Nature of Complaint:</b> ${data.complaintNature || "N/A"}</p>
        <p><b>Frequency of Issue:</b> ${data.frequency || "N/A"}</p>
        <p><b>Issue Description:</b><br/>${data.issueDescription || "N/A"}</p>
        <hr/>
        <p><b>On-Site Visit Required:</b> ${data.onSiteVisit || "N/A"}</p>
        <p><b>Calibration Certificate Available:</b> ${data.calibrationCertificate || "N/A"}</p>
        <p><b>Preferred Contact Method:</b> ${data.contactMethod || "N/A"}</p>
        <p><b>Attachment:</b> ${data.image ? "Attached with this email" : "No attachment provided"}</p>
      `,
      attachments,
      apiKey,
    });

    return c.json({
      success: true,
      message: "Complaint submitted successfully! We will review it shortly.",
    });
  } catch (error) {
    console.error("Complaint Form processing error:", error);
    return c.json(
      { success: false, message: "Something went wrong. Please try again." },
      500
    );
  }
});

// Job Application Endpoint
app.post("/api/apply", async (c) => {
  try {
    const data = await c.req.parseBody();
    const { fullName, email, mobile, location, role } = data;

    if (!data.resume || typeof data.resume !== "object" || !data.resume.name) {
      return c.json({ success: false, message: "Resume required" }, 400);
    }

    const file = data.resume;
    const arrayBuffer = await file.arrayBuffer();
    const attachments = [
      {
        filename: file.name,
        content: Buffer.from(arrayBuffer),
        contentType: file.type,
      },
    ];

    const apiKey = c.env?.RESEND_API_KEY || process.env.RESEND_API_KEY;

    await sendMail({
      to: "sales@miraitechnologies.net",
      subject: `New Job Application - ${role || "Position"}`,
      html: `
        <h2>New Job Application</h2>
        <p><b>Name:</b> ${fullName || "N/A"}</p>
        <p><b>Email:</b> ${email || "N/A"}</p>
        <p><b>Mobile:</b> ${mobile || "N/A"}</p>
        <p><b>Location:</b> ${location || "N/A"}</p>
        <p><b>Applied For:</b> ${role || "N/A"}</p>
      `,
      attachments,
      apiKey,
    });

    return c.json({
      success: true,
      message: "Application submitted successfully!",
    });
  } catch (err) {
    console.error("Application processing error:", err);
    return c.json(
      { success: false, message: "Something went wrong. Please try again." },
      500
    );
  }
});

// 404 Handler
app.notFound((c) => {
  return c.json({ success: false, message: "Endpoint not found" }, 404);
});

// Error Handler
app.onError((err, c) => {
  console.error("Unhandled Worker Error:", err);
  return c.json({ success: false, message: err.message || "Internal Server Error" }, 500);
});

// Export default app for Cloudflare Workers / Wrangler
export default app;

// Local development server only when run directly with Node.js (e.g. `node server.js`)
if (
  typeof process !== "undefined" &&
  process.argv &&
  process.argv[1] &&
  process.argv[1].replace(/\\/g, "/").endsWith("server.js")
) {
  const PORT = process.env.PORT || 4000;
  serve({ fetch: app.fetch, port: Number(PORT) }, (info) => {
    console.log(`🚀 Sakshi Forge Server running on http://localhost:${info.port}`);
  });
}
