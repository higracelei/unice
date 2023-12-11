import { createClient } from '@supabase/supabase-js'

const url = "https://clnu7a25g6hclq1elc10.baseapi.memfiredb.com"
const key = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJyb2xlIjoiYW5vbiIsImV4cCI6MzIzOTc1MTU5MiwiaWF0IjoxNzAxODMxNTkyLCJpc3MiOiJzdXBhYmFzZSJ9.n5xkuNmce-ittj_EigpdD3tx5-tbnah8NAk7xkFudVY"

export const supabase = createClient(url, key)