-- Create the early_access table
CREATE TABLE IF NOT EXISTS public.early_access (
  id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
  email TEXT NOT NULL,
  user_type TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);

-- Enable Row Level Security if it's not already enabled
ALTER TABLE public.early_access ENABLE ROW LEVEL SECURITY;

-- Allow anonymous users to insert into the table
CREATE POLICY "Allow public insert" ON public.early_access
  FOR INSERT
  USING (true);

-- Optional: deny updates and deletes from public role
CREATE POLICY "Deny public update" ON public.early_access
  FOR UPDATE
  USING (false);

CREATE POLICY "Deny public delete" ON public.early_access
  FOR DELETE
  USING (false);
