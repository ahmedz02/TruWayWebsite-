import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    if (!name || !email || !phone || !message) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 })
    }

    const sanitize = (str: string) =>
      str.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;').replace(/'/g, '&#039;')

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
      },
    })

    await transporter.sendMail({
      from: `"Tru-Way Website" <${process.env.SMTP_USER}>`,
      to: 'btrice@tru-way.com',
      replyTo: email,
      subject: `New Contact Form Submission from ${sanitize(name)}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p><strong>Name:</strong> ${sanitize(name)}</p>
            <p><strong>Email:</strong> <a href="mailto:${sanitize(email)}">${sanitize(email)}</a></p>
            <p><strong>Phone:</strong> ${sanitize(phone)}</p>
            <p><strong>Message:</strong></p>
            <div style="background: white; padding: 15px; border-radius: 4px; border-left: 4px solid #4F46E5;">
              <p style="margin:0; white-space:pre-wrap;">${sanitize(message)}</p>
            </div>
          </div>
          <p style="color:#666; font-size:12px; margin-top:20px;">
            Sent from the Tru-Way Community Center contact form at tru-way.com
          </p>
        </div>
      `,
    })

    return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Email error:', error)
    return NextResponse.json({ error: 'Failed to send email. Please try again later.' }, { status: 500 })
  }
}
