import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, phone, email, address, propertyType, service, description, date, urgency } = body;

  try {
    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "kwan2station@gmail.com",
      subject: `New Repair Request from ${name}`,
      html: `
        <h2>New Repair Request - KWAN-2</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Address:</strong> ${address}</p>
        <p><strong>Property Type:</strong> ${propertyType}</p>
        <p><strong>Service Needed:</strong> ${service}</p>
        <p><strong>Description:</strong> ${description}</p>
        <p><strong>Preferred Date:</strong> ${date}</p>
        <p><strong>Urgency:</strong> ${urgency}</p>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
  }
}