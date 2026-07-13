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
): Promise<{ success: boolean; error?: string; statusCode?: number; body?: string }> {
  try {
    const payload = {
      from: "FINBYTECHNOVATION <onboarding@resend.dev>",
      to: [to],
      reply_to: "info@finbytech.com",
      subject,
      html,
    };

    console.log("Calling Resend API. Payload to:", to, "Subject:", subject.substring(0, 60));

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${resendApiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    });

    const responseBody = await res.text();
    console.log(`Resend API responded: HTTP ${res.status} — ${responseBody.substring(0, 300)}`);

    if (!res.ok) {
      return { success: false, error: responseBody, statusCode: res.status, body: responseBody };
    }
    return { success: true, body: responseBody };
  } catch (err) {
    const msg = err instanceof Error ? `${err.name}: ${err.message}` : String(err);
    console.error("Resend fetch threw an exception:", msg);
    return { success: false, error: msg };
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
    <div style="background:linear-gradient(135deg,#c9a84c 0%,#a8863a 100%);padding:32px 40px;text-align:center;">
      <h1 style="color:#0a0d14;margin:0;font-size:22px;font-weight:700;">New Business Inquiry</h1>
      <p style="color:rgba(10,13,20,0.7);margin:8px 0 0;font-size:14px;">FINBYTECHNOVATION IT SOLUTIONS</p>
    </div>
    <div style="padding:32px 40px;">
      <div style="background:#fdf8ee;border-radius:8px;padding:16px 20px;margin-bottom:24px;border-left:4px solid #c9a84c;">
        <p style="margin:0 0 4px;font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">Submission ID</p>
        <p style="margin:0;font-size:13px;color:#1a1a2e;font-weight:600;font-family:monospace;">${data.id}</p>
        <p style="margin:4px 0 0;font-size:12px;color:#6b7280;">${data.dateStr} IST</p>
      </div>
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:11px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;width:32%;">
            <span style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">Name</span>
          </td>
          <td style="padding:11px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;">
            <span style="font-size:15px;color:#1a1a2e;font-weight:600;">${data.name}</span>
          </td>
        </tr>
        <tr>
          <td style="padding:11px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;">
            <span style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">Email</span>
          </td>
          <td style="padding:11px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;">
            <a href="mailto:${data.email}" style="font-size:15px;color:#c9a84c;text-decoration:none;font-weight:600;">${data.email}</a>
          </td>
        </tr>
        <tr>
          <td style="padding:11px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;">
            <span style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">Phone</span>
          </td>
          <td style="padding:11px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;">
            <span style="font-size:15px;color:#1a1a2e;">${data.phone || "Not provided"}</span>
          </td>
        </tr>
        <tr>
          <td style="padding:11px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;">
            <span style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">Company</span>
          </td>
          <td style="padding:11px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;">
            <span style="font-size:15px;color:#1a1a2e;">${data.company || "Not provided"}</span>
          </td>
        </tr>
        <tr>
          <td style="padding:11px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;">
            <span style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">Inquiry Type</span>
          </td>
          <td style="padding:11px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;">
            <span style="display:inline-block;background:#fdf8ee;color:#a8863a;padding:2px 10px;border-radius:12px;font-size:13px;font-weight:700;border:1px solid #e2c27a;text-transform:capitalize;">${data.inquiry_type}</span>
          </td>
        </tr>
        <tr>
          <td style="padding:11px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;">
            <span style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">Subject</span>
          </td>
          <td style="padding:11px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;">
            <span style="font-size:15px;color:#1a1a2e;font-weight:600;">${data.subject}</span>
          </td>
        </tr>
        ${data.page_url ? `
        <tr>
          <td style="padding:11px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;">
            <span style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">Source URL</span>
          </td>
          <td style="padding:11px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;">
            <span style="font-size:12px;color:#6b7280;word-break:break-all;">${data.page_url}</span>
          </td>
        </tr>` : ""}
      </table>
      <div style="margin-top:24px;">
        <p style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:10px;">Message</p>
        <div style="background:#fdf8ee;border-radius:8px;padding:20px;border:1px solid #e2c27a;">
          <p style="margin:0;font-size:15px;color:#1a1a2e;line-height:1.75;white-space:pre-wrap;">${data.message}</p>
        </div>
      </div>
      <div style="margin-top:28px;padding-top:20px;border-top:1px solid #f0f0f0;">
        <a href="mailto:${data.email}?subject=Re: ${encodeURIComponent(data.subject)}&body=Hi ${encodeURIComponent(data.name)},"
           style="display:inline-block;background:linear-gradient(135deg,#c9a84c,#a8863a);color:#0a0d14;padding:12px 28px;border-radius:8px;text-decoration:none;font-size:15px;font-weight:700;">
          Reply to ${data.name}
        </a>
      </div>
    </div>
    <div style="background:#fdf8ee;padding:20px 40px;text-align:center;border-top:1px solid #e2c27a;">
      <p style="margin:0;font-size:12px;color:#9ca3af;line-height:1.6;">
        FINBYTECHNOVATION IT SOLUTIONS (OPC) PRIVATE LIMITED<br>
        CIN: U62013UP2024OPC213677 | Jhansi, Uttar Pradesh, India<br>
        <a href="mailto:info@finbytech.com" style="color:#c9a84c;text-decoration:none;">info@finbytech.com</a>
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

  // ── DEBUG endpoint: GET /contact-form?debug=1 ──────────────────────────
  if (req.method === "GET") {
    const url = new URL(req.url);
    if (url.searchParams.get("debug") === "1") {
      const key = "re_QxGrTyVA_AyDKNZxqHJnSv3KXpXR554Vf";
      console.log("DEBUG: testing Resend key (first 12 chars):", key.substring(0, 12));
      const testResult = await sendEmailViaResend(
        "finbytechit@gmail.com",
        "DEBUG: Resend API Test from Edge Function",
        "<p>Debug test from Supabase Edge Function — verifying Resend API connectivity and key validity.</p>",
        key
      );
      return new Response(JSON.stringify({ key_prefix: key.substring(0, 8), ...testResult }, null, 2), {
        status: 200,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }
    return new Response(JSON.stringify({ status: "contact-form edge function running" }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
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

    if (!name?.trim()) {
      return new Response(JSON.stringify({ error: "Name is required" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }
    if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: "A valid email address is required" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }
    if (!subject?.trim()) {
      return new Response(JSON.stringify({ error: "Subject is required" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }
    if (!message?.trim() || message.trim().length < 10) {
      return new Response(JSON.stringify({ error: "Message must be at least 10 characters" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }
    if (message.length > 5000) {
      return new Response(JSON.stringify({ error: "Message is too long (max 5000 characters)" }), { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const ip_address = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown";

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
      console.error("DB insert error:", JSON.stringify(dbError));
      return new Response(JSON.stringify({ error: "Failed to save your message. Please try again." }), { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } });
    }

    const now = new Date();
    const dateStr = now.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    // Always use the new key — old RESEND_API_KEY secret in env is stale/invalid (re_M9MQG...).
    const resendApiKey = "re_QxGrTyVA_AyDKNZxqHJnSv3KXpXR554Vf";
    console.log("Resend key prefix:", resendApiKey.substring(0, 8), "Length:", resendApiKey.length);

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

    const emailSubject = `[Inquiry] ${inquiry_type ? inquiry_type.charAt(0).toUpperCase() + inquiry_type.slice(1) : "General"}: ${subject.trim()} — ${name.trim()}`;

    const emailResult = await sendEmailViaResend(
      "finbytechit@gmail.com",
      emailSubject,
      emailHtml,
      resendApiKey
    );

    if (!emailResult.success) {
      console.error(
        `Email FAILED for submission ${savedData.id}. ` +
        `HTTP Status: ${emailResult.statusCode}. Error body: ${emailResult.error}`
      );
    } else {
      console.log(`Email sent OK for submission ${savedData.id}. Resend response: ${emailResult.body}`);
    }

    console.log(`SUMMARY: id=${savedData.id} from="${name.trim()}" <${email.trim()}> type=${inquiry_type} emailSent=${emailResult.success}`);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Your message has been received successfully. We will get back to you within 24 hours.",
        id: savedData.id,
        email_sent: emailResult.success,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (err) {
    const msg = err instanceof Error ? `${err.name}: ${err.message}` : String(err);
    console.error("Unhandled error:", msg);
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred. Please try again or contact us directly." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
