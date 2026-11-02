import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Input validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please provide name, email, and message." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const host = process.env.SMTP_HOST || "smtp-relay.brevo.com";
    const port = Number(process.env.SMTP_PORT) || 587;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASSWORD;
    const toEmail = process.env.CONTACT_TO_EMAIL || "alielmorshedy10@gmail.com";

    if (!user || !pass) {
      console.error("Missing SMTP credentials in environment variables.");
      return NextResponse.json(
        { error: "Server email configuration is missing." },
        { status: 500 }
      );
    }

    const fromEmail =
      process.env.SMTP_FROM_EMAIL || toEmail || "alielmorshedy10@gmail.com";

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: false, // 587 uses STARTTLS
      auth: {
        user,
        pass,
      },
    });
    await transporter.verify();
console.log("SMTP connection and authentication OK");

  const info = await transporter.sendMail({

      from: `"Portfolio Contact Form" <${fromEmail}>`,
      to: toEmail,
      replyTo: email,
      subject: `New Message from Portfolio: ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #111;">
          <h2 style="color: #4f46e5;">New Portfolio Contact Message</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
          <div style="margin-top: 16px; padding: 12px; background: #f4f4f5; border-radius: 8px;">
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; margin: 0;">${message}</p>
          </div>
        </div>
      `,
    });
    console.log("SMTP send result:", {
  messageId: info.messageId,
  accepted: info.accepted,
  rejected: info.rejected,
  response: info.response,
});

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } 


   catch (error: unknown) {
  const err = error as {
    message?: string;
    code?: string;
    responseCode?: number;
    response?: string;
    command?: string;
  };

  console.error("Contact email failed:", {
    message: err.message,
    code: err.code,
    responseCode: err.responseCode,
    response: err.response,
    command: err.command,
  });

  return NextResponse.json(
    { error: "Unable to send your message. Please try again later." },
    { status: 500 }
  );
}
  


}