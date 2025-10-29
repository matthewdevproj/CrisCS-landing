import { Resend } from 'resend';
const resend = new Resend(import.meta.env.RESEND_API_KEY);

export async function POST({ request }) {
  const formData = await request.formData();
  const name = formData.get('name')?.toString() ?? '';
  const email = formData.get('email')?.toString() ?? '';
  const message = formData.get('message')?.toString() ?? '';

  try {
    await resend.emails.send({
      from: 'Cris Construction Services <onboarding@resend.dev>',
      to: 'crisconstructionservice@gmail.com',
      replyTo: email,
      subject: `Estimation request from ${name}`,
      html: `
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
                <br/>
                <hr/>
                <p style="font-size: 12px; color: #666;">
                This message was sent through the Cris Construction Services website contact form.
                </p>
            `,
    });

    return new Response('OK', { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(error), { status: 500 });
  }
}
