import { Hono } from "hono";
import { cors } from "hono/cors";
import { serve } from "@hono/node-server";
import { sendMail } from "./services/emailService.js";
import dotenv from "dotenv";

dotenv.config();

const app = new Hono();

// Global CORS Middleware
// Only the live site (and local dev) may post forms. Browsers always send Origin on these
// cross-site POSTs; anything else is a script or bot.
const ALLOWED_ORIGINS = [
  "https://steelmanufacturer.in",
  "https://www.steelmanufacturer.in",
  "http://localhost:5173",
  "http://localhost:4173",
];

app.use(
  "*",
  cors({
    origin: (origin) => (ALLOWED_ORIGINS.includes(origin) ? origin : null),
    allowMethods: ["GET", "POST", "OPTIONS"],
    allowHeaders: ["Content-Type"],
  })
);

app.use("/api/*", async (c, next) => {
  if (c.req.method === "POST" && !ALLOWED_ORIGINS.includes(c.req.header("origin") || "")) {
    return c.json({ success: false, message: "Forbidden" }, 403);
  }
  await next();
});

// Escape form text before it goes into the email HTML, so a visitor cannot inject links or markup.
const esc = (v, max = 5000) =>
  String(v ?? "")
    .slice(0, max)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

// Health Check Routes
app.get("/", (c) => c.text("Sakshi Forge API is running!"));
app.get("/health", (c) => c.text("OK"));

// Contact Form Endpoint
const handleContact = async (c) => {
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
        // Reply goes to the customer; skipped for a malformed address, which Resend would reject (losing the enquiry)
        replyTo: /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/.test(String(email).trim()) ? String(email).trim() : undefined,
        html: `
          <h2>New Contact Enquiry</h2>
          <p><b>Name:</b> ${esc(name, 200)}</p>
          <p><b>Email:</b> ${esc(email, 200)}</p>
          <p><b>Phone:</b> ${esc(phone, 50)}</p>
          <p><b>Location:</b> ${esc(location || "Not Provided", 200)}</p>
          <p><b>Company:</b> ${esc(company || "Not Provided", 200)}</p>
          <p><b>Message:</b><br/>${esc(message).replace(/\n/g, "<br/>")}</p>
        `,
        apiKey,
      });
    } catch (emailErr) {
      console.error("Failed to send contact email:", emailErr);
      return c.json(
        { success: false, message: "Could not send your message. Please call +91 82913 66340 or email info@steelmanufacturer.in." },
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
};
app.post("/api/contact", handleContact);
app.post("/api/contact/", handleContact);

// 404 Handler
app.notFound((c) => {
  return c.json({ success: false, message: "Endpoint not found" }, 404);
});

// Error Handler
app.onError((err, c) => {
  console.error("Unhandled Worker Error:", err);
  return c.json({ success: false, message: "Internal Server Error" }, 500);
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
