import supabase from "./supabase";

export async function getGuests() {
  const { data: guests, error } = await supabase.from("guests").select("*");

  if (error) {
    console.error(error);
    throw new Error("Booking not found");
  }

  return data;
}
