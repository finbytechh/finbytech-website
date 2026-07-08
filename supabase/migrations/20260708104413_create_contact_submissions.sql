/*
# Create contact_submissions table

1. New Tables
- `contact_submissions` - stores all contact form submissions from the website
  - `id` (uuid, primary key)
  - `name` (text, not null) - full name of the submitter
  - `email` (text, not null) - email address
  - `phone` (text) - phone number (optional)
  - `company` (text) - company name (optional)
  - `inquiry_type` (text) - type of inquiry (general, business, services, etc.)
  - `subject` (text, not null) - subject line
  - `message` (text, not null) - full message
  - `page_url` (text) - page from which the form was submitted
  - `ip_address` (text) - IP address if available
  - `status` (text, default 'new') - new, read, replied, archived
  - `created_at` (timestamptz, default now())

2. Security
- Enable RLS on `contact_submissions`
- Anon users can INSERT (submit form without login)
- No SELECT/UPDATE/DELETE from anon (admin only via service role)

3. Notes
- No user authentication required - this is a public contact form
- INSERT is open to anon so the website can submit forms
- Reading submissions is restricted to service role (admin backend only)
*/

CREATE TABLE IF NOT EXISTS contact_submissions (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  phone text,
  company text,
  inquiry_type text DEFAULT 'general',
  subject text NOT NULL,
  message text NOT NULL,
  page_url text,
  ip_address text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE contact_submissions ENABLE ROW LEVEL SECURITY;

DROP POLICY IF EXISTS "anon_insert_contact" ON contact_submissions;
CREATE POLICY "anon_insert_contact" ON contact_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);
