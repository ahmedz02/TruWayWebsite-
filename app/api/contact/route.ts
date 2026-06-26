import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { name, email, phone, message } = body

    if (!name || !email || !phone || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      )
    }

    const sanitize = (str: string) => {
      return str
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;')
    }

    const sanitizedName = sanitize(name)
    const sanitizedEmail = sanitize(email)
    const sanitizedPhone = sanitize(phone)
    const sanitizedMessage = sanitize(message)

    await resend.emails.send({
      from: 'Tru-Way Website <info@tru-way.com>',
      to: ['btrice@tru-way.com'],
      replyTo: email,
      subject: `New Contact Form Submission from ${sanitizedName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #333; border-bottom: 2px solid #4F46E5; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-top: 20px;">
            <p style="margin: 10px 0;"><strong>Name:</strong> ${sanitizedName}</p>
            <p style="margin: 10px 0;"><strong>Email:</strong> <a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></p>
            <p style="margin: 10px 0;"><strong>Phone:</strong> <a href="tel:${sanitizedPhone}">${sanitizedPhone}</a></p>
            <p style="margin: 10px 0;"><strong>Message:</strong></p>
            <div style="background-color: white; padding: 15px; border-radius: 4px; margin-top: 10px; border-left: 4px solid #4F46E5;">
              <p style="margin: 0; white-space: pre-wrap;">${sanitizedMessage}</p>
            </div>
          </div>
          <p style="color: #666; font-size: 12px; margin-top: 20px;">
            This email was sent from the Tru-Way Community Center Inc. contact form at tru-way.com
          </p>
        </div>
      `,
    })

    return NextResponse.json(
      { message: 'Email sent successfully' },
      { status: 200 }
    )
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    )
  }
}
