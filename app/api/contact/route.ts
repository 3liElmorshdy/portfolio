import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { contactSchema } from "@/lib/validations/contact";

async function sendWhatsAppNotification(
  name: string,
  email: string,
  message: string
) {
  const phone = process.env.CALLMEBOT_PHONE || "201067219108";
  const apiKey = process.env.CALLMEBOT_APIKEY || "8999100";

  if (!phone || !apiKey) {
    return;
  }

  const text = `📬 *New Portfolio Message!*\n\n👤 *Name:* ${name}\n📧 *Email:* ${email}\n💬 *Message:*\n${message}`;

  try {
    const url = `https://api.callmebot.com/whatsapp.php?phone=${phone}&text=${encodeURIComponent(
      text
    )}&apikey=${apiKey}`;
    const res = await fetch(url, { method: "GET" });
    if (!res.ok) {
      console.warn("CallMeBot HTTP response status:", res.status);
    } else {
      console.log("CallMeBot WhatsApp notification sent successfully.");
    }
  } catch (err) {
    console.error("Failed to send CallMeBot WhatsApp notification:", err);
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // 1. Zod Server-Side Validation
    const validation = contactSchema.safeParse(body);
    if (!validation.success) {
      const fieldErrors = validation.error.flatten().fieldErrors;
      const firstErrorMessage =
        validation.error.issues[0]?.message || "Invalid input data.";
      return NextResponse.json(
        { error: firstErrorMessage, errors: fieldErrors },
        { status: 400 }
      );
    }

    const { name, email, message } = validation.data;

    // 2. Trigger WhatsApp notification in parallel
    const whatsappPromise = sendWhatsAppNotification(name, email, message);

    // 3. Brevo SMTP Email
    const host = process.env.SMTP_HOST || "smtp-relay.brevo.com";
    const port = Number(process.env.SMTP_PORT) || 587;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASSWORD;
    const toEmail = process.env.CONTACT_TO_EMAIL || "alielmorshedy10@gmail.com";
    const fromEmail =
      process.env.SMTP_FROM_EMAIL || toEmail || "fodial3oda@gmail.com";

    if (!user || !pass) {
      console.error("Missing SMTP credentials in environment variables.");
    } else {
      const transporter = nodemailer.createTransport({
        host,
        port,
        secure: false, // 587 uses STARTTLS
        auth: {
          user,
          pass,
        },
      });

      await transporter.sendMail({
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
      console.log("Email sent successfully via Brevo SMTP.");
    }

    await whatsappPromise;

    return NextResponse.json({
      success: true,
      message: "Message sent successfully!",
    });
  } catch (error: unknown) {
    const err = error as {
      message?: string;
      code?: string;
      responseCode?: number;
      response?: string;
      command?: string;
    };

    console.error("Contact request error:", {
      message: err.message,
      code: err.code,
      responseCode: err.responseCode,
      response: err.response,
      command: err.command,
    });

    return NextResponse.json(
      {
        error:
          err.message ||
          "Unable to send your message. Please try again later.",
      },
      { status: 500 }
    );
  }
}
