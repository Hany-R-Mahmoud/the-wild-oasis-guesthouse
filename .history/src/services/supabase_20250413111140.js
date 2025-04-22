import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://fwbhmmimsefigkwbgjtu.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3YmhtbWltc2VmaWdrd2JnanR1Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQxMjYwMzUsImV4cCI6MjA1OTcwMjAzNX0.7H2u661TvS4euPC-m3jOHhW1kvwKebg_lZD-sFvIC7k";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
