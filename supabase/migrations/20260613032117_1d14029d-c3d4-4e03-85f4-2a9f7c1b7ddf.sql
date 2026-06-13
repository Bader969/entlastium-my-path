
CREATE TABLE public.contact_requests (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL,
  email TEXT NOT NULL,
  phone TEXT,
  room_type TEXT NOT NULL,
  room_type_label TEXT NOT NULL,
  room_size_m2 TEXT NOT NULL,
  room_size_m3 TEXT,
  address TEXT,
  message TEXT,
  image_paths TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);

GRANT ALL ON public.contact_requests TO service_role;

ALTER TABLE public.contact_requests ENABLE ROW LEVEL SECURITY;

-- No anon/authenticated policies: writes happen via service role inside the public action route.

-- Storage RLS: contact-uploads bucket is private; only service role accesses objects.
-- Default storage.objects RLS already denies anon/authenticated without policies, which is what we want.
