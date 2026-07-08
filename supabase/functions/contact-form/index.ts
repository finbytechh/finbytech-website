import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

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

    // Basic spam protection
    if (message.length > 5000) {
      return new Response(
        JSON.stringify({ error: "Message is too long" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Get IP address
    const ip_address = req.headers.get("x-forwarded-for") ||
                       req.headers.get("x-real-ip") ||
                       "unknown";

    // Save to Supabase
    const supabase = createClient(
      Deno.env.get("SUPABASE_URL") ?? "",
      Deno.env.get("SUPABASE_SERVICE_ROLE_KEY") ?? ""
    );

    const { data, error: dbError } = await supabase
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

    // Format date/time (IST)
    const now = new Date();
    const dateStr = now.toLocaleString("en-IN", { timeZone: "Asia/Kolkata" });

    // Log submission details for monitoring
    console.log(`New contact form submission:
      ID: ${data.id}
      From: ${name} <${email}>
      Company: ${company || "N/A"}
      Phone: ${phone || "N/A"}
      Inquiry: ${inquiry_type}
      Subject: ${subject}
      Page: ${page_url || "N/A"}
      Time: ${dateStr}
    `);

    return new Response(
      JSON.stringify({
        success: true,
        message: "Your message has been received successfully. We will get back to you within 24 hours.",
        id: data.id
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
