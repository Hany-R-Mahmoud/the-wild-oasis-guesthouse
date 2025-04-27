export async function getGuests() {
  const { data: guests, error } = await supabase.from("guests").select("*");
}
