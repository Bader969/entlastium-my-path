-- Explicit service_role policies for contact_requests so RLS-enabled-no-policy is resolved.
-- All writes/reads happen via the /api/public/contact-submit server route using the service role.
CREATE POLICY "Service role full access to contact_requests"
ON public.contact_requests
FOR ALL
TO public
USING (auth.role() = 'service_role')
WITH CHECK (auth.role() = 'service_role');

-- Explicit storage policies for the private contact-uploads bucket.
CREATE POLICY "Service role full access to contact-uploads"
ON storage.objects
FOR ALL
TO public
USING (bucket_id = 'contact-uploads' AND auth.role() = 'service_role')
WITH CHECK (bucket_id = 'contact-uploads' AND auth.role() = 'service_role');
