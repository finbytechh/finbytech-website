/*
# Create leads table for lead generation popup

1. New Tables
- `leads`
  - `id` (uuid, primary key)
  - `name` (text, not null) — visitor's full name
  - `email` (text, not null) — visitor's email address
  - `phone` (text, nullable) — optional phone number
  - `service_interest` (text, nullable) — which service they're interested in
  - `message` (text, nullable) — optional message
  - `source` (text, default 'popup') — where the lead came from (popup, slide_in, exit_intent)
  - `page_url` (text, nullable) — the page URL where the lead was captured
  - `ip_address` (text, nullable) — visitor IP for spam tracking
  - `status` (text, default 'new') — lead status (new, contacted, converted, archived)
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `leads`.
- This is a no-auth public website, so allow anon + authenticated to INSERT (visitors submit leads).
- No SELECT/UPDATE/DELETE for anon — only the backend (service role) can read/manage leads.
- 4 separate policies: insert (anon+authenticated), select (authenticated only), update (authenticated only), delete (authenticated only).

3. Notes
- The frontend popup submits leads via the edge function, which uses the service role key internally.
- The anon INSERT policy exists as a fallback if the frontend ever inserts directly.
- Email notifications are sent via the lead-capture edge function using Resend.
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  service_interest text,
  message text,
  source text NOT NULL DEFAULT 'popup',
  page_url text,
  ip_address text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow anonymous visitors to insert leads (from the popup form)
DROP POLICY IF EXISTS "anon_insert_leads" ON leads;
CREATE POLICY "anon_insert_leads" ON leads FOR INSERT
  TO anon, authenticated WITH CHECK (true);

-- Only authenticated users (admin) can view leads
DROP POLICY IF EXISTS "auth_select_leads" ON leads;
CREATE POLICY "auth_select_leads" ON leads FOR SELECT
  TO authenticated USING (true);

-- Only authenticated users (admin) can update leads
DROP POLICY IF EXISTS "auth_update_leads" ON leads;
CREATE POLICY "auth_update_leads" ON leads FOR UPDATE
  TO authenticated USING (true) WITH CHECK (true);

-- Only authenticated users (admin) can delete leads
DROP POLICY IF EXISTS "auth_delete_leads" ON leads;
CREATE POLICY "auth_delete_leads" ON leads FOR DELETE
  TO authenticated USING (true);

-- Index for sorting by newest first
CREATE INDEX IF NOT EXISTS idx_leads_created_at ON leads (created_at DESC);
-- Index for filtering by status
CREATE INDEX IF NOT EXISTS idx_leads_status ON leads (status);
