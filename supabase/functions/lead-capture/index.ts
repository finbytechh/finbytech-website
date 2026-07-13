import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const RESEND_API_KEY = "re_QxGrTyVA_AyDKNZxqHJnSv3KXpXR554Vf";
const NOTIFY_EMAIL = "finbytechit@gmail.com";

async function sendLeadEmail(lead: {
  name: string;
  email: string;
  phone: string | null;
  service_interest: string | null;
  message: string | null;
  source: string;
  page_url: string | null;
  id: string;
  dateStr: string;
}): Promise<{ success: boolean; error?: string }> {
  try {
    const html = `<!DOCTYPE html>
<html lang="en">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1.0">
<title>New Lead Captured</title>
</head>
<body style="margin:0;padding:0;font-family:'Segoe UI',Arial,sans-serif;background:#f4f6fa;">
  <div style="max-width:560px;margin:32px auto;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 4px 24px rgba(0,0,0,0.08);">
    <div style="background:linear-gradient(135deg,#c9a84c 0%,#a8863a 100%);padding:28px 36px;text-align:center;">
      <h1 style="color:#0a0d14;margin:0;font-size:20px;font-weight:700;">New Lead Captured</h1>
      <p style="color:rgba(10,13,20,0.7);margin:6px 0 0;font-size:13px;">From: ${lead.source.replace(/_/g, ' ')} on finbytech.com</p>
    </div>
    <div style="padding:28px 36px;">
      <div style="background:#fdf8ee;border-radius:8px;padding:14px 18px;margin-bottom:20px;border-left:4px solid #c9a84c;">
        <p style="margin:0 0 3px;font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">Lead ID & Time</p>
        <p style="margin:0;font-size:13px;color:#1a1a2e;font-weight:600;font-family:monospace;">${lead.id}</p>
        <p style="margin:3px 0 0;font-size:12px;color:#6b7280;">${lead.dateStr} IST</p>
      </div>
      <table style="width:100%;border-collapse:collapse;">
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;width:32%;"><span style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">Name</span></td>
          <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;"><span style="font-size:15px;color:#1a1a2e;font-weight:600;">${lead.name}</span></td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;"><span style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">Email</span></td>
          <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;"><a href="mailto:${lead.email}" style="font-size:15px;color:#c9a84c;text-decoration:none;font-weight:600;">${lead.email}</a></td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;"><span style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">Phone</span></td>
          <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;"><span style="font-size:15px;color:#1a1a2e;">${lead.phone || "Not provided"}</span></td>
        </tr>
        <tr>
          <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;"><span style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">Service Interest</span></td>
          <td style="padding:10px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;"><span style="display:inline-block;background:#fdf8ee;color:#a8863a;padding:2px 10px;border-radius:12px;font-size:13px;font-weight:700;border:1px solid #e2c27a;">${lead.service_interest || "Not specified"}</span></td>
        </tr>
        ${lead.page_url ? `<tr><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;"><span style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;">Source Page</span></td><td style="padding:10px 0;border-bottom:1px solid #f0f0f0;vertical-align:top;"><span style="font-size:12px;color:#6b7280;word-break:break-all;">${lead.page_url}</span></td></tr>` : ""}
      </table>
      ${lead.message ? `<div style="margin-top:20px;"><p style="font-size:11px;color:#6b7280;text-transform:uppercase;letter-spacing:0.05em;margin-bottom:8px;">Message</p><div style="background:#fdf8ee;border-radius:8px;padding:16px;border:1px solid #e2c27a;"><p style="margin:0;font-size:14px;color:#1a1a2e;line-height:1.75;white-space:pre-wrap;">${lead.message}</p></div></div>` : ""}
      <div style="margin-top:24px;padding-top:18px;border-top:1px solid #f0f0f0;">
        <a href="mailto:${lead.email}?subject=Re: Your inquiry to Finbytechnovation&body=Hi ${encodeURIComponent(lead.name)}, thank you for your interest!" style="display:inline-block;background:linear-gradient(135deg,#c9a84c,#a8863a);color:#0a0d14;padding:11px 26px;border-radius:8px;text-decoration:none;font-size:14px;font-weight:700;">Reply to ${lead.name}</a>
      </div>
    </div>
    <div style="background:#fdf8ee;padding:16px 36px;text-align:center;border-top:1px solid #e2c27a;">
      <p style="margin:0;font-size:11px;color:#9ca3af;line-height:1.6;">FINBYTECHNOVATION IT SOLUTIONS (OPC) PRIVATE LIMITED<br>CIN: U62013UP2024OPC213677 | Jhansi, Uttar Pradesh, India</p>
    </div>
  </div>
</body>
</html>`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "FINBYTECHNOVATION <onboarding@resend.dev>",
        to: [NOTIFY_EMAIL],
        reply_to: lead.email,
        subject: `[New Lead] ${lead.name} — ${lead.service_interest || "General Inquiry"}`,
        html,
      }),
    });

    const responseText = await res.text();
    console.log(`Resend response [${res.status}]:`, responseText);

    if (!res.ok) {
      return { success: false, error: responseText };
    }
    return { success: true };
  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("Resend error:", msg);
    return { success: false, error: msg };
  }
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
    const { name, email, phone, service_interest, message, source, page_url } = body;

    // Validation
    if (!name?.trim()) {
      return new Response(
        JSON.stringify({ error: "Name is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    if (!email?.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(
        JSON.stringify({ error: "A valid email is required" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    if (name.length > 100) {
      return new Response(
        JSON.stringify({ error: "Name is too long" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }
    if (message && message.length > 2000) {
      return new Response(
        JSON.stringify({ error: "Message is too long" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const ip_address = req.headers.get("x-forwarded-for") ||
                       req.headers.get("x-real-ip") || "unknown";

    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const { data: savedData, error: dbError } = await supabase
      .from("leads")
      .insert({
        name: name.trim(),
        email: email.trim().toLowerCase(),
        phone: phone?.trim() || null,
        service_interest: service_interest || null,
        message: message?.trim() || null,
        source: source || "popup",
        page_url: page_url || null,
        ip_address,
        status: "new",
      })
      .select("id")
      .single();

    if (dbError) {
      console.error("DB insert error:", JSON.stringify(dbError));
      return new Response(
        JSON.stringify({ error: "Failed to save lead. Please try again." }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const dateStr = new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    const emailResult = await sendLeadEmail({
      name: name.trim(),
      email: email.trim().toLowerCase(),
      phone: phone?.trim() || null,
      service_interest: service_interest || null,
      message: message?.trim() || null,
      source: source || "popup",
      page_url: page_url || null,
      id: savedData.id,
      dateStr,
    });

    if (!emailResult.success) {
      console.error(`Lead email FAILED for ${savedData.id}: ${emailResult.error}`);
    } else {
      console.log(`Lead email sent OK for ${savedData.id}`);
    }

    console.log(`LEAD: id=${savedData.id} name="${name.trim()}" email=${email.trim()} source=${source || "popup"} emailSent=${emailResult.success}`);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Thank you! We'll contact you within 24 hours.",
        id: savedData.id,
        email_sent: emailResult.success,
      }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );

  } catch (err) {
    const msg = err instanceof Error ? err.message : String(err);
    console.error("Unhandled error:", msg);
    return new Response(
      JSON.stringify({ error: "An unexpected error occurred. Please try again." }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
