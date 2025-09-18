import { Resend } from "resend";
import { EmailTemplate } from "@/app/components/EmailTemplate";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    const form = await req.formData();
    const email = String(form.get("email") || "");
    const message = String(form.get("message") || "");
    const honeypot = String(form.get("company") || "");
    const renderedAt = Number(form.get("renderedAt") || 0);
  
    // 1) Honeypot: if filled, silently succeed (pretend we accepted it)
    if (honeypot.trim()) {
      return Response.json({ ok: true });
    }
  
    // 2) "Too fast" trap: bots submit instantly
    if (renderedAt && Date.now() - renderedAt < 2000) {
      return Response.json({ ok: true });
    }
  
    if (!email || !message) {
      return Response.json({ ok: false, error: "Missing fields" }, { status: 400 });
    }
  
    try {
        const { data, error } = await resend.emails.send({
          from: 'UELSKI <sam@uelski.dev>',
          to: [process.env.TO_EMAIL || ""],
          subject: "New portfolio contact",
          react: EmailTemplate({ message, email }),
        });
        console.log(data, error);
        if (error) {
          return Response.json({ error }, { status: 500 });
        }
    
        return Response.json(data, { status: 200 });
      } catch (error) {
        console.log(error);
        return Response.json({ error }, { status: 500 });
      }
  }