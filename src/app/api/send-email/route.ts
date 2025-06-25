import { NextResponse } from "next/server";
import nodemailer from "nodemailer"

export const POST = async (req: Request) => {
    try {
        const body = await req.json()
        const { name, email, message } = body;
        if (!email || !name || !message) {
            return NextResponse.json(
                { error: "Please provide name, email and message" },
                { status: 400 }
            )
        }

        const transpoter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS
            }
        })

        const mailOptions = {
            from: `"${name}" <${email}>`,
            to: process.env.EMAIL_USER,
            subject: "New Contact Form Message",
            text: `Message from ${name} (${email}):\n\n${message}`,
            html: `<p>Message from <strong>${name}</strong> (${email}):</p><p>${message}</p>`,
        };
        await transpoter.sendMail(mailOptions)
        return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error sending mail:", error);
        return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
    }

}