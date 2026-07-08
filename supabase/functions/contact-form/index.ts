import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

async function sendEmailViaResend(
  to: string,
  subject: string,
  html: string,
  resendApiKey: string
): Promise<boolean> {
  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "FINBYTECHNOVATION <noreply@finbytech.com>",
        to: [to],
        subject,
        html,
      }),
    });
    if (!res.ok) {
      const err = await res.text();
      console.error("Resend API error:", err);
      return false;
    }
    return true;
  } catch (err) {
    console.error("Resend fetch error:", err);
    return false;
  }
}

function buildEmailHtml(data: {
  name: string;
  email: string;
  phone: string | null;
  company: string | null;
  inquiry_type: string;
  subject: string;
  message: string;
  page_url: string | null;
  id: string;
  dateStr: string;
}): string {
  return `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>New Contact Form Submission</title>
</head>
<body style="margin:0;padding:0;font-family:'Segoe UI',Arial,sans-serif;background:#f4f6fa;">
  <div style="max-width:600px;margin:32px auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
    <div style="background:linear-gradient(135deg,#1a4fa0 0%,#0066ff 100%);padding:32px 40px;text-align:center;">
      <h1 style="color:#ffffff;margin:0;font-size:22px;font-weight:700;">New Contact Form Submission</h1>
      <p style="color:rgba(255,255,255,0.8);margin:8px 0 0;font-size:14px;">FINBYTECHNOVATION IT SOLUTIONS</p>
    </div>
    <div style="padding:32px 40px;">
      <div style="background:#f8faff;border-radius:8px;padding:20px;margin-bottom:20px;border-left:4px solid #0066ff;">
        <p style="margin:0 0 4px;font-size:12px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">Submission ID</p>
        <p style="margin:0;font-size:14px;color:#1a1a2e;font-weight:600;font-family:monospace;">${data.id}</p>
      </div>
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;width:30%;">
            <span style="font-size:12px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">Name</span>
          </td>
          <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;">
            <span style="font-size:15px;color:#1a1a2e;font-weight:600;">${data.name}</span>
          </td>
        </tr>
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;">
            <span style="font-size:12px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">Email</span>
          </td>
          <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;">
            <a href="mailto:${data.email}" style="font-size:15px;color:#0066ff;text-decoration:none;">${data.email}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;">
            <span style="font-size:12px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">Phone</span>
          </td>
          <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;">
            <span style="font-size:15px;color:#1a1a2e;">${data.phone || "Not provided"}</span>
          </td>
        </tr>
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;">
            <span style="font-size:12px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">Company</span>
          </td>
          <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;">
            <span style="font-size:15px;color:#1a1a2e;">${data.company || "Not provided"}</span>
          </td>
        </tr>
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;">
            <span style="font-size:12px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">Inquiry Type</span>
          </td>
          <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;">
            <span style="display:inline-block;background:#e8f0fe;color:#1a4fa0;padding:2px 10px;border-radius:12px;font-size:13px;font-weight:600;text-transform:capitalize;">${data.inquiry_type}</span>
          </td>
        </tr>
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;">
            <span style="font-size:12px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">Subject</span>
          </td>
          <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;">
            <span style="font-size:15px;color:#1a1a2e;font-weight:600;">${data.subject}</span>
          </td>
        </tr>
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;">
            <span style="font-size:12px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">Submitted</span>
          </td>
          <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;">
            <span style="font-size:15px;color:#1a1a2e;">${data.dateStr}</span>
          </td>
        </tr>
        ${data.page_url ? `
        <tr>
          <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;">
            <span style="font-size:12px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">Page URL</span>
          </td>
          <td style="padding:12px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;">
            <span style="font-size:13px;color:#6b7280;word-break:break-all;">${data.page_url}</span>
          </td>
        </tr>` : ""}
      </table>
      <div style="margin-top:24px;">
        <p style="font-size:12px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:12px;">Message</p>
        <div style="background:#f8faff;border-radius:8px;padding:20px;border:1px solid #e8f0fe;">
          <p style="margin:0;font-size:15px;color:#1a1a2e;line-height:1.7;white-space:pre-wrap;">${data.message}</p>
        </div>
      </div>
      <div style="margin-top:28px;padding-top:20px;border-top:1px solid #f0f0f0;">
        <a href="mailto:${data.email}?subject=Re: ${encodeURIComponent(data.subject)}"
           style="display:inline-block;background:linear-gradient(135deg,#1a4fa0,#0066ff);color:#ffffff;padding:12px 28px;border-radius:8px;text-decoration:none;font-size:15px;font-weight:600;">
          Reply to ${data.name}
        </a>
      </div>
    </div>
    <div style="background:#f8faff;padding:20px 40px;text-align:center;border-top:1px solid #f0f0f0;">
      <p style="margin:0;font-size:12px;color:#9ca3af;">
        FINBYTECHNOVATION IT SOLUTIONS (OPC) PRIVATE LIMITED<br>
        CIN: U62013UP2024OPC213677 | Jhansi, Uttar Pradesh, India
      </p>
    </div>
  </div>
</body>
</html>`;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    if (req.method !== "POST") {
      return new Response(
        JSON.stringify({ error: "Method not allowed" }),
        { status: 405, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const body = await req.json();
    const { name, email, phone, company, inquiry_type, subject, message, page_url } = body;

    // Validation
    if (!name?.trim()) {
      return new Response(
        JSON.stringify({ error: "Name is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({ error: "A valid email address is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    if (!subject?.trim()) {
      return new Response(
        JSON.stringify({ error: "Subject is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    if (!message?.trim() || message.trim().length < 10) {
      return new Response(
        JSON.stringify({ error: "Message must be at least 10 characters" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    if (message.length > 5000) {
      return new Response(
        JSON.stringify({ error: "Message is too long" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const ip_address = req.headers.get("x-forwarded-for") ||
                       req.headers.get("x-real-ip") ||
                       "unknown";

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const { data: savedData, error: dbError } = await supabase
      .from("contact_submissions")
      .insert({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone?.trim() || null,
        company: company?.trim() || null,
        inquiry_type: inquiry_type || "general",
        subject: subject.trim(),
        message: message.trim(),
        page_url: page_url || null,
        ip_address,
        status: "new"
      })
      .select("id")
      .single();

    if (dbError) {
      console.error("DB error:", dbError);
      return new Response(
        JSON.stringify({ error: "Failed to save your message. Please try again." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const now = new Date();
    const dateStr = now.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    // Send notification email via Resend
    const resendApiKey = Deno.env.get("RESEND_API_KEY");
    if (resendApiKey) {
      const emailHtml = buildEmailHtml({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone?.trim() || null,
        company: company?.trim() || null,
        inquiry_type: inquiry_type || "general",
        subject: subject.trim(),
        message: message.trim(),
        page_url: page_url || null,
        id: savedData.id,
        dateStr,
      });

      const sent = await sendEmailViaResend(
        "finbytechit@gmail.com",
        `[Contact Form] ${inquiry_type ? inquiry_type.charAt(0).toUpperCase() + inquiry_type.slice(1) : "General"}: ${subject.trim()} — ${name.trim()}`,
        emailHtml,
        resendApiKey
      );

      if (!sent) {
        console.warn("Email notification failed to send for submission:", savedData.id);
      } else {
        console.log("Email notification sent for submission:", savedData.id);
      }
    } else {
      console.warn("RESEND_API_KEY not configured. Skipping email notification.");
    }

    console.log(`Contact submission saved: ID=${savedData.id} From=${name} <${email}> Subject=${subject} Time=${dateStr}`);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Your message has been received successfully. We will get back to you within 24 hours.",
        id: savedData.id
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (err) {
    console.error("Error processing contact form:", err);
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred. Please try again or contact us directly." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
