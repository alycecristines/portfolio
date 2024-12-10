import EmailTemplate from "@/components/email-template";
import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY as string);
const fromEmail = process.env.FROM_EMAIL as string;

interface RequestBody {
	email: string;
	subject: string;
	message: string;
}

export async function POST(req: Request) {
	try {
		const { email, subject, message }: RequestBody = await req.json();

		const data = await resend.emails.send({
			from: fromEmail,
			to: [fromEmail, email],
			subject: subject,
			react: EmailTemplate({ subject, message }) as React.ReactElement,
		});

		console.log(data);

		return NextResponse.json(data, { status: 200 });
	} catch (error) {
		console.error("Email sending failed: ", error);
		return NextResponse.json(
			{ error: "Failed to send email" },
			{ status: 500 }
		);
	}
}
