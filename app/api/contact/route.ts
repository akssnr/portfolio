import { NextResponse } from "next/server";
import { z } from "zod";
import { Resend } from "resend";
import { siteConfig } from "@/lib/site-config";

const contactSchema = z.object({
  name: z.string().trim().min(1).max(200),
  email: z.string().trim().email().max(320),
  message: z.string().trim().min(1).max(5000),
});

export async function POST(request: Request) {
  const body = await request.json().catch(() => null);
  const parsed = contactSchema.safeParse(body);

  if (!parsed.success) {
    return NextResponse.json({ error: "Invalid submission" }, { status: 400 });
  }

  const { name, email, message } = parsed.data;
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.error("Contact form submitted but RESEND_API_KEY is not configured", {
      name,
      email,
    });
    return NextResponse.json(
      { error: "Contact form is not configured yet" },
      { status: 503 }
    );
  }

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: `Portfolio Contact <contact@${new URL(siteConfig.url).hostname}>`,
      to: siteConfig.email,
      replyTo: email,
      subject: `New message from ${name}`,
      text: `From: ${name} <${email}>\n\n${message}`,
    });
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to send contact email", error);
    return NextResponse.json({ error: "Failed to send message" }, { status: 502 });
  }
}
