import EmailTemplate from "@/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY as string);
const fromEmail = process.env.FROM_EMAIL as string;
const toEmail = process.env.TO_EMAIL as string;

interface RequestBody {
	email: string;
	subject: string;
	message: string;
	company?: string;
}

export async function POST(req: Request) {
	try {
		const { email, subject, message, company }: RequestBody = await req.json();

		if (company && company.trim() !== "") {
			return NextResponse.json({ ok: true, bot: true }, { status: 200 });
		}

		// 2) Validações com mensagens amigáveis
		if (!email || !subject || !message) {
			return NextResponse.json(
				{
					error:
						"It looks like some fields are missing. Could you fill everything in and try again?",
				},
				{ status: 400 }
			);
		}

		if (!email.includes("@") || email.length < 6) {
			return NextResponse.json(
				{
					error:
						"This doesn’t look like a valid email address. Can you double-check it?",
				},
				{ status: 400 }
			);
		}

		if (subject.length < 8 || message.length < 15) {
			return NextResponse.json(
				{
					error:
						"Your message is a bit too short. If you’re really trying to reach me, please write a few more words 🙂",
				},
				{ status: 400 }
			);
		}

		// 3) Assunto “só código” (string aleatória)
		const randomStringPattern = /^[A-Za-z0-9]{12,}$/;
		if (randomStringPattern.test(subject)) {
			return NextResponse.json(
				{
					error:
						"Your subject looks more like a random code than a real title. If you’re a human, try writing a short sentence about what you’d like to talk about 😊",
				},
				{ status: 400 }
			);
		}

		const data = await resend.emails.send({
			from: fromEmail,
			to: [toEmail, email],
			subject: subject,
			react: EmailTemplate({ subject, message }) as React.ReactElement,
		});

		return NextResponse.json(data, { status: 200 });
	} catch (error) {
		console.error("Email sending failed: ", error);
		return NextResponse.json(
			{ error: "Failed to send email" },
			{ status: 500 }
		);
	}
}
